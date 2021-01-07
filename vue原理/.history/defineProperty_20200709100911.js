let data = {}
let val = 1

Object.defineProperty(data, 'a', {
  enumerable: true,
  configurable: true,
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
data.a

delete data.a

console.log(data.a)