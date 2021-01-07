let arr = [1,2,3,4,5]
// console.log(arr)
// let a = arr.splice(2,2,'哈哈')
// console.log(a)
// console.log(arr)



// let filter = arr.filter(v=>v == 1)
// console.log(filter)

// arr = [1]
// let find = arr.find(v=>v == 1)
// console.log(find)

let findIndex = arr.findIndex(v=>v == 51)
console.log(findIndex)

// let map = arr.map(v=>v == 1)
// console.log(map)

// let some = arr.some(v=>v == 1)
// console.log(some)

// arr = []
// let every = arr.every(v=>v == 1)
// console.log(every)

// let reduce = arr.reduce((total, current, currentIndex, arr)=>{
//     console.log(total, current, currentIndex)
//     console.log(arr)
//     return total + current
// })
// console.log(reduce)

// arr.slice(0,1)   截取数据，不会改变原数据   可用数据和字符串    包括0 不含1
// arr.splice(i,num,replace)    替换数据，会改变原数据   i 起始位置  num 后面几组数据，replace需要替换的内容
 


let c = null;
let vv = c || '11'
let vv1 = c ?? '11'
console.log(vv)
console.log(vv1)