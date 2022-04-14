function myInstanceof(instance, constructor) {
    let leftValue = instance.__proto__;
    let rightValue = constructor.prototype;
    while (true) {
        if (leftValue === null) {
            return false;
        }
        if (leftValue === rightValue) {
            return true;
        }
        leftValue = leftValue.__proto__;
    }
}

function compare(instance, constructor) {
    console.log(myInstanceof(instance, constructor));
    console.log(instance instanceof constructor);
    console.log('=>>>>>>>>>>>>>');
}

compare(Object, Object);
compare(Function, Function);
compare(Function, Object);
compare(Object, Function);
