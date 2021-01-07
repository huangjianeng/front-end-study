
let n = 2
// 指数函数  n>1   增长最快的
let  exponential  = (x)=>{
    return n**x
}

//幂函数  增长也很快
console.log(exponential(3))

 function power(x){
    return x**n
}
console.log(power(3))
// 对数函数
// log的计算就是bai乘方的逆过程。
// 如果a的x次方等于N（a>0，且a不等于1），
// 那么数x叫做以a为底daoN的对数（logarithm），记作x=logaN。其中，a叫做对数的底数，N叫做真数。
// 计算方式：
// 根据2^3=8，可得log2 8=3


// 备注  
//  1、幂函数和指数函数    x值和n值相反
//  2、幂函数和对数函数    x值和y值相反