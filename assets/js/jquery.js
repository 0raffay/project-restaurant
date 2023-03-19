// $(document).ready(function(){
//     slicksliders()
// })

// function slicksliders() {
//     $('.main-slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         arrows: false,
//         dots: true,
//         Infinity: true,
//     })
//     console.log('raffay')
// }

// $(document).ready(function() {
//     // Array of image URLs  
//     var images = ["../images/desserts-4-min.jpg", "../images/beverages-3-min.jpg",  "../images/lunch-4-min.jpg", "../images/snacks-2-min.jpg", "../images/desserts-5-min.jpg",];
  
//     // Set initial background image
//     $('.main').css('background', 'url(' + images[0] + ')');
  
//     // Set interval to change background image
//     var interval = setInterval(function() {
//       var randomIndex = Math.floor(Math.random() * images.length);
//       $('.main').fadeOut(500, function() {
//         $(this).css('background', 'url(' + images[randomIndex] + ')').fadeIn('fast');
//       });
//     }, 1000); // Change image every 5 seconds (5000ms)
  
//     // Stop interval on hover
//     $('.main').hover(function() {
//       clearInterval(interval);
//     }, function() {
//       interval = setInterval(function() {
//         var randomIndex = Math.floor(Math.random() * images.length);
//         $('.main').fadeOut("fast", function() {
//           $(this).css('background', 'url(' + images[randomIndex] + ')').fadeIn('fast');
//         });
//       }, 1000);
//     });
//   });


