function quicklySort(nums: number[]): number[] {
    
    return sort(nums);

    function sort(arr: number[]): number[] {
        const n = arr.length;
        if (n <= 1) {
            return arr;
        }
        const left = [];
        const right = [];
        const mid = arr[0];
        for (let i = 1; i <= n - 1; i++) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...sort(left), mid, ...sort(right)];
    }
}

console.log(quicklySort([9, 8, 7, 6, 5]));
console.log(quicklySort([1, 8, 7, 6, 1]));
console.log(quicklySort([1, 8, 11, 6, 5]));
console.log(quicklySort([2]));
console.log(quicklySort([]));