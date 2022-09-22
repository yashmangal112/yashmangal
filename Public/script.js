console.log("js workmode on");

$(document).ready(function(){
    $(window).scroll(function(){
         if(this.scrollY > 80){
            $('.navbar').addClass("sticky");
         }
         else{
            $('.navbar').removeClass("sticky");
         }
         if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
         }else{
            $('.scroll-up-btn').removeClass("show");
         }
    });
    
});


// Script for submit btn
const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
	this.classList.toggle('running');
}

function addClass() {
	this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);




// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});    

var typed = new Typed(".typing", {
    strings: ["Programmer","Developer","Designer","WebDeveloper","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true

});

var typed = new Typed(".typing-2", {
    strings: ["Programmer","Developer","Designer","WebDeveloper","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true

});


// Script for floating screen 
const section = document.querySelectorAll("section");
const navli = document.querySelectorAll("nav .menu li");

window.onscroll = ()=>{
    var current = "";
    section.forEach((section)=>{
        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop-60) {
            current = section.getAttribute("id");
        }
    });
    navli.forEach((li)=>{
        li.classList.remove("check");
        if (li.classList.contains("current")) {
            li.classList.add("check");
        }
    });
}



