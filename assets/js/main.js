

let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");
let imgItem = document.querySelectorAll(".image-item");


let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

function slideToNextImage() {
    startSlider = (startSlider + 100) % endSlider;

    imgItem.forEach((element) => {
        element.style.transform = `translateX(-${startSlider}%)`;
    });
}

let timer = setInterval(slideToNextImage, 7000); // Slide every 6 seconds

leftButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(slideToNextImage, 7000); // Reset timer on button click
    startSlider = (startSlider - 100 + endSlider) % endSlider;

    imgItem.forEach((element) => {
        element.style.transform = `translateX(-${startSlider}%)`;
    });
});

rightButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(slideToNextImage, 7000); // Reset timer on button click
    startSlider = (startSlider + 100) % endSlider;

    imgItem.forEach((element) => {
        element.style.transform = `translateX(-${startSlider}%)`;
    });
});



// ******* SIDEBAR NAVIGATION ********

const sidebarNavEle = document.getElementById("sidebar-container-nav-id")
const sidebarOpenNavEle = document.getElementById("open-nav-sidebar")
const sidebarCloseNavEle = document.getElementById("sidebar-nav-close")

sidebarOpenNavEle.addEventListener("click",()=>{
    sidebarNavEle.classList.toggle("sidebar-show")
})

// function openNav(){
//     document.getElementById("sidebar-container-nav-id").style.transform = `translateX(0%)`;
// }

sidebarCloseNavEle.addEventListener("click",()=>{
    sidebarNavEle.classList.toggle("sidebar-show")
})

// function closeNav(){
//     document.getElementById("sidebar-container-nav-id").style.transform = `translateX(-100%)`;
// }



// *****************Today Deal************************
