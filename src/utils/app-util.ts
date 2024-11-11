
/**
 * Counts the number of decimal places of a given number.
 * @param {number} value
 * @returns {number} The number of decimal places.
 */

export const countDecimals = (value: number) => {
    if (Math.floor(value.valueOf()) === value.valueOf()) return 0; {
        return value.toString().split(".")[1].length || 0;
    }
};

/**
 * Sanitizes a given amount by multiplying it by 100 and rounding it to 2 decimal places.
 * @param {number} value The amount to sanitize.
 * @returns {number} The sanitized amount.
 */
export const sanitizeAmount = (value: number) => {
    let amount = 0;
    if (value) {
        const decimals = countDecimals(value);
        if (decimals > 2) {
            amount = Number.parseFloat(value.toFixed(2)) * 100;
        } else {
            if (decimals == 0) {
                amount = value * 100;
            } else {
                amount = parseInt((value * 100).toFixed(0));
            }
        }
    }
    return amount;
};