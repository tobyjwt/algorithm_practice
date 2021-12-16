/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

 你可以假设 nums1 和 nums2 不会同时为空。

 示例 1:

 nums1 = [1, 3]
 nums2 = [2]

 则中位数是 2.0
 示例 2:

 nums1 = [1, 2]
 nums2 = [3, 4]

 则中位数是 (2 + 3)/2 = 2.5
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// O((m + n)log(m + n))
var findMedianSortedArrays1 = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    const { length } = arr;
    return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
};

// O(m + n);
var findMedianSortedArrays2 = function (nums1, nums2) {
    let reIndex = nums2.length - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        while (nums1[i] <= nums2[reIndex] && reIndex > -1) {
            nums1.splice(i + 1, 0, ...(nums2.splice(reIndex, 1)));
            reIndex--;
        }
    }
    const arr = nums2.concat(nums1);
    const { length } = arr;
    return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
};

// O(log(min(m, n)));
var findMedianSortedArrays3 = function (nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    const length1 = nums1.length;
    const length2 = nums2.length;
    let min = 0;
    let max = length1;
    let half = Math.floor((length1 + length2 + 1) / 2);
    while (max >= min) {
        const i = Math.floor((max + min) / 2);
        const j = half - i;
        if (i > min && nums1[i - 1] > nums2[j]) {
            max = i - 1;
        } else if (i < max && nums1[i] < nums2[j - 1]) {
            min = i + 1;
        } else {
            let left,right;
            if (i === 0) left = nums2[j - 1];
            else if (j === 0) left = nums1[i - 1];
            else left = Math.max(nums1[i - 1], nums2[j - 1]);

            if (i === length1) right = nums2[j];
            else if (j === length2) right = nums1[i];
            else right = Math.min(nums1[i], nums2[j]);

            return (length1 + length2) % 2 ? left : (left + right) / 2;
        }
    }
    return 0;
};

const findMedianSortedArrays4 = (nums1, nums2) => {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    const length1 = nums1.length;
    const length2 = nums2.length;
    let min = 0;
    let max = length1;
    let i = (min + max) >>> 1;
    let j = (length1 + length2 + 1) >>> 1 - i;
    while (min <= max) {
        let leftMax1 = i === 0 ? -Number.POSITIVE_INFINITY : nums1[i - 1];
        let rightMin1 = i === length1 ? Number.POSITIVE_INFINITY : nums1[i];
        let leftMax2 = j === 0 ? -Number.POSITIVE_INFINITY : nums2[j - 1];
        let rightMin2 = j === length2 ? Number.POSITIVE_INFINITY : nums2[j];
        if (leftMax1 <= rightMin2 && leftMax2 <= rightMin1) {
            if (((length1 + length2) & 1) === 1) {
                return Math.max(leftMax1, leftMax2);
            } else {
                return (Math.max(leftMax1, leftMax2) + Math.min(rightMin1, rightMin2)) / 2;
            }
        } else if (leftMax2 > rightMin1) {
            min = i + 1;
        } else {
            max = i - 1;
        }
    }
};

const nums1 = [1,2,3,4,5];
const nums2 = [3,4,5,6,9];

console.log(findMedianSortedArrays1(nums1, nums2));
console.log(findMedianSortedArrays2(nums1, nums2));
console.log(findMedianSortedArrays3(nums1, nums2));
console.log(findMedianSortedArrays4(nums1, nums2));
