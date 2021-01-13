var xhr = new XMLHttpRequest();
console.log(xhr.readyState)
xhr.onreadystatechange = function(){
    console.log('------')
    console.log('readyState:' + xhr.readyState)
    console.log('ResponseHeaders:' + xhr.getAllResponseHeaders())
    console.log('ResponseText:' + xhr.responseText.length)
    console.log('------')
}
xhr.open('get','/')
xhr.send(null)

