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
            /*
                 这里找到的middle为 start 和 end 的 "中位数"
                     即 start = 5; end = 10; 则 middle = 7;
                 需注意的是 这里采取的是向下舍入即:
                     5，6，7，8，9，10 共 六个元素，则 middle=7; 5，6，7为一组；8，9，10为一组
                     6，7，8，9，10 共五个元素，则 middle=8; 6，7，8为一组；9，10为一组


                 公式为: Math.floor((end-start)/2) + start

                 转换位运算符公式为：Math.floor(A / Math.pow(2, B)) => Math.floor(A / (2 ** B)) => (A >> B)


                 所以:Math.floor((end-start)/2) + start === ((end - start)>>1) + start
             */
            // 折半分为两个小数组 并递归
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
