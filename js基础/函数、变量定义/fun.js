// 一.函数声明语法定义：function sum(num1,num2){return num1+num2}
// 二.函数表达式定义函数：
// 1.var sum = function(num1,num2){return num1+num2};
// 2.var sum = new Function("num1","num2","return num1+num2");
// Function构造函数可以接受任意数量的参数，但最后一个参数始终被看成函数体，注意函数表达式定义函数的方法与声明其他变量时一样需要加分号。
var msg = ''
for (var i=0; i<5; i++)
 { 
    msg='hello'+i*2+i; 
    // console.log(i)
 }
 console.log(i)
 console.log(msg)