/**
 * 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const m = board.length;
    if (m <= 1) {
        return;
    }
    const n = board[0].length;
    if (n <= 1) {
        return;
    }
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            board[i][0] = '-';
        }
        if (board[i][n - 1] === 'O') {
            board[i][n - 1] = '-';
        }
    }
    for (let i = 1; i < n - 1; i++) {
        if (board[0][i] === 'O') {
            board[0][i] = '-';
        }
        if (board[m - 1][i] === 'O') {
            board[m - 1][i] = '-';
        }
    }

    const set = new Set();

    for (let i = 0; i < m; i++) {
        goPath(i, 0);
        goPath(i, n - 1);
    }
    for (let i = 1; i < n - 1; i++) {
        goPath(0, i);
        goPath(m - 1, i);
    }
    
    function goPath(i: number, j: number) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return;
        }
        if(board[i][j] === 'X' || set.has(`${i}-${j}`)) {
            return;
        }
        board[i][j] = '-';
        set.add(`${i}-${j}`);
        goPath(i - 1, j);
        goPath(i + 1, j);
        goPath(i, j - 1);
        goPath(i, j + 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === '-') {
                board[i][j] = 'O';
            }
        }
    }
};

const board1 = [["X","X","X","X"],["X","O","O","X"],["X","O","X","O"],["X","O","O","O"]];
solve(board1);
console.log(board1); // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
const board2 = [["X"]];
solve(board2);
console.log(board2); // [["X"]]