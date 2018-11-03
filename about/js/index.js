var oHtml=document.getElementById('html');
let arr = new Array();
console.log(arr.concat());
setInterval(function () {
    if(oHtml.offsetWidth>=oHtml.parentNode.offsetWidth){
        oHtml.style.width = 0;
    }
    oHtml.style.width=oHtml.offsetWidth + 10 +'px';
},100);