// 发布订阅
class Event {
  constructor() {
    this.subs = {};
  }

  // 收集订阅
  on(eventName, fn) {
    this.subs[eventName] ? '' : this.subs[eventName] = []
    this.subs[eventName].push(fn)
  }

  // 派发事件
  emit(eventName, ...args) {
    (this.subs[eventName] || []).forEach(fn => {
      fn(...args)
    });
  }
}

// 创建一个发布订阅者
let event = new Event()

// 订阅事件 console 
event.on('console', (name) => {
  console.log('fn1: ', name)
})
event.on('console', (name) => {
  console.log('fn2: ', name)
})

// 触发事件 console 并且 传递参数
event.emit('console', 'hello console')