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
