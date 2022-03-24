// 给你一个大小为 m x n 的二进制矩阵 grid 。

// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 岛屿的面积是岛上值为 1 的单元格的数目。

// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

// 和200， 463， 685为系列问题，dp思路参考200

function maxAreaOfIsland(grid: number[][]): number {
    const height = grid.length;
    if (!height) {
        return 0;
    }
    const width = grid[0].length;
    if (!width) {
        return 0;
    }

    let max = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, DFS(i, j));
            }
        }
    }
    return max;

    function DFS(r: number, c: number): number {
        if (!isInArea(r, c)) {
            return 0;
        }
        if (grid[r][c] !== 1) {
            return 0;
        }
        grid[r][c] = 2;
        return 1 + DFS(r, c - 1) + DFS(r, c + 1) + DFS(r - 1, c) + DFS(r + 1, c);
    }

    function isInArea(r: number, c: number): boolean{
        return r >= 0 && c >= 0 && r < height && c < width;
    }
};