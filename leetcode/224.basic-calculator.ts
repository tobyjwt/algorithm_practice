// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
// s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
function calculate(s: string): number {
    // 去掉空格，组装为数组
    const str: string[] = [];
    let lastNum = '';
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (/\d/.test(cur)) {
            lastNum += cur;
        } else if (cur === ' ') {
            continue;
        } else {
            if (lastNum !== '') {
                str.push(lastNum);
            }
            lastNum = '';
            str.push(cur);
        }
    }
    if (lastNum !== '') {
        str.push(lastNum);
    }
    console.log(toPostExp(str));
    const posts = toPostExp(str);
    return postToResult(posts);
    
    type OP = ('(' | ')' | '+' | '-' | '*' | '/');
    // 转为后缀表达式
    function toPostExp(str: string[]) {
        const result: string[] = [];
        const ops: OP[] = [];
        const levelMap = {
            '(': 0,
            ')': 0,
            '*': 2,
            '/': 2,
            '+': 1,
            '-': 1
        };
        for (let i = 0; i < str.length; i++) {
            const cur = str[i];
            if (/\d/.test(cur)) {
                result.push(cur);
            } else if (cur === '(') {
                ops.push(cur);
            } else if (cur === ')') {
                while(ops[ops.length - 1] !== '(') {
                    result.push(ops.pop() as string);
                }
                ops.pop();
            } else {
                while(ops.length && levelMap[ops[ops.length - 1]] >= levelMap[cur as OP]) {
                    result.push(ops.pop() as OP);
                }
                ops.push(cur as OP);
            }
        }
        while(ops.length) {
            result.push(ops.pop() as OP);
        }
        return result;
    }

    function postToResult(str: string[]) {
        const nums: number[] = [];
        for (let i = 0; i < str.length; i++) {
            const cur = str[i];
            if (/\d/.test(cur)) {
                nums.push(Number(cur));
            } else {
                const right = nums.pop() as number;
                const left = nums.pop() as number;
                switch (cur) {
                    case '+': nums.push(left + right); break;
                    case '-': nums.push(left - right); break;
                    case '*': nums.push(left * right); break;
                    case '/': nums.push(left / right); break;
                    default: break;
                }
            }
        }
        return nums[0];
    }
};

// console.log(calculate("1 + 1")); // 2
console.log(calculate('2 - 1 + 2'));// 3
console.log(calculate("-2+ 1")); // -1
// console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23