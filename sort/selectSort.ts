function selectSort(nums: number[]): number[] {
    const n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        let maxIndex = 0;
        for (let j = 1; j <= i; j++) {
            if (nums[j] > nums[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
        }
    }
    return nums;
}

console.log(selectSort([1, 3, 4, 5, 2]));
console.log(selectSort([9, 8, 7, 6, 5]));
console.log(selectSort([1, 8, 7, 6, 1]));
console.log(selectSort([1, 8, 11, 6, 5]));
console.log(selectSort([2]));
console.log(selectSort([]));