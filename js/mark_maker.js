
// header
const selectText = document.querySelectorAll('.banner>.banner_text>div')
const selectImg = document.querySelectorAll('.banner>.banner_box>div')
console.log(selectImg)

selectText.forEach(function(item,idx){
selectText[idx].addEventListener('click',function(){
for(i=0; i<selectImg.length; i++){
selectImg[i].style.opacity=0;
selectImg[i].style.zIndex=-1;
}
selectImg[idx].style.opacity=1;
selectImg[idx].style.zIndex=1;
selectImg[idx].style.transition='1s';
})
})

AOS.init();