/**
 * 给你两个有序整数数组  nums1 和 nums2，请你将 nums2 合并到  nums1  中，使 nums1 成为一个有序数组。

 初始化  nums1 和 nums2 的元素数量分别为  m 和 n 。你可以假设  nums1 的空间大小等于  m + n，这样它就有足够的空间保存来自 nums2 的元素。

 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    nums1.splice(m);
    while (i < m && j < n) {
        if (nums2[j] < nums1[i]) {
            nums1.splice(i, 0, nums2[j]);
            j++;
            m++;
        }
        i++;
    }
    if (j < n) {
        nums1.splice(i, nums1.length, ...nums2.slice(j));
    }
    return nums1;
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));
console.log(nums1);
