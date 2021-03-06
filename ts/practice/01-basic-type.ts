
// var counter ; // any type

// var counter = 0; // number , detected

// 1. number
var counter: number = 1; // number , specify

// 2. boolean

var isDone: boolean = false;
isDone = true;

// 3. string

var myName: string = 'bob'

// 4. list

var list1: number[] = [1, 3, 4]

var list2: Array<number> = [1, 3, 4]

// 5. enum

enum Color { Red = 0, Green = 2, Blue = 3 };
var c: Color = Color.Blue; // 明确
c = 2;                    // 可以接受？
console.log(Color[c]) // Green

// 6. any

var list: any = [1, true, Color.Red, "free"]

var o: Object = { a: 1, b: 3 }
// o.c = 1 // 报错
// o.a // 也是报错，说明这个Object声明只认Object的原型方法

var o1: any = { a: 1, b: 3 }
o1.c = 1
o1.a = 2 // 都没问题


// 7. void 用于声明函数没有返回值

function warnUser(): void {
    alert("This is my warning message")
}

// 8. null 和 undefined
let null_val: null = null;
let undefined_val: undefined = void 0;

let null_val2: null;










// 9. var / let / const 
var val = 1;
let a = 1;
{
    let a = 2;
}
const notChange = 3;
// notChange = 4; // 报错

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        // console.log(i) 
    }, 200);
}
for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        // console.log(j)
    }, 200);
}


// 10. 联合类型

var path: string[] | string
path = '/temp/log.xml';
path = ['/temp/log.xml', '/temp/errors.xml']
// path = 1; 



// 11. 类型守护

var x: any = "123456"

if (typeof x == 'string') { // 这{} 中的x会被编译器认为是string类型，intellsense会有提示
    let list: string[] = x.split('');
    // let nothing = x.splice(1,3) // 这句报错
}

// x.foo() // 因为是any，所以编译没问题，但是没有这个方法，运行时报错了


// 12. 类型别名

type TupleArray = Array<[number, string, boolean]> // 元组类型的数组
let tuples: TupleArray = [
    [1, 'name', true],
    [1, 'name', true],
    [1, 'name', true],
    [1, 'name', true],
]

type MyNumber = number

let ci: MyNumber = 1



// 13. 环境接口声明
// typescript 会包含一个lib.d.ts 用来声明node.js或浏览器环境
// 主要用于让ts转译器不报错

interface INode {
    children(): INode[]
}

declare var node: INode

// let children  = node.children() // 因为是声明的运行环境变量接口，所以可能运行时报错，因为没有这个方法



// 14. 函数
// 命名函数
function greet(name?: string): string {
    if (name) {
        return 'hi! ' + name
    } else {
        return 'hi'
    }
}


console.log(greet())
console.log(greet('czhui'))

// 匿名函数
var greet2 = function (name?: string): string {
    if (name) {
        return 'hi! ' + name
    } else {
        return 'hi'
    }
}

// 箭头函数
var greet3 = (name?: string): string => {
    if (name) {
        return 'hi! ' + name
    } else {
        return 'hi'
    }
}

// 15. 类
class Character {
    fullname: string;
    constructor(firstname: string, lastname: string) {
        this.fullname = firstname + lastname
    }
    greet(name?: string) {
        if (name) {
            return `Hi! ${name} ! My name is ${this.fullname}`
        } else {
            return `Hi! My name is ${this.fullname}`
        }
    }
}

var spark = new Character("Jacob", "Keyes")
var msg = spark.greet()
var msg1 = spark.greet("Dr. Halsey")


// 16. 接口类型
interface ILogger {
    log(arg: any): void
}

class Logger implements ILogger {
    log(arg: any): void {
        console.log(arg)
    }
}


interface IUser {
    name: string;
    password: string;
}

var user: IUser = {
    name: 'czhui',
    password: '123456'
}

// 17. 命名空间namespace

namespace Geometry {
    export var i: number = 1;
    export var a: string = "hello world"
}

console.log(Geometry.a)
console.log(Geometry.i)

