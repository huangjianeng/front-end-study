


const a = [ 
    {id: 1, list: ['红', '黄']}, 
    {id: 2, list: ['骑车', '单车']}, 
    {id: 3, list: ['1500', '1300']}, 
   ] ;
  let queue = [];
  let allList = []
  getQueue({},0,a,queue);
  function getQueue(obj,i,arr,queue){
    let arrLen = arr.length;
    for (let j = 0; j < arr[i].list.length; j++){
      console.log(j)

      if(i < arrLen - 1){
        obj[arr[i].id] = arr[i].list[j];
        // console.log(obj)
        getQueue(obj,i+1,arr,queue);
      } else {
        obj[arr[i].id] = arr[i].list[j]
        queue.push(JSON.parse(JSON.stringify(obj)))
        // console.log(queue)
      }
    }
  }
  console.log(queue)
