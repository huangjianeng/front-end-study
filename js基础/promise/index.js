
// 微任务
// Promise.then() 或者 catch()、V8的垃圾回收过程

// 宏任务
// script settimeout setinterval I/O


// 现在执行宏任务，再执行微任务

// console.log('1');
// setTimeout(() => {
//   console.log('timer1');
//   Promise.resolve().then(() => {
//     console.log('promise')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
// }, 0)

// console.log('2');
// return




// let p = Promise.resolve();

// p.then(() => {
//   console.log("then1");
//   Promise.resolve().then(() => {
//     console.log("then1-1");
//   });
// }).then(() => {
//   console.log("then1-2");
// });

// p.then(() => {
//   console.log("then2");
// }); 

let skuList = [
  {
    name:'颜色', id:199,model:[],
    list:['红色','绿色']
    // list:[
    //   {name:'红色', id:10,},
    //   {name:'绿色', id:11}
    // ]
  },
  {
    name:'内存', id:299,model:[],
    list:['64g','128g'],
    // list:[
    //   {name:'64g', id:20},
    //   {name:'128g', id:21},
    // ]
  },
  {
    name:'价格', id:399,model:[],
    list:[1000,2000]
    // list:[
    //   {name:'1000', id:30},
    //   {name:'2000', id:31},
    // ]
  }
]








