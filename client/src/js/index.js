/**
 * Entry point: fetch CSV, aggregate by date and channel, render table,
 * and export aggregated data as CSV.
 */
import { getData } from './service/queries/Get_data.js';
import { aggregatedData } from './transform/aggregated_data.js';
import { downloadCsvdata } from './transform/downloadCsv_data.js';

const displayData = (rows) => {
    const tableBody = document.querySelector('#daily-return-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    rows.forEach((row) => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td class="border border-gray-300 px-4 py-2">${row.date}</td>
            <td class="border border-gray-300 px-4 py-2">${row.channel}</td>
            <td class="border border-gray-300 px-4 py-2">${row.totalGross.toFixed(2)}</td>
            <td class="border border-gray-300 px-4 py-2">${row.totalReturn.toFixed(2)}</td>
		`;
        tableBody.appendChild(tableRow);
    });
};

const init = async () => {
    try {
        // fetch the CSV data from the specified URL
        const csvData = await getData('../public/data/transactions.csv');
        //parsing the CSV data
        const parsed = Papa.parse(csvData, { header: true });
        const aggregatedRows = aggregatedData(parsed.data);
        // Display the aggregated data in the HTML table
        displayData(aggregatedRows);
        // Set up the download button to trigger the CSV download
        const downloadButton = document.querySelector('#download-csv');
        if (downloadButton) {
            downloadButton.addEventListener('click', () => downloadCsvdata(aggregatedRows));
        }
    } catch (error) {
        console.error('Error in initialization:', error);
    }
};

init();
