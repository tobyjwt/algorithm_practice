/**
 * 给定一个已按照 非递减顺序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。

你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 */

function twoSum(numbers: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const expect = target - numbers[i];
        if (map.has(expect)) {
            return [map.get(expect) + 1, i + 1];
        }
        map.set(numbers[i], i);
    }
    return [-1, -1];
};

console.log(twoSum([2,7,11,15], 9)); // [1, 2]
console.log(twoSum([2,3,4], 6)); // [1, 3]