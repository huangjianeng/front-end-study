function person (name){
    this.name = 'person name'
}

person.prototype.sing = function(){
    console.log( '我叫' + this.name )
}

function myNew(fn){
    const obj = {};
    obj.__proto__ = fn.prototype;
    // fn.apply(obj,[]);
    return obj;
}

let oo = {
    aa:'222',
    bb:{
        cc:'dd'
    }
}
let aa = String(oo)
console.log(aa)


let zs = new person(); 






