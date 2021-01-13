class HD{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected';
    constructor(excutor){
        this.status = HD.PENDING;
        this.value = null;
        this.callBack = []  //处理构造函数的里面的异步函数
        try{
            excutor(
                this.resolve.bind(this),
                this.reject.bind(this)
            )
        } catch(error){
            this.reject(error)
        }

    }
    resolve(value){
        // console.log(this)
        if(this.status === HD.PENDING){
            this.status = HD.FULFILLED;
            this.value = value
            setTimeout(()=>{
                this.callBack.forEach(callBack=>{
                    callBack.onFulfilled(value)
                })
             })
        }
    }
    reject(value){
        if(this.status === HD.PENDING){
            this.status = HD.REJECTED;
            this.value = value
            setTimeout(()=>{
                this.callBack.forEach(callBack=>{
                    callBack.onRejected(error)
                })
            })
        }
    }
    then(onFulfilled,onRejected){
        if(typeof onFulfilled != 'function'){
            onFulfilled = () => this.value  //then的穿透
        }
        if(typeof onRejected != 'function'){
            onRejected = () => this.value
        }

  
        return new HD((resolve,reject)=>{
            if(this.status == HD.PENDING){
                this.callBack.push({
                    onFulfilled:val=>{
                        this.parse(
                            onFulfilled(val),
                            resolve,
                            reject
                        )
                    },
                    onRejected:val=>{
                        this.parse(
                            onRejected(val),
                            resolve,
                            reject
                        )
                }})
            }
            if(this.status == HD.FULFILLED){
                setTimeout(()=>{
                    this.parse(
                        onFulfilled(this.value),
                        resolve,
                        reject
                    )
                })
            }
            if(this.status == HD.REJECTED){
                setTimeout(()=>{
                    this.parse(
                        onRejected(this.value),
                        resolve,
                        reject
                    )
                })
            }
        })
    }
    parse(res,resolve,reject){
        try {
            if(res instanceof HD){
                res.then(resolve,reject)
            }else{
                resolve(res)
            }
        } catch (error) {
            reject(error)
        }
    }
}