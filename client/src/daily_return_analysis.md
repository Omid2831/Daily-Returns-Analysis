# Overview Of Daily Return Analysis

This document outlines the process and results of analyzing daily returns based on sales transactions. The analysis focuses on understanding the gross revenue returned per day and how it differs between online and offline sales channels.

> [!NOTE]
> Before running the assignment code, ensure that you have installed the necessary dependencies by running `npm install` in the project directory.

## How To Run

1. download the live server extension in VS Code
2. open the `daily_return_analysis.html` file in VS Code
3. right click on the `daily_return_analysis.html` file and select "Open with Live Server"
4. The page will open in your default web browser, displaying the daily return analysis table and a button to download the aggregated data as a CSV file.

## Approach

1. Read transaction data from `client/public/data/transactions.csv`.
2. Parse the CSV in JavaScript using Papa Parse with headers enabled.
3. Group transaction rows by `date` and `channel`.
4. Use the `sum_amount` helper to convert each amount value into a numeric value.
5. Accumulate `gross_amount` and `return_amount` into the matching date/channel group.
6. Render the aggregated rows in `daily_return_analysis.html` as a table.
7. Provide CSV export of the same aggregated rows using the Download CSV button.

### Assumptions

1. Aggregation level is `date + channel`.
2. Rows with missing `date` or `channel` are skipped.
3. Non-numeric amount values are treated as `0` during summation.
4. Duplicate rows in source data are included as provided.
5. Output values are displayed/exported with 2 decimal places.