// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

function permute(nums: number[]): number[][] {
    const n = nums.length;
    const result: number[][] = [];
    DFS([], nums);
    return result;

    function DFS(cur: number[], lib: number[]) {
        if (cur.length === n) {
            result.push([...cur]);
        }
        const l = lib.length;
        for (let i = 0; i < l; i++) {
            cur.push(lib[i]);
            const temp = lib.splice(i, 1);
            DFS(cur, lib);
            cur.pop();
            lib.splice(i, 0, ...temp)
        }
    }
};

console.log(permute([1,2,3]));