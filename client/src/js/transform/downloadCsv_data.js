/**
 * This function will be responsible for the downloading of the aggregated data as a CSV file.
 * It will take the aggregated data as input, convert it to CSV format, and trigger a download in the browser.
 * The CSV file will contain the date, channel, total gross amount, and total return amount for each aggregated entry.
 */
const downloadCsvdata = (aggregatedData) => {
    // Create Csv header
    const headers = ['Date', 'Channel', 'Total Gross Amount', 'Total Return Amount'];

    // Create Csv rows from the aggregated data object
    const rows = Object.values(aggregatedData).map(row => [
        row.date,
        row.channel,
        row.totalGross.toFixed(2),
        row.totalReturn.toFixed(2)
    ]);

    // Combine the header and the rows into a single CSV string
    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.join(','))
    ].join('\n');

    // Create a blob from the CSV content and trigger a download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    // Create a temporary link to trigger the download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    // SET THE HREF AND DOWNLOAD ATTRIBUTES FOR THE LINK
    a.href = url;
    // Set the download attribute with a default filename of 'daily_returns_aggregated.csv'
    a.download = 'daily_returns_aggregated.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    console.log('CSV file downloaded successfully');
};

export { downloadCsvdata };
