"use strict";
function run() {
    return 123;
}
var run1 = function () {
    return 132;
};
var run2 = function () {
    return '123';
};
function run3(name, age) {
    console.log(name, age);
}
run3('czhui', 21);
function get(a) {
    return;
}
