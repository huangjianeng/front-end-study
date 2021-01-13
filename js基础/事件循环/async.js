
var promise = new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 100)
})
// 1
// promise.then(() => {
//   return Promise.resolve(2);
// }).then((n) => {
//   console.log(1,n)
// });

// 2
promise.then(() => {
  return 2
}).then((n) => {
  console.log(2,n)
});

// 3
// promise.then((n)=>{
//   console.log(31,n)
// }).then((n) => {
//   console.log(32,n)
// });

// console.log('async1 start')  
// console.log('async1 end') 
// console.log('script start')
// console.log('Promise')
// console.log('async2 end') 
// console.log('promise1')
// console.log('promise2')
// console.log('setTimeout')