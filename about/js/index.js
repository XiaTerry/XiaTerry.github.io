var oHtml=document.getElementById('html');
setInterval(function () {
    if(oHtml.offsetWidth>=oHtml.parentNode.offsetWidth){
        oHtml.style.width = 0;
    }
    oHtml.style.width=oHtml.offsetWidth + 10 +'px';
},100);