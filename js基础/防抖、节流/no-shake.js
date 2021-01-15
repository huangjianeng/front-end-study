// 防抖（debounce）   停止变化几秒后，再执行后续操作   例如；（模糊查询）
// 节流（throttle）   鼠标连续不断地触发某事件（如点击），只在单位时间内只触发一次  
//  节流也可以  点击 置灰  成功再  恢复正常



function debounce(func, wait) {
    let timeout;
    return function() {
      let context = this;
      let args = arguments;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }