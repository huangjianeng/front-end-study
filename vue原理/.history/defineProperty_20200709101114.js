let data = {}
let val = 1

Object.defineProperty(data, 'a', {
  enumerable: true,
  configurable: false,
  get() {
    console.log('获取a')
    return val
  },
  set(value) {
    console.log('设置a：', value)
    val = value
  }
})

data.a = 2
// data.a

delete data.a
console.log(val)
console.log(data.a)