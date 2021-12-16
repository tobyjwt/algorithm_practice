/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let n = customers.length;
    if (X >= n) {
        return customers.reduce((total, cur) => total + cur, 0);
    }
    let left = 0;
    let maxSum = 0;
    let leftSum = 0;
    let rightSum = 0;
    for (let i = X; i < n; i++) {
        if (grumpy[i] === 0) {
            rightSum += customers[i];
        }
    }
    while(left + X <= n) {
        let tempSum = customers.slice(left, left + X).reduce((total, cur) => total + cur, 0);
        maxSum = Math.max(maxSum, leftSum + tempSum + rightSum);
        if (grumpy[left] === 0) {
            leftSum += customers[left];
        }
        if (grumpy[left + X] === 0) {
            rightSum = rightSum - customers[left + X];
        }
        left++
    }
    return maxSum;
};

console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3));
