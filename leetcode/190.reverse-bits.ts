// 颠倒给定的 32 位无符号整数的二进制位。

function reverseBits(n: number): number {
    let str = n.toString(2).split('').reverse().join('');
    while(str.length < 32) {
        str += '0';
    }
	return parseInt(str, 2);
};