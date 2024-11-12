document.querySelectorAll('.dropdown-content a').forEach((item, index) => {
    item.style.setProperty('--item-index', index);
});

const navItem = document.querySelector('.nav-item');
const dropdown = document.querySelector('.dropdown');

navItem.addEventListener('mouseenter', () => {
    navItem.classList.add('active');
});

navItem.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!navItem.matches(':hover')) {
            navItem.classList.remove('active');
        }
    }, 300);
});

dropdown.addEventListener('mouseenter', () => {
    dropdown.classList.add('active');
});

dropdown.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdown.matches(':hover')) {
            dropdown.classList.remove('active');
        }
    }, 300);
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });