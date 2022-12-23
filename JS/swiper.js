let swiper1 = new Swiper('.hero-slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
  
  });

  let swiper2 = new Swiper('.notice-board', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
  
  });

  let swiper3 = new Swiper(".testimonial-desktop", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  let swiper4 = new Swiper(".mobile-testimonial", {
    effect: "cards",
    grabCursor: true,
  });

  let aboutUsHero = new Swiper('.about-us-hero-slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
  
  });