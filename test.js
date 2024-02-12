import { expect } from "chai";
import {
  readLogFile,
  extractDateFromTimestamp,
  updateCookieCount,
} from "./most_active_cookie";

describe("most_active_cookie.js", () => {
  describe("readLogFile", () => {
    it("should return a valid readline interface", () => {
      const rl = readLogFile("test.log");
      expect(rl).to.be.an("object");
      rl.close();
    });
  });

  describe("extractDateFromTimestamp", () => {
    it("should extract date from timestamp", () => {
      const date = extractDateFromTimestamp("2018-12-09T14:19:00+00:00");
      expect(date).to.equal("2018-12-09");
    });

    it("should handle invalid timestamp format", () => {
      const invalidTimestamp = "invalid_timestamp";
      const wrapperFn = () => extractDateFromTimestamp(invalidTimestamp);
      expect(wrapperFn).to.throw("Error extracting date from timestamp");
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

  // Add more test cases as needed for processLogFile function
});
