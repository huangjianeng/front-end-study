
/**
 *作者：米传帅
 * 自动点击“继续播放”
 *注：有问题的，自己调试。
 */
var t1 = setInterval(function () {
    var i = $(".layui-layer").find(".layui-layer-btn0");
    if (i.length != 0) {
        console.log($(".layui-layer").attr("id"));
        $(i).click();
    }
}, 1000);
/**
 *作者：米传帅
 *自动播放下一集
  *注：有问题的，自己调试。
 */
var myVideo = document.getElementById("studymovie");
myVideo.addEventListener('ended', function () {
    setTimeout(function () {
            var onVideo = $(".on").parent("li").next().find("a")
            var num = onVideo.attr("data-lessonnum");
            onVideo.click();
            console.log("第"+(num-1)+"章播放结束");
            console.log("第"+num+"章开始播放！");
        },
        1000)
});