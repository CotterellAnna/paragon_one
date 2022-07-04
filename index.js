const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".mobile")

hamburger.addEventListener("click", function(){
    if(menu.style.display=="flex"){
        menu.style.display="none";
        hamburger.style.borderRadius ="0px";
    }else{
        menu.style.display="flex";
        hamburger.style.borderRadius ="50%";
    }
})