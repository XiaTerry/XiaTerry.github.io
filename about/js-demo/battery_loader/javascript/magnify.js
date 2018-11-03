var oSmall = document.getElementById('small');
var oDrag = document.getElementById('drag');
var oBig = document.getElementById('big');
var oImg = document.getElementById('img');
console.log(oImg);
oSmall.onmouseover = function(){
    oDrag.style.display = 'block';
    oBig.style.display = 'block';
};
oSmall.onmouseout = function(){
    oDrag.style.display = 'none';
    oBig.style.display = 'none';
};
oSmall.onmousemove = function (ev) {
    ev = ev || window.event;
    var left = ev.clientX - oDrag.offsetWidth/2;
    var top = ev.clientY - oDrag.offsetHeight/2;
    var leftMax = oSmall.offsetWidth-oDrag.offsetWidth;
    var topMax = oSmall.offsetHeight-oDrag.offsetHeight;
    if(left>leftMax){
        left=leftMax;
    }
    if(top>topMax){
        top=topMax;
    }
    if(left<0){
        left=0;
    }
    if(top<0){
        top=0;
    }
    //改变drag的left和top的位置
    oDrag.style.left = left +'px';
    oDrag.style.top = top + 'px';
    //drag移动的百分比
    var percentLeft = oDrag.offsetLeft/leftMax;
    var percentTop = oDrag.offsetTop/topMax;
    //设置大图片的位置。
    oImg.style.left = -percentLeft*(oImg.offsetWidth - oBig.offsetWidth)+'px';
    oImg.style.top = -percentTop*(oImg.offsetHeight - oBig.offsetHeight)+'px';
}