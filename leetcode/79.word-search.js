/**
 * 给定一个   m x n 二维字符网格   board 和一个字符串单词   word 。如果   word 存在于网格中，返回 true ；否则，返回 false 。

 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 宽度优先遍历，会超时
    // for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < board[0].length; j++) {
    //         const queue = [];
    //         queue.push({
    //             idx: 0,
    //             i,
    //             j,
    //             map: {}
    //         });
    //         while (queue.length) {
    //             // console.log(map);
    //             const item = queue.shift();
    //             const cur = board[item.i][item.j];
    //             const map = {...item.map};
    //             if (cur === word[item.idx]) {
    //                 map[`${item.i}-${item.j}`] = true;
    //                 if (item.idx === word.length - 1) {
    //                     return true;
    //                 } else {
    //                     if (board[item.i - 1] && board[item.i - 1][item.j] && !map[`${item.i - 1}-${item.j}`]) {
    //                         queue.push({
    //                             idx: item.idx + 1,
    //                             i: item.i - 1,
    //                             j: item.j,
    //                             map
    //                         })
    //                     }
    //                     if (board[item.i + 1] && board[item.i + 1][item.j] && !map[`${item.i + 1}-${item.j}`]) {
    //                         queue.push({
    //                             idx: item.idx + 1,
    //                             i: item.i + 1,
    //                             j: item.j,
    //                             map
    //                         })
    //                     }
    //                     if (board[item.i][item.j - 1] && !map[`${item.i}-${item.j - 1}`]) {
    //                         queue.push({
    //                             idx: item.idx + 1,
    //                             i: item.i,
    //                             j: item.j - 1,
    //                             map
    //                         })
    //                     }
    //                     if (board[item.i][item.j + 1] && !map[`${item.i}-${item.j + 1}`]) {
    //                         queue.push({
    //                             idx: item.idx + 1,
    //                             i: item.i,
    //                             j: item.j + 1,
    //                             map
    //                         })
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // return false;
    const n = board.length;
    const m = board[0].length;
    const used = new Array(n);
    for (let i = 0; i < n; i++) {
        used[i] = new Array(m);
    }
    const canGo = (row, col, idx) => {
        if (idx === word.length) {
            return true;
        }
        if (row >= n || row < 0 || col >= m || col < 0 ) { // 越界
            return false;
        }
        if (board[row][col] !== word[idx]) {
            return false;
        }
        if (used[row][col]) {
            return false;
        }
        used[row][col] = true;
        const restCanGo = canGo(row + 1, col, idx + 1) || canGo(row - 1, col, idx + 1) || canGo(row, col + 1, idx + 1) || canGo(row, col - 1, idx + 1);
        used[row][col] = false;
        return restCanGo;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (canGo(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE'));
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'));
console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], 'ABCESEEEFS'));
