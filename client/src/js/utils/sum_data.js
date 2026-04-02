/**
 * Sum the total gross and total return for each unique combination of date and channel.
 * This function takes a string value, which may contain multiple amounts separated by commas,
 * and returns the sum of those amounts as a single number.
 * If the input is empty or not a valid number, it will return 0.
 */

const sum_amount = (value) => {
    if (!value) return 0; // Return 0 for empty or falsy values

    // Split the value by commas, trim whitespace, and convert to numbers
    const amounts = value.split(',').map(item => parseFloat(item.trim()));

    // Sum the total gross and total return amounts, handling NaN cases with || 0
    const total = amounts.reduce((acc, amount) => acc + (isNaN(amount) ? 0 : amount), 0);
    return total;
};

export { sum_amount };