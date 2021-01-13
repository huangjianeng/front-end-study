
// 实列对象的隐士原型 __proto__   == 构造函数的 显示原型 prototype

// 公共方法放到 原型上面，可以减少开辟内存空间


//  Person 是构造函数
//  构造函数   constructor 指回的是 构造函数本身


// function Person(name,age) {
//     this.name = name; 
//     this.age = age;
// }
// Person.prototype.sing = function(){
//     console.log('哈哈哈')
// }
// let zs = new Person('张三',44);
// console.log(Person.prototype )

// class Persong {

// }

// 原型链的理解
// 1、所有对象的原型都指向Object的原型
// 2、对象的原型 prototype 上绑定的方法，他的每个对象都能继承到（prototype的地址指向是相同的）
// 3、函数的prototype的constructor  指向函数本身



// 需要注意 
// 1、Function.prototype === Function.__proto__   都指向  Function.prototype
// 2、Object.__proto__ 指向 Function.prototype  
// 3、Object.prototype 指向 null  
let arr = []
console.log(arr instanceof Array)