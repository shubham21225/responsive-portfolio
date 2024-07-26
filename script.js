

var menu = document.querySelector("#menu-icon")
var sidebar = document.querySelector("#sidebar-menu")
var cancelIcon = document.querySelector("#sidebar-menu i")
let det = 1;

menu.addEventListener("click",function(){
    if(det== 1){
         sidebar.style.display = "inline";
         det=0
    }

    
})

cancelIcon.addEventListener("click",function(){
     if(det== 0){
          sidebar.style.display = "none";
          det=1
     }

 })

// const scroll = new LocomotiveScroll({
//      el: document.querySelector('#main'),
//      smooth: true
//  });


