function combinationSum(candidates: number[], target: number): number[][] {

    const n = candidates.length;
    const result = [];
    getTarget([], target, 0);
    return result;
    function getTarget(cur: number[], target: number, idx: number) {
        if (target < 0) {
            return;
        }
        if (target === 0) {
            result.push([...cur]);
            return;
        }
        for (let i = idx; i < n; i++) {
            cur.push(candidates[i]);
            getTarget(cur, target - candidates[i], i);
            cur.pop();
        }
    }
};
