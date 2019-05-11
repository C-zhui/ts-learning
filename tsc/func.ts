function run(){
    return 123
}

var run1 = function (){
    return 132
}

let run2 = function ():string{
    return '123'
}

function run3(name:string,age:number):void{
    console.log(name,age)
}

run3('czhui',21)




// 函数重载
function get(a:number):string;
function get(s:string):string;
function get(a:any):any{
    
    return 
}
