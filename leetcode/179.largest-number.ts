/**
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

    注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 */

function largestNumber(nums: number[]): string {
    nums.sort((a, b) => {
        if (a === b) {
            return 0;
        }
        const aS = String(a);
        const bS = String(b);
        return compare(aS, bS);
    });
    let result = nums.join('');
    while (result[0] === '0') {
        result = result.slice(1, result.length);
    }
    return result || '0';

    function compare(a: string, b: string): number {
        if (a + b > b + a) {
            return - 1;
        }
        return 1;
    }
};

console.log(largestNumber([10,2])); // 210
console.log(largestNumber([3,30,34,5,9])); // 9534330
console.log(largestNumber([1])); // 1
console.log(largestNumber([10])); // 10
console.log(largestNumber([34323,3432])); // "343234323"