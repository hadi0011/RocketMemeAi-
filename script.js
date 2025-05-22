document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update CSS variable for --neon-cyan-rgb for dashed borders if needed
    // Example: Get computed style for --neon-cyan, parse it, and set an RGB version
    // This is a bit complex if not strictly needed, so I'll keep it simple.
    // For the dashed border, a semi-transparent fixed color might be easier.
    // The current CSS uses `rgba(var(--neon-cyan-rgb,0,255,255), 0.3)`
    // which will default to 0,255,255 (cyan) if --neon-cyan-rgb is not set.
    // This is fine.

    // Add a subtle parallax effect to the hero background if desired
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            // Adjust background position for parallax effect
            // hero.style.backgroundPositionY = scrollPosition * 0.4 + 'px'; 
            // This can be performance intensive and might look jittery.
            // Prefer CSS fixed background attachment or a more robust library for complex parallax.
            // For now, keeping it simple.
        });
    }

    // Example: Animate elements on scroll (simple version)
    const animatedElements = document.querySelectorAll('.floating-element, .character-image, .feature-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // You could add more complex animations here
            } else {
                // Optionally, reset animation if it should replay when scrolling back
                // entry.target.style.opacity = '0';
                // entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        // Initial state for animation
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Override initial styles for hero floating coins so they are visible from start
    const heroFloatingCoins = document.querySelectorAll('#hero .floating-element');
     heroFloatingCoins.forEach(el => {
        el.style.opacity = '0.8'; // Match CSS opacity
        el.style.transform = 'translateY(0)'; // No initial offset
     });


    // For buttons that should pulse their specific color
    const pulsingButtons = document.querySelectorAll('.pulsing-element.btn');
    pulsingButtons.forEach(button => {
        if (button.classList.contains('btn-primary')) { // Pink button
            button.style.setProperty('--pulse-color', 'var(--neon-pink)');
        } else if (button.classList.contains('btn-secondary')) { // Cyan button
             button.style.setProperty('--pulse-color', 'var(--neon-cyan)');
        }
        // Add more conditions for other button types if needed
    });

});

