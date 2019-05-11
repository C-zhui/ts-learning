"use strict";
// var counter ; // any type
// var counter = 0; // number , detected
// 1. number
var counter = 1; // number , specify
// 2. boolean
var isDone = false;
isDone = true;
// 3. string
var myName = 'bob';
// 4. list
var list1 = [1, 3, 4];
var list2 = [1, 3, 4];
// 5. enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue; // 明确
c = 2; // 可以接受？
console.log(Color[c]); // Green
// 6. any
var list = [1, true, Color.Red, "free"];
var o = { a: 1, b: 3 };
// o.c = 1 // 报错
// o.a // 也是报错，说明这个Object声明只认Object的原型方法
var o1 = { a: 1, b: 3 };
o1.c = 1;
o1.a = 2; // 都没问题
// 7. void 用于声明函数没有返回值
function warnUser() {
    alert("This is my warning message");
}
// 8. null 和 undefined
var null_val = null;
var undefined_val = void 0;
var null_val2;
// 9. var / let / const 
var val = 1;
var a = 1;
{
    var a_1 = 2;
}
var notChange = 3;
// notChange = 4; // 报错
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        // console.log(i) 
    }, 200);
}
for (var j = 0; j < 10; j++) {
    setTimeout(function () {
        // console.log(j)
    }, 200);
}
// 10. 联合类型
var path;
path = '/temp/log.xml';
path = ['/temp/log.xml', '/temp/errors.xml'];
// path = 1; 
// 11. 类型守护
var x = "123456";
if (typeof x == 'string') { // 这{} 中的x会被编译器认为是string类型，intellsense会有提示
    var list_1 = x.split('');
    // let nothing = x.splice(1,3) // 这句报错
}
var tuples = [
    [1, 'name', true],
    [1, 'name', true],
    [1, 'name', true],
    [1, 'name', true],
];
var ci = 1;
// let children  = node.children() // 因为是声明的运行环境变量接口，所以可能运行时报错，因为没有这个方法
// 14. 函数
// 命名函数
function greet(name) {
    if (name) {
        return 'hi! ' + name;
    }
    else {
        return 'hi';
    }
}
console.log(greet());
console.log(greet('czhui'));
// 匿名函数
var greet2 = function (name) {
    if (name) {
        return 'hi! ' + name;
    }
    else {
        return 'hi';
    }
};
// 箭头函数
var greet3 = function (name) {
    if (name) {
        return 'hi! ' + name;
    }
    else {
        return 'hi';
    }
};
// 15. 类
var Character = /** @class */ (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + lastname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            return "Hi! " + name + " ! My name is " + this.fullname;
        }
        else {
            return "Hi! My name is " + this.fullname;
        }
    };
    return Character;
}());
var spark = new Character("Jacob", "Keyes");
var msg = spark.greet();
var msg1 = spark.greet("Dr. Halsey");
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (arg) {
        console.log(arg);
    };
    return Logger;
}());
var user = {
    name: 'czhui',
    password: '123456'
};
// 17. 命名空间namespace
var Geometry;
(function (Geometry) {
    Geometry.i = 1;
    Geometry.a = "hello world";
})(Geometry || (Geometry = {}));
console.log(Geometry.a);
console.log(Geometry.i);
