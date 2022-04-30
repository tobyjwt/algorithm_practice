function majorityElement(nums: number[]): number {
    // O(n)复杂度
    const map = new Map();
    const n =nums.length;
    for (let i = 0 ; i < n; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let maxNum;
    let max;
    map.forEach((value, key) => {
        if (max === undefined) {
            max = value;
            maxNum = key;
        } else {
            if (value > max) {
                max = value;
                maxNum = key;
            }
        }
    });
    return maxNum;
};
