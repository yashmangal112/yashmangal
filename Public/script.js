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


// Script for scrolling section screen 

$("a").click(function(){
    var pageId = $(this).attr("data-max-width");
    $("html, body").animate({ scrollTop: $("#"+pageId).offset().top }, 850);
});



