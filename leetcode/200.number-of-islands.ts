// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

// 思路：深度优先遍历，每一块方格都有上下左右四个分叉，深度优先遍历这四个分叉，将已经遍历过的做好标记，记录初始执行DFS的次数即为岛屿数量

function numIslands(grid: string[][]): number {
    const height = grid.length;
    if (!height) {
        return 0;
    }
    const width = grid[0].length;
    if (!width) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === '1') {
                result++;
                DFS(i, j);
            }
        }
    }
    return result;


    function DFS(r: number, c: number) {
        if (!isInArea(r, c)) {
            return;
        }
        if (grid[r][c] !== '1') {
            return;
        }
        grid[r][c] = '2';
        DFS(r - 1, c);
        DFS(r, c - 1);
        DFS(r + 1, c);
        DFS(r, c + 1);
    }

    function isInArea(r: number, c: number): boolean {
        return r >= 0 && c >= 0 && r < height && c < width;
    }
};