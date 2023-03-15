// $(document).ready(function(){
//     slickSliders()
// })




// function slickSliders(){

//     $('.gallery-slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         Infinity: true,
//         arrows: false,
//         dots: false,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     })
// }

const images = ["../images/background-1.jpg", "../images/background-2.jpg", "../images/background-3.jpg"];
const timeInterval = 5000;
let index = 0;

function changeBackground() {
    const main = document.querySelector(".main")
    main.style.backgroundimage =  `url(${images[index]})`;
    index = (index + 1) % images.length;
    console.log("raffay")
    console.log(main.style)
}

changeBackground(); 

setInterval(changeBackground, timeInterval); 




