

function isPi(s) {
    const n = s.length;
    const result = [];
    const any = [];

    const member = new Array(n).fill(0).map(item => new Array(n).fill(true));
    for(let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            member[i][j] = ((s[i] === s[j]) && member[i + 1][j - 1]);
        }
    }

    const dfs = (start) => {
        if (start === n) {
            result.push([...any]);
        } else {
            for (let i = start; i < n; i++) {
                if (member[start][i]) {
                    any.push(s.slice(start, i + 1));
                    dfs(i + 1);
                    any.pop();
                }
            }
        }
    }

    dfs(0);

    return result;
}


function charge(s) {
    let left, right;
    if (s.length % 2 === 0) {
        left = s.length / 2 - 1;
        right = left + 1;
    } else {
        left = right = Math.floor(s.length / 2);
    }
    while (left >= 0) {
        if (s[left] !== s[right]) {
            return false;
        }
        left--;
        right++;
    }
    return true;
}

console.log(isPi('aab'))


var partition = function(s) {
    const dfs = (i) => {
        if (i === n) {
            ret.push(ans.slice());
            return;
        }
        for (let j = i; j < n; ++j) {
            if (f[i][j]) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    }

    const n = s.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
    let ret = [], ans = [];

    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            f[i][j] = (s[i] === s[j]) && f[i + 1][j - 1];
        }
    }
    dfs(0);
    return ret;
};
