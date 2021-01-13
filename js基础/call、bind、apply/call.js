let person  = {
    name:'张三',
    sing:function(a,b,c,d){
        console.log('我是'+ this.name + 'a=' + a + 'b=' +  b + 'c=' +  c + 'd=' +  d)
    }
}

let cat = {
    name:'city',
    sing:function(){
        console.log('喵喵喵')
    }
}

//  第一个参数都是调用方法的对象，      call和bind  后面必须传单个参数和多个参数，  
//  apply 只接收数组参数
//  bind  是返回一个函数，需要再次调用
// person.sing.call(cat,'aaa','bbb','ccc')   
// person.sing.apply(cat,['aaa','bbb','ccc'])
// person.sing.bind(cat,'aaa','bbb','ccc')()

Function.prototype.myApply = function (context, args) {
    //这里默认不传就是给window,也可以用es6给参数设置默认参数
    context = context || window
    args = args ? args : []
    //给context新增一个独一无二的属性以免覆盖原有属性
    const key = Symbol()
    context[key] = this
    //通过隐式绑定的方式调用函数
    const result = context[key](...args)
    //删除添加的属性
    delete context[key]
    //返回函数调用的返回值
    return result
}



// function factorial(num){    
//     if (num <=1) {         
//        return 1;     
//     } else {         
//     return num * factorial(num-1)     
//     } 
//  }
// console.log(factorial(5))

// let a = [1,2,3]
// console.log(a)
