const styleSwitcherToggler=document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click" , () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})


window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        (document.querySelector(".style-switcher").classList.remove("open"));
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");
// console.log(alternateStyles);
function setActiveStyle(color){
    /*  */
    // console.log(color)
    localStorage.setItem("color",color);
    changeColor();  
}

function changeColor(){
    alternateStyles.forEach((style) => {
        if(localStorage.getItem("color")===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled" , "true")
        }
        
    });
}

if(localStorage.getItem("color") !==null){
    changeColor();
}
