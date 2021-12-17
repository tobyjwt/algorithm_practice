function mergeSort(nums: number[]): number[] {


    sort(0, nums.length - 1);


    function merge(start: number, end: number, mid: number): void {
        const arr = new Array(end - start + 1);
        let p1 = start, p2 = mid + 1, p = 0;
        while(p1 <= mid && p2 <= end) {
            if (nums[p1] <= nums[p2]) {
                arr[p++] = nums[p1++];
            } else {
                arr[p++] = nums[p2++];
            }
        }
        while(p1 <= mid) {
            arr[p++] = nums[p1++];
        }
        while(p2 <= end) {
            arr[p++] = nums[p2++];
        }
        for (let i = start; i <= end; i++) {
            nums[i] = arr.shift();
        }
    }
    function sort(start: number, end: number): void {
        if (start < end) {
            const mid = ((end - start) >> 1) + start;
            sort(start, mid);
            sort(mid + 1, end);

            merge(start, end, mid);
        }
    }
    return nums;
}

console.log(mergeSort([1, 3, 4, 5, 2]));
console.log(mergeSort([9, 8, 7, 6, 5]));
console.log(mergeSort([1, 8, 7, 6, 1]));
console.log(mergeSort([1, 8, 11, 6, 5]));
console.log(mergeSort([2]));
console.log(mergeSort([]));