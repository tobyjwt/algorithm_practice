function romanToInt(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (cur === 'I') {
            count++;
        } else if (cur === 'V') {
            count += 5;
            if (s[i - 1] === 'I') {
                count = count - 2;
            }
        } else if (cur === 'X') {
            count += 10;
            if (s[i - 1] === 'I') {
                count = count - 2;
            }
        } else if (cur === 'L') {
            count += 50;
            if (s[i - 1] === 'X') {
                count = count - 20;
            }
        } else if (cur === 'C') {
            count += 100;
            if (s[i - 1] === 'X') {
                count = count - 20;
            }
        } else if (cur === 'D') {
            count += 500;
            if (s[i - 1] === 'C') {
                count = count - 200;
            }
        } else if (cur === 'M') {
            count += 1000;
            if (s[i - 1] === 'C') {
                count = count - 200;
            }
        }
    }

    return count;
};