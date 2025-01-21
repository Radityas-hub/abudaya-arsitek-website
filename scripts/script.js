const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slidess = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlidess = slidess.length;
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const overlay = document.querySelector('.overlay');
const navLink = document.querySelectorAll('li');

$(document).ready(function () {
  $(window).scroll(function () {
      // scroll-up button show/hide script
      if (this.scrollY > 10) {
          $(".scroll-up-btn").addClass("show");
      } else {
          $(".scroll-up-btn").removeClass("show");
      }
  });
})

    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
      overlay.classList.add("show");
}
    overlay.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
      overlay.classList.remove("show");
}
      navLink.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
      overlay.classList.remove("show");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
      overlay.classList.remove("show");
    }
   
const homeSection = document.querySelector('.header-section');

const homeObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) {
      navbar.classList.add("sticky");
  }
  else {
    navbar.classList.remove("sticky")
  }
});

// Tambahkan home section ke observer
homeObserver.observe(homeSection);


$(document).ready(function () {
  var sectionIds = $("a.nav-link");
  $(document).scroll(function () {
    sectionIds.each(function () {
      var container = $(this).attr("href");
      var containerOffset = $(container).offset().top;
      var containerHeight = $(container).outerHeight();
      var containerBottom = containerOffset + containerHeight;
      var scrollPosition = $(document).scrollTop();
      if (
        scrollPosition < containerBottom - 350 &&
        scrollPosition >= containerOffset - 350
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});