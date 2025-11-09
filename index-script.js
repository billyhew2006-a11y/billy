// This file is now separate. All the JavaScript logic goes here.
document.addEventListener('DOMContentLoaded', () => {
        
    // --- Color Definitions ---
    const matildaColor = [0, 0, 0]; // Black
    const frozenColor = [14, 165, 233]; // Richer Blue ('sky-500')
    const matildaTextColor = [229, 231, 235]; // Light Slate ('text-slate-200')
    // frozenTextColor is no longer needed, handled by CSS

    // --- UI Elements ---
    const pageBody = document.body;
    const sections = document.querySelectorAll('section[id]');
    const matildaSection = document.getElementById('matilda');
    const frozenSection = document.getElementById('frozen');

    // --- Global State ---
    let currentActiveSection = 'matilda'; // Keep track of which section is visible

    // --- Helper function for color interpolation ---
    function lerp(start, end, progress) {
        return start + (end - start) * progress;
    }
    function lerpColor(c1, c2, progress) {
        const r = Math.round(lerp(c1[0], c2[0], progress));
        const g = Math.round(lerp(c1[1], c2[1], progress));
        const b = Math.round(lerp(c1[2], c2[2], progress));
        return `rgb(${r}, ${g}, ${b})`;
    }

    // --- 1. Background Fade on Scroll ---
    function handleScrollFade() {
         const scrollY = window.scrollY;
         
         // Define the start and end points for the fade
         const fadeStart = matildaSection.offsetTop + (matildaSection.offsetHeight * 0.40); // Start fade 40% into Matilda section
         const fadeEnd = frozenSection.offsetTop - (window.innerHeight * 0.5);   // End fade when Frozen section top is at 50% of viewport
         
         // Calculate progress (0.0 to 1.0)
         let progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
         progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
         
         // Interpolate the background color
         const newBgColor = lerpColor(matildaColor, frozenColor, progress);
         pageBody.style.backgroundColor = newBgColor;
         
         // *** FIX: REMOVED the global text color fade. ***
         // This lets the CSS classes (force-dark-text, etc.) do their job.
         
         // Also update the nav link colors
         updateNavColors();
    }

    // --- 2. Arrival Emphasis (Pulse) ---
    // This finds what section is active
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% of the section must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const heading = entry.target.querySelector('h2, h1');
                if (heading) {
                    heading.classList.add('pulse-emphasis');
                    setTimeout(() => heading.classList.remove('pulse-emphasis'), 500);
                }
                
                // --- NEW: Update the active section ID ---
                currentActiveSection = entry.target.id;
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    
    // --- 3. Update Nav Link Colors ---
    // This makes the nav links adapt as you scroll
    const navLinks = document.querySelectorAll('header nav a');
    
    function updateNavColors() {
        // *** FIX: This function no longer fades. It just sets active/inactive colors. ***
        
        const navColor = `rgb(${matildaTextColor[0]}, ${matildaTextColor[1]}, ${matildaTextColor[2]})`; // Hardcoded light color
        
        navLinks.forEach(link => {
            const linkSection = link.getAttribute('href').substring(1);
            
            // Check if this link is for the *currently active* section
            if (linkSection === currentActiveSection) {
                if (linkSection === 'matilda') {
                    link.style.color = '#c084fc'; // Purple
                } else if (linkSection === 'frozen') {
                    link.style.color = '#60a5fa'; // Frozen Blue (sky-500)
                } else if (linkSection === 'about' || linkSection === 'contact') {
                    link.style.color = '#818cf8'; // Indigo
                } else {
                     link.style.color = navColor; // Default for 'portal'
                }
            } else {
                // This is not the active link, so just make it white
                link.style.color = navColor;
            }
        });
    }
    
    // --- Event Listeners ---
    window.addEventListener('scroll', handleScrollFade);
    
    // Initial calls on load
    handleScrollFade();

});
