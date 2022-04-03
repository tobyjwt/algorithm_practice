// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

function permuteUnique(nums: number[]): number[][] {
    const n = nums.length;
    const result: number[][] = [];
    const existMap = new Map<string, boolean>();

    DFS([], nums);
    return result;

    function DFS(pre: number[], lib: number[]) {
        if (pre.length === n) {
            const mapKey: string = pre.join(',');
            if (!existMap.has(mapKey)) {
                result.push([...pre]);
                existMap.set(mapKey, true);
            }
        }
        for (let i = 0; i < lib.length; i++) {
            pre.push(lib[i]);
            const temp = lib.splice(i, 1);
            DFS(pre, lib);
            pre.pop();
            lib.splice(i, 0, ...temp);
        }
    }
};

console.log(permuteUnique([1,1,2]));