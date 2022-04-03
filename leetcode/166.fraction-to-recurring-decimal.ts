function fractionToDecimal(numerator: number, denominator: number): string {
    let isNeg = false;
    if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)) {
        isNeg = true;
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    let result = '';
    result += Math.floor(numerator / denominator);
    let ret = numerator % denominator;
    if (ret !== 0) {
        result += '.';
        let map: { [key: string]: number } = {};
        let idx = 0;
        let decimal = '';
        map[ret] = idx;
        while(true) {
            ret *= 10;
            while(ret < denominator) {
                idx++;
                decimal += '0';
                ret *= 10;
            }
            decimal += Math.floor(ret / denominator);
            idx++;
            ret = ret % denominator;
            if (ret === 0) {
                result = result + decimal;
                break;
            } else if (map[ret] !== undefined) {
                decimal = decimal.slice(0, map[ret]) + '(' + decimal.slice(map[ret]) + ')';
                result = result + decimal;
                break;
            } else {
                map[ret] = idx;
            }
        }
    }
    if (isNeg) {
        result = '-' + result;
    }
    return result;
};