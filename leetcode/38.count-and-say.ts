function countAndSay(n: number): string {
    if (n === 1) {
        return '1';
    }
    let last = '1';
    for (let i = 1; i < n; i++) {
        let newOne = '';
        let pre = last[0];
        let count = 1;
        for(let j = 1; j < last.length; j++) {
            const cur = last[j];
            if (cur === pre) {
                count++;
            } else {
                newOne += `${count}${pre}`;
                count = 1;
                pre = cur;
            }
        }
        newOne += `${count}${pre}`;
        last = newOne;
    }
    return last;
};