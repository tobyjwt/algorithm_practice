function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const countMap = new Array(numCourses).fill(0); // 入度
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
    let count = 0;
    while(queue.length) {
        const idx: number = queue.shift() as number;
        count++;
        const item = map[idx];
        if (item) {
            for (let i = 0; i < item.length; i++) {
                countMap[item[i]] = countMap[item[i]] - 1;
                if (countMap[item[i]] === 0) {
                    queue.push(item[i]);
                }
            }
        }
    }

    return !countMap.some(item => item > 0); // 判断countMap都为0或者count === numCourses都可以
    // return count === numCourses;
};

console.log(canFinish(2, [[1, 0]]));