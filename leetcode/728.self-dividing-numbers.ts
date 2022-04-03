function selfDividingNumbers(left: number, right: number): number[] {
    const result = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            result.push(i);
        }
    }
    return result;

    function isSelfDividingNumber(number: number): boolean {
        const str = number.toString();
        for (let i = 0; i < str.length; i++) {
            if (number % Number(str[i]) !== 0) {
                return false;
            }
        }
        return true;
    }
};

console.log(selfDividingNumbers(1, 22));