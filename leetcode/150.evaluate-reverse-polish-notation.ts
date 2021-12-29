/**
 * 根据 逆波兰表示法，求表达式的值。

有效的算符包括 +、-、*、/ 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

 

说明：

整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
 */

function evalRPN(tokens: string[]): number {
    const resultStack: number[] = [];
    while(tokens.length) {
        const temp: string = tokens.shift() as string;
        if (/\d/.test(temp)) {
            resultStack.push(Number(temp));
        } else {
            const right = resultStack.pop() as number;
            const left = resultStack.pop() as number;
            switch(temp) {
                case '+': resultStack.push(left + right); break;
                case '-': resultStack.push(left - right); break;
                case '*': resultStack.push(left * right); break;
                case '/': resultStack.push(Math.trunc(left / right)); break;
                default: break;
            }
        }
    }
    return resultStack[0];
};

console.log(evalRPN(["2","1","+","3","*"])); // 9
console.log(evalRPN(['3', '1', '2', '+', '*'])); // 9
console.log(evalRPN(["4","13","5","/","+"])); // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 22
