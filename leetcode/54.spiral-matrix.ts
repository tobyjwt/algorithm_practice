function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length;
    if (!m) {
        return [];
    } 
    const n = matrix[0].length;
    if (!n) {
        return [];
    }
    let dir = 'right';
    let point = [0, 0];
    let topBound = 1;
    let rightBound = n - 1;
    let bottomBound = m - 1;
    let leftBound = 0;
    const result = [];
    while(true) {
        result.push(matrix[point[0]][point[1]]);
        console.log(point[0], point[1]);
        console.log(topBound, rightBound, bottomBound, leftBound);
        if (dir === 'right') {
            if (point[1] === rightBound) {
                if (point[0] === bottomBound) {
                    break;
                }
                dir = 'bottom';
                point[0]++;
                rightBound--;
            } else {
                point[1]++;
            }
        } else if (dir === 'bottom') {
            if (point[0] === bottomBound) {
                if (point[1] === leftBound) {
                    break;
                }
                bottomBound--;
                dir = 'left';
                point[1]--;
            } else {
                point[0]++;
            }
        } else if (dir === 'left') {
            if (point[1] === leftBound) {
                if (point[0] === topBound) {
                    break;
                }
                dir = 'top';
                leftBound++;
                point[0]--;
            } else {
                point[1]--;
            }
        } else if (dir === 'top') {
            if (point[0] === topBound) {
                if (point[1] === rightBound) {
                    break;
                }
                topBound++;
                dir = 'right';
                point[1]++;
            } else {
                point[0]--;
            }
        }
    }
    return result;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));