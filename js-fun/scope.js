
// console.log(fn1); // undefined
// console.log(fn2); // 报错
// var fn1 = function () {
//     console.log('test');
// }
//
// let fn2 = function () {
//     console.log('test');
// }

// getName(); // function1
// var getName = function () {
//     console.log('function2')
// }
// function getName() {
//     console.log('function1')
// }
// getName(); // function2

// console.log(a); // error
// console.log(b); // error
function test() {
    var a = 10;
    b = 20;
}
test();
// console.log(a); // error
console.log(b); // 20
