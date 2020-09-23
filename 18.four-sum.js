/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var threeSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    for(let i = 0; i < nums.length - 2; i++) {
        // if (nums[i] > target) {
        //     break;
        // }
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            console.log(sum);
            if (sum === target) {
                if (left !== right - 1) {
                    if (nums[left] === nums[left + 1]) {
                        left++;
                        continue;
                    }
                    if (nums[right] === nums[right -1]) {
                        right--;
                        continue;
                    }
                }
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            }
        }
    }
    return result;
};
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 3; i++) {
        // if (nums[i] > target) {
        //     break;
        // }
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        const tempResult = threeSum(nums.slice(i + 1, nums.length + 1), target - nums[i]);
        if (tempResult.length) {
            tempResult.forEach(item => {
                result.push([nums[i], ...item]);
            });
        }
    }
    return result;
};

// console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11))
console.log(threeSum([1,-2,-4,-3,3,3,5], -6))

