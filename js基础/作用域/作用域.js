var a = 10;
var o = {
     a:11,
     b:{
         a:111,
         fn:function(){
              console.log(this)
              console.log(a);
         }
     }
}
o.b.fn();