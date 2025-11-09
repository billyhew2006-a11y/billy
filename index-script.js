// This file is now separate. All the JavaScript logic goes here.
document.addEventListener('DOMContentLoaded', () => {
        
    // --- Color Definitions ---
    const matildaColor = [0, 0, 0]; // Black
    const frozenColor = [125, 211, 252]; // Icy Light Blue ('sky-300') - MORE BLUE
    const matildaTextColor = [229, 231, 235]; // Light Slate ('text-slate-200')
    const frozenTextColor = [17, 24, 39]; // Dark Grey ('text-gray-900')

    // --- UI Elements ---
    const pageBody = document.body;
    const matildaSection = document.getElementById('matilda');
    const frozenSection = document.getElementById('frozen');

    // --- Global State ---
    let currentActiveSection = 'matilda'; // Keep track of which section is visible

    // --- Helper function for color interpolation ---
    function lerpColor(start, end, amount) {
        const r = (1 - amount) * start[0] + amount * end[0];
        const g = (1 - amount) * start[1] + amount * end[1];
        const b = (1 - amount) * start[2] + amount * end[2];
        return `rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})`;
    }

    // --- 1. Background Fade on Scroll ---
    function handleScrollFade() {
         if (!matildaSection || !frozenSection) return;
         
         const scrollY = window.scrollY;
         
         // Define the start and end points for the fade
         const fadeStart = matildaSection.offsetTop + (matildaSection.offsetHeight * 0.50); // Start fade 50% into Matilda section
         const fadeEnd = frozenSection.offsetTop;   // End fade right as Frozen section starts
         
         // Calculate progress (0.0 to 1.0)
         let progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
         progress = Math.min(1, Math.max(0, progress)); // Clamp progress between 0 and 1
         
         // Interpolate the background color
         const newBgColor = lerpColor(matildaColor, frozenColor, progress);
         pageBody.style.backgroundColor = newBgColor;
         
         // Interpolate the main text color
         const newTextColor = lerpColor(matildaTextColor, frozenTextColor, progress);
         pageBody.style.color = newTextColor;
         
         // Also update the nav link colors based on progress
         updateNavColors(progress);
    }

    // --- 2. Arrival Emphasis (Pulse) ---
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the section is visible
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
    const matildaLink = document.querySelector('a[href="#matilda"]'); // We no longer need this, but it's ok
    
    function updateNavColors(progress) {
        // progress is 0 (black) to 1 (light blue)
        
        const navColor = `rgb(${matildaTextColor[0]}, ${matildaTextColor[1]}, ${matildaTextColor[2]})`;
        
        navLinks.forEach(link => {
            const linkSection = link.getAttribute('href').substring(1);
            
            // Check if this link is for the *currently active* section
            if (linkSection === currentActiveSection) {
                if (linkSection === 'matilda') {
                    link.style.color = '#c084fc'; // Purple
                } else if (linkSection === 'frozen') {
                    link.style.color = '#60a5fa'; // Frozen Blue (sky-500)
                } else {
                    // This is for 'about' or 'contact' when active
                    link.style.color = '#818cf8'; // Indigo
                }
            } else {
                // This is not the active link, so just make it white
                link.style.color = navColor;
            }
        });
    }
    
    // --- Event Listeners ---
    window.addEventListener('scroll', handleScrollFade);
    
    // Run it once on load to set the initial color
    handleScrollFade();
});
