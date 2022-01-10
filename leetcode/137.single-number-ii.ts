/**
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 */

function singleNumber(nums: number[]): number {
    const map: { [key: string]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (map[cur]) {
            if (map[cur] < 2) {
                map[cur] += 1;
            } else {
                delete map[cur];
            }
        } else {
            map[cur] = 1;
        }
    }
    return Number(Object.keys(map)[0]);
};

console.log(singleNumber([2,2,3,2])); // 3
console.log(singleNumber([0,1,0,1,0,1,99])); // 99