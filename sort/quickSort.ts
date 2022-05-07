function quicklySort(nums: number[]): number[] {

    // return sort(nums);
    //
    // function sort(arr: number[]): number[] {
    //     const n = arr.length;
    //     if (n <= 1) {
    //         return arr;
    //     }
    //     const left = [];
    //     const right = [];
    //     const mid = arr[0];
    //     for (let i = 1; i <= n - 1; i++) {
    //         if (arr[i] < mid) {
    //             left.push(arr[i]);
    //         } else {
    //             right.push(arr[i]);
    //         }
    //     }
    //     return [...sort(left), mid, ...sort(right)];
    // }
    sort(0, nums.length - 1);
    return nums;

    function sort(left: number, right: number) {
        if(right <= left) {
            return;
        }
        let p = left;
        const flag = nums[right];
        for (let i = left ; i < right; i++) {
            if (nums[i] < flag) {
                [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }
        [nums[p], nums[right]] = [nums[right], nums[p]];
        const mid = Math.trunc((left + right) / 2);
        sort(left, p - 1);
        sort(p + 1, right);
    }
}

console.log(quicklySort([9, 8, 7, 6, 5]));
console.log(quicklySort([1, 8, 7, 6, 1]));
console.log(quicklySort([1, 8, 11, 6, 5]));
console.log(quicklySort([2]));
console.log(quicklySort([]));
