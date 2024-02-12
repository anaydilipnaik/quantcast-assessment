# Most Active Cookie Program

This program processes a cookie log file and finds the most active cookies for a specified date.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project folder:

   ```bash
   cd your-repository
   ```

3. Install dependencies (if any):

   ```bash
   npm install
   ```

## Running the Program

To find the most active cookies, follow these steps:

1. Open a terminal and navigate to the project folder.

2. Run the following command:

   ```bash
   node most_active_cookie.js <file_path> -d <date>
   ```

   Replace `<file_path>` with the path to your cookie log file, and `<date>` with the date for which you want to find the most active cookies.

   Example:

   ```bash
   node most_active_cookie.js cookie_log.csv -d 2018-12-09
   ```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```
