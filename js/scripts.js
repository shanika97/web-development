// Language Switcher Functionality
const languageSwitcher = document.getElementById("languageSwitcher");

languageSwitcher.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    console.log(`Language switched to: ${selectedLanguage}`);
    // You can add more functionality to dynamically load content in the selected language.
});

// Hamburger Menu (Responsive Navbar)
document.querySelector(".navbar-toggler").addEventListener("click", () => {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("show");
});

// // scripts.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });






  // const swiper = new Swiper('.swiper-container', {
  //   loop: true,
  //   navigation: {
  //     nextEl: '.testimonial-next',
  //     prevEl: '.testimonial-prev',
  //   },
  // });
  
  const swiper = new Swiper('.swiper-container', {
    loop: true, 
    slidesPerView: 1, 
    spaceBetween: 10, 
    navigation: {
      nextEl: '.testimonial-next', 
      prevEl: '.testimonial-prev', 
    },
  });
  
  

    