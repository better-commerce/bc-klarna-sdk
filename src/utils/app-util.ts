
export const countDecimals = (value: number) => {
    if (Math.floor(value.valueOf()) === value.valueOf()) return 0; {
        return value.toString().split(".")[1].length || 0;
    }
};

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
}