var oUl = document.getElementById('title');
var oCon = document.getElementById('content');
var aLi = oUl.getElementsByTagName('li');
var aDiv = oCon.getElementsByTagName('div');
for(var i=0;i<aLi.length;i++){
    aLi[i].index=i;
    aLi[i].onclick = function(){
        for(var i=0;i<aLi.length;i++){
            aLi[i].className='';
            aDiv[i].className='';
        }
        this.className = 'selected';
        aDiv[this.index].className='selected';
    };
}
// console.log(aDiv);
// console.log(aLi);
// console.log(aDiv);