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

  Object.defineProperty(target, key, {
    get() {
      console.log('设置', key)
      return value
    },
    set(newVal) {
      if(newVal !== value) {
        console.log(`设置${key}为${newVal}`)
        value = observer(newVal)
      }
    }
  })
}

// let data = {
//   a: 1,
//   b: 2
// }

// observer(data)

// data.a = 2
// data.b = 3

// let arr = [1,2,3]

// observer(arr)

// arr.push(4)

// console.log(arr)