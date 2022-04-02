function longestCommonPrefix(strs: string[]): string {
    let result = '';
    let idx = 0;
    while(true) {
        let tag = strs[0][idx];
        if (!tag) {
            return result;
        }
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][idx] !== tag) {
                return result;
            }
        }
        result += tag;
        idx++;
    }
    return result;
};

console.log(longestCommonPrefix(['abc', 'abc']));
console.log(longestCommonPrefix(["flower","flow","flight"]));