import { expect } from "chai";
import {
  readLogFile,
  extractDateFromTimestamp,
  updateCookieCount,
  processLogFile,
} from "./main.js";

describe("most_active_cookie.js", () => {
  describe("readLogFile", () => {
    it("should return a valid readline interface", () => {
      const rl = readLogFile("cookie_log.csv");
      expect(rl).to.be.an("object");
      rl.close();
    });
  });

  describe("extractDateFromTimestamp", () => {
    it("should extract date from timestamp", () => {
      const date = extractDateFromTimestamp("2018-12-09T14:19:00+00:00");
      expect(date).to.equal("2018-12-09");
    });
  });

  describe("updateCookieCount", () => {
    it("should update cookie count in the map", () => {
      const cookieCount = new Map();
      updateCookieCount(cookieCount, "cookie1");
      updateCookieCount(cookieCount, "cookie2");
      updateCookieCount(cookieCount, "cookie1");
      expect(cookieCount.get("cookie1")).to.equal(2);
      expect(cookieCount.get("cookie2")).to.equal(1);
    });
  });

  describe("processLogFile", () => {
    it("should process the log file and identify the most active cookie", async () => {
      const filePath = "cookie_log.csv";
      const date = "2018-12-09";

      const originalConsoleLog = console.log;
      const capturedOutput = [];

      // Replace console.log with a function that captures output
      console.log = (...args) => capturedOutput.push(args.join(" "));

      await new Promise((resolve) => {
        processLogFile(filePath, date);
        // Resolve after some time (adjust as needed based on the actual async operations)
        setTimeout(resolve, 1000);
      });

      // Restore the original console.log
      console.log = originalConsoleLog;

      // Assert captured output
      expect(capturedOutput).to.include("AtY0laUfhglK3lC7");
    });
  });
});
