//  冒泡排序   时间复杂度   O(n*n)


let arr = [1,22,3,5,55,6,2]
let arr1 = [4,3,2,1]
let arr2 = [4,3,2,1]
let arr3 = []

for(i=0;i<5000;i++){
    arr3.push(5000-i)
    // arr3.push(parseInt(Math.random()*10000))
}
let arr4 = [...arr3]
// console.log(arr3)
// let arr3 = 
// 第一个循环是遍历的次数
// 第二个循环相邻的两个数比大小
let bubbling = (arr)=>{
    console.time('冒泡排序')
    for(let i = 0; i < arr.length -1 ; i++ ){
        for(let j = 0; j < arr.length -1 -i ; j++ ){
            if(arr[j] >arr[j+1]){
                let min =  arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = min
            }
        }
       
    }
    console.timeEnd('冒泡排序')
}



let change = (arr)=>{
       // 选择排序
   console.time('选择排序')
   var len = arr.length;
   var minIndex, temp;
   for (var i = 0; i < len - 1; i++) {
       minIndex = i;
       for (var j = i + 1; j < len; j++) {
           if (arr[j] < arr[minIndex]) {    // 寻找最小的数
               minIndex = j;                // 将最小数的索引保存
           }
       }
       temp = arr[i];
       arr[i] = arr[minIndex];
       arr[minIndex] = temp;
   }
  console.timeEnd('选择排序')
}

let QuickSort =  (arr) => {
    console.timeEnd('快速')

    if (arr.length <= 1) return arr
    let middle = Math.floor(arr.length / 2)
    let left = []
    let right = []
    let num = arr.splice(middle, 1)[0]
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < num) {
        left.push(arr[i])
      }
      if (arr[i] > num) {
        right.push(arr[i])
      }
    }
    return QuickSort(left).concat(num, QuickSort(right))
    console.timeEnd('快速')

  }


// bubbling(arr3)
// change(arr2)


let selectMethod = (arr) => {
    let _index,temp
    for(let i = 0 ; i < arr.length -1 ; i++){
        _index = i
        for(let j = i + 1; j < arr.length ; j++){
            if(arr[j] < arr[_index]){
                _index = j
            }
        }
        temp = arr[i]
        arr[i] = arr[_index]
        arr[_index] = temp
        console.log(arr)
    }
}
// console.log(arr2)
selectMethod(arr2)
// console.log(arr2)