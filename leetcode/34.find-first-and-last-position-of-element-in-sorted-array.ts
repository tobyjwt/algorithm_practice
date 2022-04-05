function searchRange(nums: number[], target: number): number[] {
    // O(n)
    // const n = nums.length;
    // const result: number[] = [];
    // for (let i = 0; i < n; i++) {
    //     const cur = nums[i];
    //     if (cur === target) {
    //         if(result.length === 0) {
    //             result[0] = i;
    //             result[1] = i;
    //         } else {
    //             result[1] = i;
    //         }
    //     }
    // }
    // if(result.length) {
    //     return result;
    // }
    // return [-1, -1];
    const n = nums.length;
    const idx = findIdx(0, n - 1);

    if (idx === -1) {
        return [-1, -1];
    }

    const result = [idx, idx];
    let left = idx - 1;
    while(left >= 0 && nums[left] === target) {
        result[0] = left--;
    }
    let right = idx + 1;
    while(right < n && nums[right] === target) {
        result[1] = right++;
    }
    return result;

    function findIdx(left: number, right: number): number {
        if (left > right) {
            return -1;
        }
        const mid = Math.trunc((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        const leftIdx = findIdx(left, mid - 1);
        const rightIdx = findIdx(mid + 1, right);
        if (leftIdx > -1) {
            return leftIdx;
        }
        if (rightIdx > -1) {
            return rightIdx;
        }
        return -1;
    }
};

console.log(searchRange([5,7,7,8,8,10], 8));