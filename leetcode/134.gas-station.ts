/**
 * 在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
   你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
    如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
    const gap: number[] = [];
    const n = gas.length;
    for (let i = 0; i < n; i++) {
        gap.push(gas[i] - cost[i]);
    }
    let start = 0;
    let maxStart = 0;
    let count = 1;
    let sum = gap[0];
    let max = gap[0];
    for (let i = 1; i < 2 * n - 1; i++) {
        if (sum < 0) {
            sum = gap[i];
            start = i;
            count = 1;
        } else {
            count++;
            sum += gap[i];
        }
        if (sum > max) {
            max = sum;
            maxStart = start;
        }
        if (count === n) {
            break;
        }
    }

    let gapSum = 0;
    for (let i = 0; i < n; i++) {
        gapSum += gap[(i + start) % n];
        if (gapSum < 0) {
            return -1;
        }
    }
    console.log(gap, maxStart);
    return start;
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // -1
console.log(canCompleteCircuit([1], [2])); // -1