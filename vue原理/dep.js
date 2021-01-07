// 观察者
class Dep {

  constructor() {
    this.subs = []
  }

  depend() {
    Dep.Target && this.subs.push(Dep.Target)
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

Dep.Target = null

let dep = new Dep()

// 设置全局依赖
Dep.Target = {
  update() {
    console.log('hello update')
  }
}

// 依赖收集
dep.depend()

// 派发更新通知
dep.notify()