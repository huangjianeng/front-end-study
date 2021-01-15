class HD{
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected';
    constructor(executor){
        this.status = HD.PENDING;
        this.value = null;
        this.callBack = []  //处理构造函数的里面的异步函数
        try{
            executor(
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
                    callBack.onRejected(value)
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
    static resolve(value){
       return new HD((resolve,reject)=>{
            if(value instanceof HD){
                value.then(resolve,reject)
            }else{
                resolve(value)
            }
        })
    }
    static reject(value){
        new HD((resolve)=>{
            reject(value)
        })
    }
    static all(promises){
        return new HD((resolve,reject)=>{
            let resolves = []
            promises.forEach(promise=>{
                promise.then(
                    value=>{
                        resolves.push(value);
                        if(resolves.length == promises.length){
                            resolve(resolves)
                        }
                    },
                    reason=>{
                        reject(reason)
                    }
                )
            })
        })
    }
    static race(promises){
        return new HD((resolve,reject)=>{
            promises.forEach(promise=>{
                promise.then(
                    value=>{
                        resolve(value)
                    },
                    reason=>{
                        reject(reason)
                    }
                )
            })
        })
    }
}