/**
 * Aggregated data uility functions for processing and displaying aggregated transaction data.
 * This file contains functions to aggregate transaction data by date and channel,
 * and to display the aggregated results in an HTML table.
 */
import { sum_amount } from '../utils/sum_data.js';

const aggregatedData = (transactions) => {
    const aggregated = {};

    transactions.forEach(row => {
        // Skip empty rows or rows without date/channel
        if (!row.date || !row.channel) return;

        const key = `${row.date}-${row.channel}`;

        // If the key doesn't exist in the aggregated object, initialize it
        if (!aggregated[key]) {
            aggregated[key] = {
                date: row.date,
                channel: row.channel,
                totalGross: 0,
                totalReturn: 0
            };
        }

        // Add to the totals
        // Use parseFloat to convert string amounts to numbers typed float, and handle NaN cases with || 0,
        //  so the value will be 0 if the conversion fails
        aggregated[key].totalGross += sum_amount(row.gross_amount) || 0;
        aggregated[key].totalReturn += sum_amount(row.return_amount) || 0;
    });
    return Object.values(aggregated);
};

export { aggregatedData };