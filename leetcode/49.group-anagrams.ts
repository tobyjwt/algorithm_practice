function groupAnagrams(strs: string[]): string[][] {
    const result: string[][] = [];
    for(let i = 0; i < strs.length; i++) {
        let flag = false;
        for(let j = 0; j < result.length; j++) {

            for (let k = 0; k < result[j].length; k++) {
                if (isSame(strs[i], result[j][k])) {
                    flag = true;
                    result[j].push(strs[i]);
                    break;
                }
            }
            if (flag) {
                break;
            }
        }
        if (!flag) {
            result.push([strs[i]]);
        }
    }

    return result;

    function isSame(str1: string, str2: string): boolean {
        const n1 = str1.length;
        const n2 = str2.length;
        if (n1 !== n2) {
            return false;
        }
        for (let i = 0; i < n1; i++) {
            const idx = str2.indexOf(str1[i]);
            if (idx < 0) {
                return false;
            }
            str2 = str2.slice(0, idx) + str2.slice(idx + 1);
        }
        return true;
    }
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["ddddddddddg","dgggggggggg"]));