let a =  {
    b:{
        c:11
    }
}
function aa(a){
    return 1
}
function bb(a){
    return 2
}
function cc(a){
    return 3
}
// console.log(a.b?.c)
// console.log(a.f?.c)
// 1、可选链

// 2、管道运算符
// const result = foo(bar(baz('hello world')))
// const result = 'hello world' |> baz |> bar |>foo


let t = new Date()
let t1 = new Date()
console.log(t.getTime())
console.log(t1.getTime())