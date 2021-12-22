function bubbleSort(nums: number[]): number[] {
    const n = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]; 
            }
        }
    }
    return nums;
}

console.log(bubbleSort([1, 3, 4, 5, 2]));
console.log(bubbleSort([9, 8, 7, 6, 5]));
console.log(bubbleSort([1, 8, 7, 6, 1]));
console.log(bubbleSort([1, 8, 11, 6, 5]));
console.log(bubbleSort([2]));
console.log(bubbleSort([]));