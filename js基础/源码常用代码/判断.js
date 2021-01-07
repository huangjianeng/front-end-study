// instanceof运算符，验证原型对象与实例对象之间的关系。


function isFunction(fnc){
    console.log(typeof fnc)
   return  typeof fnc === 'function'
}

isFunction('222')
isFunction(22)
isFunction(false)
isFunction(undefined)
isFunction([1])

isFunction(2)
isFunction(Symbol())
isFunction({a:1})
isFunction(function(){})