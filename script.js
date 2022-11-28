// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
$('.food-slider').slick({
    autoplay:true,
   slidesToShow:3,
   slidesToScroll:1,
   prevArrow:".prev-btn",
   nextArrow:".next-btn",
   responsive:[
      {
         breakpoint:992,
         settings:{
          slidesToShow:2,
         }
      },
      {
       breakpoint:768,
       settings:{
        slidesToShow:1,
       }
    }
   ]

 });

 $('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
 })
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})