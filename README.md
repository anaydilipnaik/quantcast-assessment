# Most Active Cookie Program

This program processes a cookie log file and finds the most active cookies for a specified date.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/anaydilipnaik/quantcast-assessment.git
   ```

2. Navigate to the project folder:

   ```bash
   cd quantcast-assessment
   ```

3. Install dependencies (if any):

   ```bash
   npm install
   ```

## Running the Program

TLDR: The starting point of the application is cli.js, where command line arguments are passed and the appropriate method from main.js is invoked by passing the filePath and date parameters

To find the most active cookies, follow these steps:

1. Open a terminal and navigate to the project folder.

2. Run the following command:

   ```bash
   node cli.js <file_path> -d <date>
   ```

   Replace `<file_path>` with the path to your cookie log file (cookie_log.csv), and `<date>` with the date for which you want to find the most active cookies.

   Example:

   ```bash
   node cli.js cookie_log.csv -d 2018-12-09
   ```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```
