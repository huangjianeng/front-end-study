// 队列  先进先出    排队模式  一个出口，一个入口

/**
 * class Queue 队列类
 * 特点：先进先出
 */
class Queue {
    construcor () {
      // 存储数据
      this.items = {}
      // 队列头部元素索引
      this.lowestCount = 0
      // 队列尾部元素索引
      this.count = 0
    }
  
    /**
     * enqueue() 添加元素到队列 - 先进先出
     * @param {*} element 添加到队列的元素
     */
    enqueue (elemenet) {
      console.log(elemenet)
      this.items[this.count] = element
      this.count++
    }
  
    /**
     * dequeue() 移除队列头部元素 - 先进先出
     * @returns {*} result 返回头部元素
     */
    dequeue () {
      if (this.isEmpty()) {
        return undefined
      }
      let result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.lowestCount++
      return result
    }
  
    /**
     * peek() 返回队列头部元素
     * @returns {*}
     */
    peek () {
      if (this.isEmpty()) {
        return undefined
      }
      return this.items[this.lowestCount]
    }
  
    /**
     * isEmpty() 判断队列是否为空
     * @returns {Boolean}
     */
    isEmpty () {
      return this.count === this.lowestCount
    }
  
    /**
     * size() 队列长度
     * @returns {Number}
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
     * toString() 返回队列的字符串结构
     * @returns {String}
     */
    toString () {
      if (this.isEmpty()) {
        return ''
      }
      let queueStr = `${this.items[this.lowestCount]}`
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        queueStr = `${queueStr},${this.items[i]}`
      }
      return queueStr
    }
  }


  // 实例化队列
const queue = new Queue()

// 判断队列是否为空
console.log(queue.isEmpty()) // true

// 向队列中添加元素
queue.enqueue('John')
queue.enqueue('Jack')

console.log(queue.toString()) // John,Jack

queue.enqueue('Camila')

console.log(queue.toString()) // John,Jack

console.log(queue.size()) // 3

console.log(queue.isEmpty()) // false