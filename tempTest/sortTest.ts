function insertSort1(nums: number[]) {
    const n = nums.length;
    for(let i = 1; i < n; i++) {
        const target = nums[i];
        if (target >= nums[i - 1]) {
            continue;
        }
        for (let j = i - 1; j >= 0; j--) {
            nums[j + 1] = nums[j];
            if (j === 0 || target >= nums[j - 1]) {
                nums[j] = target;
                break;
            }
        }
    }
    return nums;
}

function hillSort1(nums: number[]) {
    let gap = nums.length;
    const n = gap;
    while(gap > 1) {
        gap = Math.floor(gap / 2);
        for(let start = 0; start < gap; start++) {
            for (let i = start + gap; i < n; i += gap) {
                const target = nums[i];
                if (target >= nums[i - gap]) {
                    continue;
                }
                for (let j = i - gap; j >= start; j -= gap) {
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

function mergeSort1(nums: number[]) {


    function merge(start: number, end: number, mid: number) {
        let p1 = start, p2 = mid + 1, p = 0;
        const arr = new Array(end - start + 1);
        while(p1 <= mid && p2 <= end) {
            if (nums[p1] < nums[p2]) {
                arr[p++] = nums[p1++];
            } else if (nums[p1] > nums[p2]) {
                arr[p++] = nums[p2++];
            } else {
                arr[p++] = nums[p1++];
                arr[p++] = nums[p2++];
            }
        }
        while(p1 <= mid) {
            arr[p++] = nums[p1++];
        }
        while(p2 <= end) {
            arr[p++] = nums[p2++];
        }
        for (let i = 0; i < arr.length; i++) {
            nums[start + i] = arr[i];
        }
    }

    function sort(start: number, end: number) {
        if (start >= end) {
            return;
        }
        const mid = start + ((end - start) >> 1);
        sort(start, mid);
        sort(mid + 1, end);
        
        merge(start, end, mid);
    }

    sort(0, nums.length - 1);
    return nums;
}

function quickSort1(nums: number[]): number[] {
    const n = nums.length;
    if (n <= 1) {
        return nums;
    }
    const left: number[] = [];
    const right: number[] = [];
    const mid = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] < mid) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return [...quickSort1(left), mid, ...quickSort1(right)];
}

function heapSort1(nums: number[]): number[] {
    nums.unshift(-1);
    const n = nums.length;
    buildHeap(n);
    for (let size = n; size > 1; size--) {
        [nums[1], nums[size - 1]] = [nums[size - 1], nums[1]];
        buildHeap(size - 1);
    }
    return nums;
    

    function buildHeap(heapSize: number) {
        for (let i = (n) >> 1; i > 0; i--) {
            heapify(i, heapSize);
        }
    }


    function heapify(i: number, heapSize: number) {
        let maxIndex = i;
        while(true) {
            maxIndex = i
            if (nums[i * 2] > nums[maxIndex] && i * 2 < heapSize) {
                maxIndex = i * 2;
            }
            if (nums[i * 2 + 1] > nums[maxIndex] && i * 2 + 1 < heapSize) {
                maxIndex = i * 2 + 1;
            }
            if (i === maxIndex) {
                break;
            }
            [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
            i = maxIndex;
        }
    }
    return nums;
}

const sourceData: number[][] = [
    [1, 3, 5, 2, 4, 6, 10],
    [9,5,3,8,1,22,91,-3,0],
    [1,23,346346,43,223,7,],
    [9,5,3,5,7,9,1],
    [1,1,1,3,1,1,1],
    [1,3,2,6,7,5,4,9,8,0],
    []
];

sourceData.forEach(item => {
    // console.log(insertSort1(item));
    // console.log(hillSort1(item));
    // console.log(mergeSort1(item));
    // console.log(quickSort1(item));
    console.log(heapSort1(item));
});