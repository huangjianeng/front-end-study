let a = {
    aa:1

}
let arr = [1,3,4]

console.log('toString' in a)
console.log('aa' in a)
console.log(a.hasOwnProperty('aa'))
console.log(a.hasOwnProperty('toString'))


function Person() {}
var person = new Person();
console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
