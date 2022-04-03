// 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。

// 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
// 返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。


function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const countMap = new Array(numCourses).fill(0);
    const map: { [key: number]: number[]} = {};
    for (let i = 0; i < prerequisites.length; i++) {
        const item = prerequisites[i];
        countMap[item[0]]++;
        if (map[item[1]]) {
            map[item[1]].push(item[0]);
        } else {
            map[item[1]] = [item[0]];
        }
    }

    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (countMap[i] === 0) {
            queue.push(i);
        }
    }
    const result: number[] = [];

    while(queue.length) {
        const item = queue.shift() as number;
        result.push(item);
        if (map[item]) {
            for (let i = 0; i < map[item].length; i++) {
                countMap[map[item][i]]--;
                if (countMap[map[item][i]] === 0) {
                    queue.push(map[item][i]);
                }
            }
        }
    }

    return countMap.some(item => item > 0) ? [] : result;
};

console.log(findOrder(2, [[1, 0]]));