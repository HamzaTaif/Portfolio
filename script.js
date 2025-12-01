// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for internal links (#about, #skills, #contact)
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Automatically set the current year in the footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // 3. Add a shadow to the header when scrolling (looks more professional)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // 4. Create a "Back to Top" button dynamically
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerText = '↑';
    backToTopBtn.setAttribute('id', 'back-to-top');
    document.body.appendChild(backToTopBtn);

    // Show/hide the button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
