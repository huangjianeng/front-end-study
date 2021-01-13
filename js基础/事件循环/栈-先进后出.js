
let a = 1
const second = () => {
    console.log('Hello there!')
    a = 2
  }
  const first = () => {
    console.log('Hi there!')
    console.log(a)
    second();
    console.log(a)
    console.log('The End')
    for(let i = 0; i<=999999999;i++){
        a = i
    }
    console.log(a)
  }
  first()
  console.log('event')

//   执行栈的理解     后进先出   first函数先进栈,而second函数后进栈,second反而先出