/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// let twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length -1; i++) { // 暴力解法
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

let twoSum = function (nums, target) {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (temp[diff] !== undefined) {
            return [temp[diff], i];
        }
        temp[nums[i]] = i;
    }
};

let nums = [2, 7, 11, 15], target = 9;

console.log(twoSum(nums, target));
