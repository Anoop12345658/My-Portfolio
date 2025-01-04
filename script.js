let dayNight = document.querySelector(".dayNight");
let isDark = false;

function createWave(x, y, isDarkMode) {
    const container = document.getElementById('wave-container');
    const wave = document.createElement('div');
    wave.className = `wave ${isDarkMode ? 'wave-dark' : 'wave-light'}`;
    
    // Calculate the distance to the farthest corner
    const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - window.innerWidth, y),
        Math.hypot(x, y - window.innerHeight),
        Math.hypot(x - window.innerWidth, y - window.innerHeight)
    );
    
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    wave.style.width = `${maxDistance * 2}px`;
    wave.style.height = `${maxDistance * 2}px`;
    
    container.appendChild(wave);
    
    setTimeout(() => {
        document.querySelector(".banner").classList.toggle("night");
        document.querySelector(".content").classList.toggle("night");
        document.querySelector(".about").classList.toggle("night");
        document.querySelector(".skills").classList.toggle("night");
        document.querySelector(".resume").classList.toggle("night");
        document.querySelector(".projects").classList.toggle("night");
        document.querySelector(".certifications").classList.toggle("night");
        document.querySelector(".contact").classList.toggle("night");
    }, 150);

    wave.addEventListener('animationend', () => {
        wave.remove();
    });
}

function handleThemeChange(e) {
    const rect = dayNight.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    createWave(x, y, !isDark);
    isDark = !isDark;
}

dayNight.addEventListener("click", handleThemeChange);

let typingEffect = new Typed('#text', {
    strings: [
        "A^50n^50o^50o^50p^100 ^50P^50r^50a^50t^50a^50p^100 ^50S^50i^50n^50g^50h^1000",
        "Web Developer",
        "Designer",
        "Freelancer",
        "Programmer"
    ],
    loop: true,
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 300,
    smartBackspace: false,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true
});

// Navigation indicator
const navLinks = document.querySelectorAll('nav ul li a');
const indicator = document.querySelector('.indicator');
const sections = document.querySelectorAll('section');

function updateIndicator(link) {
    indicator.style.left = `${link.offsetLeft}px`;
    indicator.style.width = `${link.offsetWidth}px`;
}

// Update active link based on scroll position
function setActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // Adjust offset for better detection
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
            updateIndicator(link);
        }
    });
}

// Navigation click handling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initial indicator position
window.addEventListener('load', () => {
    const activeLink = document.querySelector('nav ul li a.active');
    if (activeLink) {
        updateIndicator(activeLink);
    }
});

// Update on scroll
window.addEventListener('scroll', setActiveLink);