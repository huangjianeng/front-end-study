
// 1、MacroTask（宏任务）
// script全部代码、setTimeout、setInterval、I/O、UI Rendering。


// 2、MicroTask（微任务）
// Process.nextTick（Node独有）、
// Promise、Object.observe(废弃)、MutationObserver（具体使用方式查看这里）


// 1、宏任务存放是队列中
// 2、每次执行完宏任务，都需要清空微任务队列



// 执行栈 => 微任务 => 宏任务 => 微任务 => 宏任务 => 微任务
