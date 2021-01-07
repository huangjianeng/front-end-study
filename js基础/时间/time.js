// 1s == 1000ms

let t = new Date()
console.log(t.getTime())  //获取从1970年至今的毫秒数
setTimeout(()=>{
    let tt = new Date().getTime()
    console.log(tt-t)
},1000)
console.log(11)

let a = new Date()
console.log(a.getFullYear())
console.log(a.getMonth())
a.setMonth(13)
console.log(a.getFullYear())
console.log(a.getMonth())
