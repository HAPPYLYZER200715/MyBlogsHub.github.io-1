// 1. Mobile Menu Toggle
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

// 2. Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 1200);
});

// 3. Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('mbh-theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});
if(localStorage.getItem('mbh-theme') === 'dark') document.body.classList.add('dark-theme');

// 4. Reveal on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 5. Shrink Nav on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-wrap');
    if (window.scrollY > 60) {
        nav.style.padding = '8px 30px';
        nav.style.width = '90%';
    } else {
        nav.style.padding = '12px 35px';
        nav.style.width = 'min(95%, 1250px)';
    }
});
