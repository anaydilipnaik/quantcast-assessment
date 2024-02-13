import { processLogFile } from "./main.js";

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
