let arr = []
for(i=0;i<10;i++){
    arr.push(10-i)
}
let changeFuntion  = (arr) => {
    let _index,temp
    for(i=0;i<arr.length -1;i++){
        _index = i
        for(j=i+1;j<arr.length;j++){  
            if(arr[j] < arr[_index]){   //获取最新的_index
                _index = j 
            }
        }
        temp = arr[i]  
        arr[i] = arr[_index]
        arr[_index] = temp
    }
}
console.log(arr)
changeFuntion(arr)
console.log(arr)