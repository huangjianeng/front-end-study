class Car {
    constructor(name,num){
        this.name = name;
        this.num = num
    }
}

class Kuaiche extends Car{
    constructor(name,num){
        super(name,num)
        this.car.price = 1
    }
}

class Zhuanche extends Car{
    constructor(name,num){
        super(name,num)
        this.price = 2
    }
}

class Distance {
    constructor(car){
        this.car = car
    }

    start(){
        console.log(this.car.name + '牌照' + this.car.num)
    }

    end(){
        console.log('路费'+this.car.price*5)
    }
}

let car1 = new Zhuanche('bwm','123');
let distance1 = new Distance(car1)
distance1.start();
distance1.end();