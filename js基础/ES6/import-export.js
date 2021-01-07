// require/exports 是运行时动态加载，import/export 是静态编译
// let na = 1
// export na  错误

// 第一种方式
export var name = "liuyang"    
或
var boy = 'liuyang'
export {boy}
或
var boy = 'liuyang'
var gril = 'guo'
export {boy, girl}

// import { boy, girl  } from ''   import { } 是一个语法糖,不是引入对象的意思
// import {boy as newBoy} from 'module';
// import * as moduleA from 'module';



// 第二种方式

// let a = 1
//  正确  export default a 
//  错误  export default let a = 1


// import { default as foo } from 'module';
// import a from 'module'  'a'可以用任意值代替


