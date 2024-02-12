const fs = require("fs");
const readline = require("readline");

const readLogFile = (filePath) => {
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

const extractDateFromTimestamp = (timestamp) => {
  try {
    return new Date(timestamp).toISOString().split("T")[0];
  } catch (error) {
    console.error(`Error extracting date from timestamp: ${error.message}`);
    process.exit(1);
  }
};

const updateCookieCount = (cookieCount, cookie) => {
  cookieCount.set(cookie, (cookieCount.get(cookie) || 0) + 1);
};

// Process the log file using modular functions
const processLogFile = (filePath, date) => {
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

// Retrieve command line arguments
const args = process.argv.slice(2);

const filePath = args[0];
const date = args[2];

// Check if required arguments are provided
if (!filePath || !date) {
  console.error("Usage: node most_active_cookie.js <file_path> -d <date>");
  process.exit(1);
}

// Process the log file
processLogFile(filePath, date);
