const debounce = (fnName, wait) => {
    console.log(fnName)
    console.log(this)
    let timeout = null;
    return function () {
        console.log(this)
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            this[fnName]();
        }, wait);
    };
}
export {
    debounce
}