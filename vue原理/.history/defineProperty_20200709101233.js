let data = {}

Object.defineProperty(data, 'a', {
  enumerable: true,
  configurable: false,
  get() {
    console.log('获取a')
    return value
  },
  set(v) {
    console.log('设置a：', v)
    value = v
  }
})

data.a = 2
// data.a

delete data.a
console.log(data)