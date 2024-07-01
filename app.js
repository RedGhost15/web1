const header = document.querySelector("header");
const headerA = document.querySelector(".headerA")
const headerA1 = document.querySelector(".headerA1")
const headerA2 = document.querySelector(".headerA2")
const headerA3 = document.querySelector(".headerA3")
const headerA4 = document.querySelector(".headerA4")
const hamburgerA = document.querySelector(".hamburger") 
const bar = document.querySelector(".bar")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")

window.onscroll = function(){
    var top = window.scrollY;
    if (top >= 600){
        header.classList.add("active")
        headerA.classList.add("activeA")
        headerA1.classList.add("activeA")
        headerA2.classList.add("activeA")
        headerA3.classList.add("activeA")
        headerA4.classList.add("activeA")
        hamburgerA.classList.add("activeH")
        bar.classList.add("activeH")
        bar1.classList.add("activeH")
        bar2.classList.add("activeH")
    }else{
        header.classList.remove("active")
        headerA.classList.remove("activeA")
        headerA1.classList.remove("activeA")
        headerA2.classList.remove("activeA")
        headerA3.classList.remove("activeA")
        headerA4.classList.remove("activeA")
        hamburgerA.classList.remove("activeH")
        bar.classList.remove("activeH")
        bar1.classList.remove("activeH")
        bar2.classList.remove("activeH")
    } 
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
