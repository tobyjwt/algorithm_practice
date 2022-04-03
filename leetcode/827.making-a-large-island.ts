// 给你一个大小为 n x n 二进制矩阵 grid 。最多 只能将一格 0 变成 1 。

// 返回执行此操作后，grid 中最大的岛屿面积是多少？

// 岛屿 由一组上、下、左、右四个方向相连的 1 形成。

// 和200， 463， 685为系列问题，dp思路参考200

function largestIsland(grid: (number | string)[][]): number {
    const height = grid.length;
    if (!height) {
        return 0;
    }
    const width = grid[0].length;
    if (!width) {
        return 0;
    }
    let map: { [key: string]: number } = {}; // 每一个岛屿为一个key，value为岛屿面积
    let index = 1;

    let isFull = true; // 全为1的情况，max就是总面积
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 1) {
                map[index] = DFSLand(i, j, index.toString());
                index++;
            } 
            // gird[i][j] 值可能改写为map的key了
            if (grid[i][j] === 0) {
                isFull = false;
            }
        }
    }
    if (isFull) {
        return width * height;
    }

    let max = 0;
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 0) {
                const list: string[] = [];
                fill(i - 1, j, list);
                fill(i, j - 1, list);
                fill(i + 1, j, list);
                fill(i, j + 1, list);
                max = Math.max(max, list.map(key => map[key]).reduce((pre, cur) => pre + cur, 0) + 1);
            }
        }
    }
    return max;

    function fill(r: number, c: number, list: string[]) {
        if (isInArea(r, c) && grid[r][c] && !list.includes(grid[r][c] as string)) {
            list.push(grid[r][c] as string);
        }
    }

    function DFSLand(r: number, c: number, key: string): number {
        if (!isInArea(r, c)) {
            return 0;
        }
        if (grid[r][c] !== 1) {
            return 0;
        }
        grid[r][c] = key;
        return 1 + DFSLand(r, c - 1, key) + DFSLand(r, c + 1, key) + DFSLand(r - 1, c, key) + DFSLand(r + 1, c, key);
    }

    function isInArea(r: number, c: number): boolean {
        return r >= 0 && c >= 0 && r < height && c < width;
    }
};