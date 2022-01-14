function findPeakElement(nums: number[]): number {
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    return findPeak(1, nums.length - 2) as number - 1;
    
    function findPeak(left: number, right: number): number | null {
        if (left > right) {
            return null;
        }
        const mid = (left + right) >> 1;
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        }
        const leftResult = findPeak(left, mid - 1);
        if (leftResult !== null) {
            return leftResult;
        }
        return findPeak(mid + 1, right);
    }
};

console.log(findPeakElement([1,2,3,1])); // 2
console.log(findPeakElement([1,2,1,3,5,6,4])); // 1 || 5