/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {


    function div(dividend, divisor, n) {
        let isNeg = false;

        if (dividend * divisor < 0) {
            isNeg = true;
        }
        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);
        if (divisor === 1) {
            return isNeg ? - dividend : dividend;
        }
        if (dividend < divisor) {
            return 0;
        }
        if (n === undefined) {
            n = 32;
        }
        while(Math.pow(2, n) * divisor > dividend) {
            n--;
        }
        let result = Math.pow(2, n) + div(dividend - Math.pow(2, n) * divisor, divisor, n)
        return isNeg ? -result : result;
    }

    const result = div(dividend, divisor);
    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1;
    }
    return result;
};
