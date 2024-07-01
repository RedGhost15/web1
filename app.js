const header = document.querySelector("header");
const headerA = document.querySelector(".headerA")
const headerA1 = document.querySelector(".headerA1")
const headerA2 = document.querySelector(".headerA2")
const headerA3 = document.querySelector(".headerA3")
const headerA4 = document.querySelector(".headerA4")


window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 600){
        header.classList.add("active")
        headerA.classList.add("activeA")
        headerA1.classList.add("activeA")
        headerA2.classList.add("activeA")
        headerA3.classList.add("activeA")
        headerA4.classList.add("activeA")
    }else{
        header.classList.remove("active")
        headerA.classList.remove("activeA")
        headerA1.classList.remove("activeA")
        headerA2.classList.remove("activeA")
        headerA3.classList.remove("activeA")
        headerA4.classList.remove("activeA")
    }
    
}