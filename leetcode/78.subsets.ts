function subsets(nums: number[]): number[][] {

    return [[], ...getSub(nums)];
    function getSub(nums: number[]): number[][] {
        let result = [];
        result .push([nums[0]]);
        if (nums.length > 1) {
            const res = getSub(nums.slice(1));
            result = result.concat(res, res.map(item => [nums[0]].concat(item)));
        }
        return result;
    }
}

console.log(subsets([1,2,3]));
