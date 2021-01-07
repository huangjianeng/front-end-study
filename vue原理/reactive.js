//模拟一个render watcher
function Watcher(update) {
  this.update = update
  this.get()
}
// 模拟执行渲染
Watcher.prototype.get = function() {
  try{
   	Dep.target = this
  	this.update()  
  } finally {
    Dep.target = null
  }
}

// 发布订阅模式
function Dep() {
  this.watchers = []
}
// 当前全局的watcher
Dep.target = null
// 依赖收集方法
function hasOwn(origin, newOne) {
  let res = origin.findIndex(oldOne => oldOne === newOne)
  return res > -1 ? true : false
}
Dep.prototype.depend = function() {
  hasOwn(this.watchers, Dep.target) ? '' : this.watchers.push(Dep.target)
}
// 派发通知方法
Dep.prototype.notify = function() {
  this.watchers.forEach(watcher => {
    watcher.get()
  })
}

// 响应式
let oldPrototype = Array.prototype
let newPrototype = Object.create(oldPrototype)
let methods = ['push', 'pop', 'shift', 'unshift']
methods.forEach(method => {
  Object.defineProperty(newPrototype, method, {
    value: function(...args) {
      let res = oldPrototype[method].call(this, ...args)
      console.log('劫持数组', method)
      return res
    },
    configurable: false,
    writable: false
  })
})


function observer(target) {
  if(typeof target !== 'object' || target == null) {
    return target
  }
  if(Array.isArray(target)) {
    Object.setPrototypeOf(target, newPrototype)
    target.forEach(val => {
      observer(val)
    })
  } else {
    for(key in target) {
      defineReactive(target, key, target[key])
    }
  }
}

function defineReactive(target, key, value) {
  observer(value)
  let dep = new Dep()
  Object.defineProperty(target, key, {
    get() {
      dep.depend()
      return value
    },
    set(newVal) {
      if(newVal !== value) {
        value = observer(newVal)
        dep.notify()
      }
    }
  })
}
let data = {
  a: 1,
  b: 2
}

observer(data)



//模拟一个render，产生对dep的依赖
let render = () => { console.log(`依赖于data的a属性：${data.a}`) }
let render2 = () => { console.log(`依赖于data的b属性：${data.b}`) }
new Watcher(render)
new Watcher(render2)

setTimeout(() => {
  data.a = '修改了a'
}, 2000)
// setTimeout(() => {
//   data.b = '修改了b'
// }, 4000)