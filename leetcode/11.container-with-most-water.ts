// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

function maxArea(height: number[]): number {
    const n = height.length;
    if (n < 2) {
        return 0;
    }
    const leftQueue: number[] = [0];
    let max = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < leftQueue.length; j++) {
            max = Math.max(((i - leftQueue[j]) * Math.min(height[i], height[leftQueue[j]])), max);
        }
        if (height[i] > height[leftQueue[leftQueue.length - 1]]) {
        
            leftQueue.push(i);
        }
    }

    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([1,3,2,5,25,24,5])); // 24