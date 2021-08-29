/**
 * 给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。



 例如，

 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28
 ...
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let n = columnTitle.length;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return getIdx(columnTitle);
    }
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += getIdx(columnTitle[i]) * Math.pow(26, n - i - 1);
    }
    return result;


    function getIdx(word) {
        switch (word) {
            case 'A': return 1;
            case 'B': return 2;
            case 'C': return 3;
            case 'D': return 4;
            case 'E': return 5;
            case 'F': return 6;
            case 'G': return 7;
            case 'H': return 8;
            case 'I': return 9;
            case 'J': return 10;
            case 'K': return 11;
            case 'L': return 12;
            case 'M': return 13;
            case 'N': return 14;
            case 'O': return 15;
            case 'P': return 16;
            case 'Q': return 17;
            case 'R': return 18;
            case 'S': return 19;
            case 'T': return 20;
            case 'U': return 21;
            case 'V': return 22;
            case 'W': return 23;
            case 'X': return 24;
            case 'Y': return 25;
            case 'Z': return 26;
        }
    }
};

console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));
console.log(titleToNumber('FXSHRXW'));
