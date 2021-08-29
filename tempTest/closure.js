function fun1 () {
    const aaa = 123;
    return function () {
        console.log(aaa);
        debugger;
    }
}

fun1()();
