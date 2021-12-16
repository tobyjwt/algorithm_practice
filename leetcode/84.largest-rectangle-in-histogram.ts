function largestRectangleArea(heights: number[]): number {
    // 超时
    // const n = heights.length;
    // let max = heights[0];
    // for (let i = 1; i < n; i++) {
    //     for (let len = i + 1; len > 0; len--) {
    //         let height = Math.min(...heights.slice(i - len + 1, i + 1));
    //         let result = len * height;
    //         if (result > max) {
    //             max = result;
    //         }
    //     }
    // }
    // return max;

    const stack: number[] = [];
    const left: number[] = [0];
    const right: number[] = [];
    const n = heights.length;
    if (n <= 2) {
        return Math.min(...heights) * n;
    }
    stack.push(0);
    for (let i = 1; i < n; i++) {
        while(stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop() as number;
        }
        if (stack.length) {
            left.push((i - stack[stack.length - 1] -1) * heights[i]);
        } else {
            left.push(i * heights[i]);
        }
        stack.push(i);
    }
    stack.splice(0, stack.length, n - 1);
    right[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        while(stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            right[i] = ((stack[stack.length - 1] - i -1) * heights[i]);
        } else {
            right[i] = ((n - i - 1) * heights[i]);
        }
        stack.push(i);
    }
    let max = 0;
    for (let i = 0; i < n; i++) {
        max = Math.max(max, heights[i] + left[i] + right[i]);
    }

    return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3])); // 10
console.log(largestRectangleArea([2, 4])); // 4
console.log(largestRectangleArea([1, 1])); // 2
console.log(largestRectangleArea([1, 2, 2])); // 4
