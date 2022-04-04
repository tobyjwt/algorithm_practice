function removeDuplicates(nums: number[]): number {
    let idx = 0;
    while(true) {
        if (nums[idx] === undefined) {
            return nums.length;
        }
        if (nums[idx] === nums[idx - 1]) {
            nums.splice(idx, 1);
        } else {
            idx++;
        }
    }
};