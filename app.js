'use strict'
// console.log("hello from js")
let header=document.querySelector(".header")
let button=document.querySelector(".go-up")

function scroll(){
  if(window.scrollY==0){
    header.style.backgroundColor="#ececec"
    header.style.boxShadow="none"
     button.style.display="none"
     
  }
}
scroll()
window.onscroll=function(){
  if(window.scrollY==0){
    header.style.backgroundColor="#ececec"
     header.style.boxShadow="none"
   button.style.display="none"
    
  }else if(window.scrollY>=120){
      header.style.backgroundColor="white"
      header.style.boxShadow="0 0 15px #ddd"
      button.style.display="block"
  }
}

button.onclick=function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"


  })
}