function getTree(arr) {
    const itemMap = {};
    const result = [];
    for (const item of arr) {
        const itemObj = {
            ...item,
            children: []
        };
        itemMap[itemObj.id] = itemObj;
        if (itemObj.pid === 0) {
            result.push(itemObj);
        } else {
            itemMap[itemObj.pid].children.push(itemObj);
        }
    }
    return result;
}

const arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4}
];

console.log(...getTree(arr));
