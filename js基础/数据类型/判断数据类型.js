// console.log(undefined == NaN)
// console.log(NaN == NaN)
// console.log(null == NaN)
// console.log(false == '0')
// console.log(true == '1')
// console.log(-0 == 0)
// console.log(0 == [])
// console.log(true == [])

// 所有数据类型  == 比较可以理解 都转换成  number   
let string = '字符串';
let number = 11111;
let nul = null;
let ufd = undefined;
let isFalse = true;
let arr = [1,2];
let obj = {a:'1'}
let date = new Date();
let sys = Symbol();
let res = new RegExp();
let arr1 = arr
let fun = ()=>{}
// arr1[1] = 3
// console.log(arr)
// console.log(typeof string) 
// console.log(typeof number)
// console.log(typeof nul)   // object
// console.log(typeof ufd)   // undefined
// console.log(typeof isFalse)
// console.log(typeof arr)   // object
// console.log(typeof obj)   // object
// console.log(typeof res)   // object
// console.log(typeof fun)   // function
// console.log(typeof sys)   // symbol


// console.log(string.constructor)  //[Function: String]
// console.log(number.constructor)  // [Function: Number]
// // console.log(nul.constructor)
// // console.log(ufd.constructor)
// console.log(isFalse.constructor)  // [Function: Boolean]
// console.log(arr.constructor)  //  [Function: Array]
// console.log(obj.constructor)  // [Function: Object]



// console.log(string instanceof Object)  // false
// console.log(number instanceof Object)  // false
// console.log(nul instanceof Object)  // false
// console.log(ufd instanceof Object)  // false
// console.log(isFalse instanceof Object)  // false
// console.log(arr instanceof Object)  // true
// console.log(obj instanceof Object)  // true


// console.log(Object.prototype.toString.call(string))  // [object String]
// console.log(Object.prototype.toString.call(number))  // [object Number]
// console.log(Object.prototype.toString.call(nul))  // [object Null]
// console.log(Object.prototype.toString.call(ufd))  // Undefined
// console.log(Object.prototype.toString.call(isFalse))  // Boolean
// console.log(Object.prototype.toString.call(arr))  // [object Array]
// console.log(Object.prototype.toString.call(obj))  // [object Object]
// console.log(Object.prototype.toString.call(date))  // [object Date]
// console.log(Object.prototype.toString.call(sys))  // [object Symbol]
// console.log(Object.prototype.toString.call(res))  // [object RegExp]



