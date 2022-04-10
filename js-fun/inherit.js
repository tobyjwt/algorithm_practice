// 原型链继承，子类的原型对象指向父类的一个实例
function ParentA() {
    this.parent = 'parentA';
}

ParentA.prototype.getName = function () {
    return this.name;
}

function ChildA(name) {
    this.name = name;
}

ChildA.prototype = new ParentA();
const childA = new ChildA('childA');
console.log(childA);
console.log(childA.parent);
console.log(childA.getName());
// 缺点，所有子类原型都指向同一个实例，一个修改了会影响到其它
// 不能像父类传参

// 构造函数继承，子类中运行父类的构造函数，劫持this
function ParentB() {
    this.parent = 'parentb';
}

ParentB.prototype.getName = function () {
    return this.name;
}

function ChildB() {
    ParentB.call(this, 'some args to parent');
}

const childB = new ChildB();

console.log(childB.getName());
// 可以向父类传参，也不存在子类原型指向同一个实例的问题，但不能继承原型上的方法

// 组合继承
function ParentC() {
    this.parent = 'parent';
}

ParentC.prototype.getName = function () {
    return this.name;
}

function ChildC() {
    ParentC.call(this);
}

ChildC.prototype = new ParentC();

// 功能基本可以实现，但是执行了两次ParentC，而且实例和原型上可能会存在相同的方法

// 组合寄生
function ParentD() {
    this.parent = 'parentD';
}

function ChildD() {
    ParentD.call(this);
}

ChildD.prototype = Object.create(ParentD.prototype);
ChildD.prototype.constructor = ChildD;
