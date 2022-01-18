/**
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
 * A -> 1, B -> 2, .... AA -> 27
 */

function convertToTitle(columnNumber: number): string {
    let str = '';
    while(columnNumber >= 1) {
            let cur = columnNumber % 26;
            if (cur === 0) {
                cur = 26;
            }
            str = getWord(cur) + str;
            columnNumber = (columnNumber - cur) / 26;
    
    }
    return str;

    function getWord(num: number): string {
        switch(num) {
            case 1: return 'A';
            case 2: return 'B';
            case 3: return 'C';
            case 4: return 'D';
            case 5: return 'E';
            case 6: return 'F';
            case 7: return 'G';
            case 8: return 'H';
            case 9: return 'I';
            case 10: return 'J';
            case 11: return 'K';
            case 12: return 'L';
            case 13: return 'M';
            case 14: return 'N';
            case 15: return 'O';
            case 16: return 'P';
            case 17: return 'Q';
            case 18: return 'R';
            case 19: return 'S';
            case 20: return 'T';
            case 21: return 'U';
            case 22: return 'V';
            case 23: return 'W';
            case 24: return 'X';
            case 25: return 'Y';
            case 26: return 'Z';
        }

        return '';
    }
};

console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(2147483647)); // FXSHRXW