// function sandbox(code) {
//     var withStr = `with(obj) { ${code} }`;
//     return new Function('obj', withStr);
// }
// const tmpObj = { a: 'hello' };
// var a = 123;
// var consoleT = sandbox('console.log(b)');
// consoleT(tmpObj);

// 在外部声明a变量，且传入的对象没有队友的key时，会向上查找a变量
function sandBox(code) {
    const withStr = `with(obj) { ${ code } }`;
    return new Function('obj', withStr);
}
var tmpObj = { };
var a = 'world';
sandBox('console.log(a)')(tmpObj); // world;
