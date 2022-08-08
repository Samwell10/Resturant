const popup = document.querySelector(".nav");
const buttonopen = document.querySelector(".fa-bars");
const buttonclose = document.querySelector(".fa-xmark");
buttonopen.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.display = "block";
});
buttonclose.addEventListener('click', (e)=>{
    e.preventDefault();
    popup.style.display ="none"
});
//for the special order
const breakfast = document.querySelector(".breakfast-button");
const breakfast_display = document.querySelector(".order-image-display");
const breakfast_label = document.querySelector(".breakfast-label");
const lunch = document.querySelector(".lunch-button");
const lunch_display = document.querySelector(".order-image-display2");
const lunch_label = document.querySelector(".lunch-label");
const dinner = document.querySelector(".dinner-button");
const dinner_display = document.querySelector(".order-image-display3");
const dinner_label = document.querySelector(".dinner-label")
const close = document.querySelector(".close");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");
breakfast.addEventListener('click',(e)=>{
    e.preventDefault();
    breakfast_display.style.display="grid";
    breakfast_label.style.display = "flex";
})
lunch.addEventListener('click',(e)=>{
    e.preventDefault();
    lunch_display.style.display="grid";
    lunch_label.style.display = "flex";
})
dinner.addEventListener('click',(e)=>{
    e.preventDefault();
    dinner_display.style.display="grid";
    dinner_label.style.display = "flex"
})
close.addEventListener('click',(e)=>{
    breakfast_display.style.display="none";
    breakfast_label.style.display = "none";
})
close2.addEventListener('click',(e)=>{
    lunch_display.style.display="none";
    lunch_label.style.display = "none";
})
close3.addEventListener('click',(e)=>{
    dinner_display.style.display="none";
    dinner_label.style.display = "none";
})
//for slider img
const slider_img = document.querySelector(".slider-img");
const images = ["intro-background3.JPG","intro-background2.jpg","slider.jpg"];
var i = 0; //current image index

function prev(){
    if(i<=0) i=images.length;
    i--;
    return setImg();
}

function next(){
    if(i>=images.length - 1) i= -1;
    i++;
    return setImg();
}

function setImg(){
        return slider_img.setAttribute("src", "/" + images[i]);
}
//image slider end
//for testimonial
function scrollRight(){
    var right = document.querySelector(".scroll-image");
    right.scrollBy(350,0);
} 
function scrollLeft(){
    var Left = document.querySelector(".scroll-image");
    Left.scrollBy(-350,0);
} 

