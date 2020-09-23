function getMax(nums) {
    let max = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        if (sum < 0) {
            sum = 0;
            if (nums[i] > max) {
                max = nums[i];
            }
        } else if (sum >= max) {
            max = sum;
        }
    }
    return max;
}
console.log(getMax([-2, 2, -3, 4, -1, 2, 5]))
