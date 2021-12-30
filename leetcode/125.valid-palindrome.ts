/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
    说明：本题中，我们将空字符串定义为有效的回文串。
 */

function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        while(!/[a-zA-Z0-9]/.test(s[left])) {
            left++;
        }
        while(!/[a-zA-Z0-9]/.test(s[right])) {
            right--;
        }
        console.log(s[left], s[right]);
        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('ab_a')); // true;