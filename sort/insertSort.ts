function insertSort(nums: number[]): number[] {
    const n = nums.length;
    for (let i = 1; i < n; i ++) {
        const target = nums[i];
        if (target >= nums[i - 1]) {
            continue;
        }
        for (let j = i - 1; j >= 0; j--) {
            nums[j + 1] = nums[j];
            if (j === 0 || target >= nums[j - 1]) {
                nums[j] = target;
                break;
            }
        } 
    }
    return nums;
}

console.log(insertSort([9, 8, 7, 6, 5]));
console.log(insertSort([1, 8, 7, 6, 1]));
console.log(insertSort([1, 8, 11, 6, 5]));
console.log(insertSort([2]));
console.log(insertSort([]));