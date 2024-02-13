import fs from "fs";
import readline from "readline";

export const readLogFile = (filePath) => {
  try {
    const fileStream = fs.createReadStream(filePath);
    return readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
  }
};

export const extractDateFromTimestamp = (timestamp) => {
  try {
    return new Date(timestamp).toISOString().split("T")[0];
  } catch (error) {
    console.error(`Error extracting date from timestamp: ${error.message}`);
    process.exit(1);
  }
};

export const updateCookieCount = (cookieCount, cookie) => {
  cookieCount.set(cookie, (cookieCount.get(cookie) || 0) + 1);
};

// Process the log file using modular functions
export const processLogFile = (filePath, date) => {
  const cookieCount = new Map();
  const rl = readLogFile(filePath);

  rl.on("line", (line) => {
    const [cookie, timestamp] = line.split(",");
    const logDate = extractDateFromTimestamp(timestamp);

    if (logDate === date) {
      updateCookieCount(cookieCount, cookie);
    }
  });

  rl.on("close", () => {
    const maxCount = Math.max(...cookieCount.values());
    const mostActiveCookies = Array.from(cookieCount.entries())
      .filter(([cookie, count]) => count === maxCount)
      .map(([cookie]) => cookie);

    mostActiveCookies.forEach((cookie) => console.log(cookie));
  });
};
