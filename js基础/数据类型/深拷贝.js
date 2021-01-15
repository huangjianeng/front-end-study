let obj = {
    a:1,
    b:'222',
    c:{
        ac:[1,2,3]
    },
    d:function (a){
        return a*2
    },
    e:[{ee:1},{eee:2}]
}


    //使用递归的方式实现数组、对象的深拷贝
function deepClone1(obj) {
    //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(obj) ? [] : {};
    //进行深拷贝的不能为空，并且是对象或者是
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {   //判断对象是否含有该属性（非继承属性）
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone1(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

function deepCopy(data){
    let res 
    if(Array.isArray(data)){
        res = []
        for (let i in data){
            res[i] = deepCopy(data[i])
        }
    }else if(Object.prototype.toString.call(date) === '[object Object]'){
        res = {}
        for (let i in data){
            res[i] = deepCopy(data[i])
        }
    }else{
         res = data
    }
    return res
}


let obj = {};
function deepClone2(){
    
}

let a = 1;
let b = 2;
let c = a+b;
c

