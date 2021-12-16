/**
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals.length) {
        return [newInterval];
    }
    if (newInterval[0] > intervals[intervals.length - 1][1]) {
        intervals.push(newInterval);
        return intervals;
    }
    let i = 0;
    let isInserted = false;
    while (i < intervals.length) {
        const temp = intervals[i];
        if (newInterval[1] < temp[0]) {
            intervals.splice(i, 0, newInterval);
            isInserted = true;
            break;
        } else if (newInterval[0] <= temp[1]) {
            newInterval = [Math.min(newInterval[0], temp[0]), Math.max(newInterval[1], temp[1])];
            intervals.splice(i, 1);
        } else {
            i++;
        }
    }
    if (!isInserted) {
        intervals.push(newInterval);
    }
    return intervals;
};

console.log(insert([[1,3],[6,9]], [2, 5])); // [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],  [4,8])); // [[1,2],[3,10],[12,16]]
console.log(insert([],  [4,8]));
console.log(insert([[1, 5]],  [2,3])); // [[1,5]]
