
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









