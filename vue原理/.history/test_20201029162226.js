let person = {
    name:'张三',
    age:12,
    introduce:function(to,from){
        console.log(to)
        console.log(`${this.name}${this.age}岁了~~~~来自${to}，去往${from}`)
        // console.log(new Date().getTime())
    }
}

Function.prototype.MyApply = function(context,...args){
    context = context || window;
    args = args ? args : [];
    let key = Symbol();
    context[key] = this;  //this 就是调用MyCall方法的方法
    const result = context[key](...args);
    delete context[key];
    return result
}


let person1 = {
    name:'李四',
    age:24,
}
let person2 = {
    name:'王五',
    age:34,
}
// person.introduce();
// person.introduce.MyApply(person1,['上海','长沙'])
function ceshi(...args){
    console.log(...args)
}
ceshi([1,2])
ceshi({n:1},2)
let ar1 = [2,3,4]
let ob1 = {a:'aa',b:'bb'}
console.log(...ar1)
console.log(...ob1)
// person.introduce.call(person2,'上海','长沙')
// console.log(person.introduce.bind(person2,'上海','长沙')())
// console.log(person.introduce.bind(person2,['上海','长沙'])())

// let arr2 = [0,1,2,3]
// for(let i = 0 ; i < arr2.length ; i++){
//     console.log(i)
// }

// let combine = function (n, k) {
//     let ret = []
  
//     let helper = (start, prev) => {
//       let len = prev.length
//       if (len === k) {
//         ret.push(prev)
//         return
//       }
  
//       for (let i = start; i <= n; i++) {
//         helper(i + 1, prev.concat(i))
//       }
//     }
//     helper(1, [])
//     return ret
//   }
  
//  let t = combine(4,2)
//  console.log(t)


//  import {a } from "./ceshi/index2"
 
// export let a
// export {a}       {} 是一个语法糖  不要理解成对象
// 效果一样