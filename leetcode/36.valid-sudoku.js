/**
 * 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

 数字 1-9 在每一行只能出现一次。
 数字 1-9 在每一列只能出现一次。
 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 数独部分空格内已填入了数字，空白格用 '.' 表示。

 注意：

 一个有效的数独（部分已被填充）不一定是可解的。
 只需要根据以上规则，验证已经填入的数字是否有效即可。

 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let col = [];
    let row = [];
    let block = [];
    let n = 9;
    for (let i = 0; i < n; i++) {
        col[i] = {};
        row[i] = {};
        block[i] = {};
    }
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            const cur = board[i][j];
            if (cur === '.') {
                continue;
            }
            if (row[i][cur]) {
                return false;
            }
            row[i][cur] = true;

            if (col[j][cur]) {
                return false;
            }
            col[j][cur] = true;

            const idx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (block[idx][cur]) {
                return false;
            }
            block[idx][cur] = true;
        }
    }
    return true;
};

let board1 =
    [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board1));
let board2 =
    [["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]];
console.log(isValidSudoku(board2));
