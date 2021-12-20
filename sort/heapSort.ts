function heapSort(nums: number[]): number[] {

    nums.unshift(-1);
    const n = nums.length;
    buildHeap(n);
    for (let size = n; size > 1; size--) {
        [nums[1], nums[size - 1]] = [nums[size - 1], nums[1]];
        buildHeap(size - 1);
    }
    nums.shift();
    return nums;

    function buildHeap(heapSize: number) {
        for (let i = (n - 1) >> 1 ; i > 0; i--) {
            heapify(i, heapSize);
        }
    }

    function heapify(i: number, heapSize: number) {
        while(true) {
            let maxIndex = i;
            if (nums[i * 2] > nums[maxIndex] && i * 2 < heapSize) {
                maxIndex = i * 2;
            }
            if (nums[i * 2 + 1] > nums[maxIndex] && (i * 2 + 1) < heapSize) {
                maxIndex = i * 2 + 1;
            }
            if (i !== maxIndex) {
                [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
            } else {
                break;
            }
            i = maxIndex;
            if (i >= heapSize) {
                break;
            }
        }
    }
}

console.log(heapSort([1, 3, 4, 5, 2]));
console.log(heapSort([9, 8, 7, 6, 5]));
console.log(heapSort([1, 8, 7, 6, 1]));
console.log(heapSort([1, 8, 11, 6, 5]));
console.log(heapSort([2]));
console.log(heapSort([1, 1, 1, 8, 9]));