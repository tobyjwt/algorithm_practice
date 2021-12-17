function hillSort(nums: number[]): number[] {
    let gap = nums.length;
    const n = nums.length;
    while(gap > 1) {
        gap = Math.floor(gap / 2);
        for (let start = 0; start < gap; start++) {
            for(let i = start + gap; i < n; i += gap) {
                const target = nums[i];
                if (target >= nums[i - gap]) {
                    continue;
                }
                for (let j = i - gap; j >= 0; j -= gap) {
                    nums[j + gap] = nums[j];
                    if (j === start || target >= nums[j - gap]) {
                        nums[j] = target;
                        break;
                    }
                }
            }
        }
    }
    return nums;
}

console.log(hillSort([1, 3, 4, 5, 2]));
console.log(hillSort([9, 8, 7, 6, 5]));
console.log(hillSort([1, 8, 7, 6, 1]));
console.log(hillSort([1, 8, 11, 6, 5]));
console.log(hillSort([2]));
console.log(hillSort([]));