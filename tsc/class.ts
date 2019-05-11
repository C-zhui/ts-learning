class Person {
    name:string;
    constructor(name:string){
        this.name = name 
    }
    run():void{
        console.log(`${this.name} 疯狂奔跑`)
    }
}

console.log(new Person('czhui').run())