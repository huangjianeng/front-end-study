/**
 * class Deque 双端队列
 * 特点：支持先进先出、后进先出
 */
class Deque {
    constructor () {
      this.items = {}
      this.count = 0
      this.lowestCount = 0
    }
  
    /**
     * addFront() 从头部插入
     * @param {*} element 待插入队首的元素
     */
    addFront (element) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    }
  
    /**
     * addBack() 从尾部插入
     * @param {*} element 待插入队尾的元素
     */
    addBack (element) {
      this.items[this.count] = element
      this.count++
    }
  
    /**
     * removeFront() 队首移除元素
     * @returns {*}
     */
    removeFront () {
      if (this.isEmpty()) {
        return undefined
      }
      let result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.lowestCount++
      return result
    }
  
    /**
     * removeBack() 队尾移除元素
     * @returns {*}
     */
    removeBack () {
      if (this.isEmpty()) {
        return undefined
      }
      let result = this.items[this.count -1]
      delete this.items[this.count - 1]
      this.count--
      return result
    }
  
    /**
     * isEmpty() 判断是否为空
     * @returns {Boolean} 是否为空
     */
    isEmpty () {
      return this.count === this.lowestCount
    }
  
    /**
     * size() 返回队列的长度
     * @returns {Number} 队列的长度
     */
    size () {
      return this.count - this.lowestCount
    }
  
    /**
     * clear() 清空队列
     */
    clear () {
      this.items = {}
      this.count = 0
      this.lowestCount = 0
    }
  
    /**
     * peekFront() 获取队首元素
     * @returns {*}
     */
    peekFront () {
      if (this.isEmpty()) {
        return undefined
      }
      return this.items[this.lowestCount]
    }
  
    /**
     * peekBack() 获取队尾元素
     * @returns {*}
     */
    peekBack () {
      if (this.isEmpty()) {
        return undefined
      }
      return this.items[this.count - 1]
    }
  
    /**
     * toString() 展示字符串形式
     * @returns {*}
     */
    toString () {
      if (this.isEmpty()) {
        return ''
      }
      let str = `${this.items[this.lowestCount]}`
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        str = `${str},${this.items[i]}`
      }
      return str
    }
  }


//   适用双端队列
const deque = new Deque()

console.log(deque.isEmpty()) // true

deque.addFront('宋江')
deque.addFront('晁盖')
deque.addBack('吴用')

console.log(deque.size()) // 3
console.log(deque.toString()) // 晁盖,宋江,吴用

console.log(deque.removeFront()) // 晁盖
console.log(deque.removeBack()) // 吴用

console.log(deque.toString()) // 宋江
console.log(deque.size()) // 1