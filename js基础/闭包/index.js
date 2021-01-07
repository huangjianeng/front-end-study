// 闭包主要作用    延申了变量的作用范围

// 总结
// 1、将变量存在私有作用域内，避免变量污染  
for(var i =0; i<5 ; i++){
    console.log(i)
    setTimeout(function(){
        console.log(i)
    },1000)
}

