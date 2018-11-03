var oNav = document.getElementById('nav');
var aLi = oNav.getElementsByTagName('li');
var oImg = document.getElementById('imgs');
var aDiv = oImg.getElementsByTagName('div');
var aIndex = 0;
var timer;
for(var i=0;i<aLi.length;i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function () {
        aIndex=this.index;
        chang();
    }
}
function chang(){
    for(var j=0;j<aLi.length;j++){
        aLi[j].className = '';
        aDiv[j].className = '';
    }
    aLi[aIndex].className ='selected';
    aDiv[aIndex].className = 'selected';
}
function playImg(){
    timer = setInterval(function () {
        aIndex++;
        if(aIndex==aLi.length){
            aIndex=0;
        }
        chang();
    }, 1000);
}
playImg();
oImg.onmouseover = function() {
    clearInterval(timer);
};
oImg.onmouseout = function () {
    playImg();
};