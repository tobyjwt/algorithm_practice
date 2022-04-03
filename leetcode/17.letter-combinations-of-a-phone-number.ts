function letterCombinations(digits: string): string[] {
    const n = digits.length;
    if (!n) {
        return [];
    }
    const map: { [key: string]: string[] } = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    const result: string[] = [];

    DFS(digits, '');

    return result;

    function DFS (str: string, pre: string) {
        if (!str) {
            result.push(pre);
        }
        const idx = str[0];
        if (map[idx]) {
            for (let i = 0; i < map[idx].length; i++) {
                DFS(str.slice(1), pre + map[idx][i]);
            }
        }
    }
};