var oNav = document.getElementById('nav');
var aLi = oNav.getElementsByTagName('li');
var oImg = document.getElementById('container');
var aImg = oImg.getElementsByTagName('img');
var oLast = document.getElementById('last');
var oNext = document.getElementById('next');
var iMg = document.getElementById('imgs');
var iNow=0;
var timer;
for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function(){
        iNow = this.index;
       changeImg();
    };
}
oLast.onclick = oNext.onclick = function () {
    if(this===oLast){
        iNow--;
        if(iNow==-1){
            iNow=aLi.length-1;
        }
    }else {
        iNow++;
        if (iNow == aLi.length) {
            iNow = 0;
        }
    }
    changeImg();
};
oNext.onselectstart = oLast.onselectstart = function(){
    return false;
};
oNav.onselectstart = function(){
    return false;
};
play();
iMg.onmouseover = function(){
    clearInterval(timer);
};
iMg.onmouseout = function () {
    play();
};
function play() {
    timer = setInterval(function () {
        oNext.onclick();
    }, 1000);
}
function changeImg(){
    for(var i=0; i<aLi.length; i++){
        aLi[i].className = '';
        aImg[i].className = '';
    }
    aLi[iNow].className = 'nav-selected';
    aImg[iNow].className = 'img-selected';
}