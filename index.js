




// toggle icon nav bar//

let menuicon = document.getElementById('menuicon');
let navbar = document.querySelector('.navbar');

menuicon.onclick= () =>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}

// to activate header nav a when scrolling 

window.addEventListener('scroll', function() {
    var headerNavLinks = document.querySelectorAll('header nav a');
  
    headerNavLinks.forEach(function(link) {
      var section = document.querySelector(link.getAttribute('href'));
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      var scrollPosition = window.pageYOffset;
  
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });


//  sticky nav bar


    let header = document.querySelector('header')
    header.classlist.toggle('sticky', window.scrollY > 100)  //go to css code and check .header sticky



     
// remove toggle icon and navbar when click navbar link (scroll)


menuicon.classList.remove('bx-x');
navbar.classList.remove('active')

  });
 
  



  // scroll reveal 


  ScrollReveal({
    reset:true,
distance:'80px',
duration:2000,
delay:200,

});

ScrollReveal().reveal('.homecontent, .heading', {origin: 'top'});
 
ScrollReveal().reveal('.homeimg, .servicescontainer, .btn, .portfoliobox, .contact', {origin: 'bottom'});


ScrollReveal().reveal('.homecontent h1, .aboutimg', {origin: 'left'});

ScrollReveal().reveal('.homecontent p, .aboutcontent', {origin: 'right'});




// typed js


const typed = new Typed('.multipletext', {
    strings: ['Frontend Developer', 'New Skill Soon' ], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



























































































































