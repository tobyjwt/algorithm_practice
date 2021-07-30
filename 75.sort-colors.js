/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        console.log(i, n, nums);
        if (nums[i] === 0) {
            const temp = nums.splice(i, 1)[0];
            nums.unshift(temp);
            i++;
        } else if (nums[i] === 2) {
            const temp = nums.splice(i, 1)[0];
            nums.push(temp);
            n--;
        } else {
            i++;
        }
    }
    return nums;
};

console.log(sortColors([2,1,2,0,1,1,0,2,1,2]));
