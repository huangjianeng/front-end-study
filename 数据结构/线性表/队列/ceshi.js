/**
 * hotPotato() 模拟击鼓传花游戏
 * @param {Array} elementList 需传入的参与游戏的人员列表
 * @returns {Object} 返回信息：淘汰者和胜利者
 */

 import Queue from './queue'
 console.log(Queue)
function hotPotato (elementList) {
    // 实例化队列，将元素放入队列
    let queue = new Queue()
    elementList.forEach((value) => {
      queue.enqueue(value)
    })
  
    // 淘汰的人
    let elimitatedList = []
  
    // 开始游戏，直到队列中剩余1人
    while (queue.size() > 1) {
      // 为了让游戏更加有意思，每次停止的位置进行随机处理
      for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        // 取出头部第一个元素，然后执行插入
        queue.enqueue(queue.dequeue())
      }
      // 此时拥有花的人，淘汰
      elimitatedList.push(queue.dequeue())
    }
  
    // 返回
    return {
      elimitatedList,
      winner: queue.dequeue()
    }
  }
  
  let elementList = [
    '孙悟空',
    '唐僧',
    '如来佛祖',
    '玉帝',
    '王母'
  ]
  
  // 调用函数，传入elementList，同时约定第6次时，拥有花的小伙伴被淘汰...
  let result = hotPotato(elementList, 6)
  console.log(result)
  
  result.elimitatedList.forEach((name) => {
    console.log(`${name}被淘汰了...`)
  })
  
  console.log(`${result.winner}胜利了...`)