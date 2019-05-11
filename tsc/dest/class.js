"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + " \u75AF\u72C2\u5954\u8DD1");
    };
    return Person;
}());
console.log(new Person('czhui').run());
