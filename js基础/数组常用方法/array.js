let arr = [1,2,3,4,5]
let arr1 = ['a','b','c']

// 增删改方法  
// push 
// pop       从后面删除
// unshift   从前面增加
// shite     从前面删除
// splice(开始位置,修改几个数目,新加入的内容)  

// 排序    改变原数组,其实就是返回原数组
// reverse
// sort
let arr22 = [2,5,7,3]
arr22.sort((a,b)=>{b-a})
console.log(arr22)

// 查询和拼接  不改变原数组
// slice 
// concat  合并

// 转为字符串  不改变原数组 
//  let arr2 = arr.join('@')     [1,2,3] => '1@2@3'
//  let arr2 = arr1.toString() 用逗号分割成字符串


console.log(arr1)
// console.log(arr2)
console.log(arr)    


let arr10 = []
// return   可以  continue 循环
// arr10.forEach(element => {});

// 返回数组，包含了符合条件的所有元素（是个集合）。如果没有符合条件的元素则返回空数组。
// let filter = arr.filter(v=>v == 1) 
// console.log(filter)

// 返回符合测试条件的第一个数组元素值（是单个值），如果没有符合条件的则返回 undefined。
// let find = arr.find(v=>v == 1)
// console.log(find)

// 返回符合测试条件的第一个数组下标，如果没有符合条件的则返回 -1
// let findIndex = arr10.findIndex(v=>v == 11)
// console.log(findIndex)

// 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// let map = arr.map(v=>v == 1)
// console.log(map)

// 布尔值。如果数组中有元素满足条件返回 true，否则返回 false。
// let some = arr10.some(v=>v == 1)
// console.log(some)

// 布尔值。如果所有元素都通过检测返回 true，否则返回 false。  return   可以  break 循环
// let every = arr10.every(v=>v == 1)
// console.log(every)

// total 必需。初始值, 或者计算结束后的返回值。
let reduce = arr.reduce((total, current, currentIndex, arr)=>{
    console.log(total, current, currentIndex)
    return total + current
})
console.log(reduce)
 
// A
// new Set()
// Array.from();

// let c = null;
// let vv = c || '11'
// let vv1 = c ?? '11'
// console.log(vv)
// console.log(vv1)






// 去重和查找元素出现次数
// let a = Symbol()
// let arr99 = [3,4,4,5,6,6,6]
// let obj = {}
// let newArr = []
// let max = 0
// arr99.forEach((v,i)=>{
//   if(!newArr.includes(v)){
//     newArr.push(v)
//   }
//   if(obj[v]){
//     obj[v]++
//     if(obj[v] > max){
//         max = obj[v]
//     }
//   }else{
//     obj[v] = 1
//   }
// })

// console.log(newArr)
// console.log(obj)
// console.log(max)