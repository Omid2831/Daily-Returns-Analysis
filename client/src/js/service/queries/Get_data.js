/**
 * Fetch raw CSV text from a URL.
 */
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.7.9/+esm';

const getData = async (dataUrl) => {
    try {
        const response = await axios.get(dataUrl, { responseType: 'text' });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export { getData };