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
  