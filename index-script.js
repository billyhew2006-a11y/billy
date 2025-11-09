<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SDA Productions WA - Matilda Jr. & Frozen KIDS</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* Base styles and animations */
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: 'Inter', sans-serif;
            /* Transition for the background color fade */
            transition: background-color 0.3s ease-out, color 0.3s ease-out;
        }

        /* Animation classes */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fadeInUp {
            animation: fadeInUp 0.7s ease-out both;
        }
        .animate-fadeIn {
            animation: fadeIn 0.8s ease-out both;
        }
        
        /* Custom Pulse for arrival emphasis */
        @keyframes pulseEmphasis {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        .pulse-emphasis {
            animation: pulseEmphasis 0.4s ease-out;
        }
        
        /* Text color overrides for light/dark sections */
        .force-dark-text h1, .force-dark-text h3, .force-dark-text p {
            color: #111827; /* Dark Grey */
        }
        .force-dark-text .text-indigo-400 {
            color: #4f46e5; /* Dark Indigo */
        }
        
        .force-light-text h1, .force-light-text h3, .force-light-text p, .force-light-text span {
            color: #e5e7eb; /* Light Grey */
        }
        .force-light-text .text-purple-400 {
            color: #c084fc; /* Purple */
        }

    </style>

    <!-- 
      THIS IS THE SCRIPT WE WANT:
      It calls the 'index-script.js' file for the background fade.
    -->
    <script type="module" src="index-script.js"></script>

</head>
<body class="bg-black text-slate-200 antialiased">

    <!-- Header -->
    <header class="bg-black/80 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <!-- Logo -->
            <a href="#" class="flex items-center space-x-3">
                <img src="https://raw.githubusercontent.com/apiiela/sdaproductionswa/main/sdalogo.jpeg" 
                     alt="SDA Logo" 
                     class="h-10 w-10 object-contain"
                     onerror="this.src='https://placehold.co/100x100/000000/white?text=SDA'; this.onerror=null;">
                <span class="text-xl font-bold text-slate-100">SDA Productions WA</span>
            </a>
            
            <!-- Navigation Links -->
            <div class="hidden md:flex space-x-6">
                <a href="#matilda" class="text-purple-400 hover:text-purple-300 font-medium">Matilda</a>
                <a href="#frozen" class="text-slate-300 hover:text-indigo-400 font-medium">Frozen</a>
                <a href="#about" class="text-slate-300 hover:text-indigo-400 font-medium">About</a>
                <a href="#contact" class="text-slate-300 hover:text-indigo-400 font-medium">Contact</a>
                <a href="portal.html" class="text-slate-300 hover:text-indigo-400 font-medium">Portal</a>
            </div>
            
            <!-- Mobile Menu Button (optional) -->
            <div class="md:hidden">
                <button class="text-slate-300 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
        </nav>
    </header>

    <!-- Main Content -->
    <main>

        <!-- ===== MATILDA SECTION ===== -->
        <section id="matilda" class="min-h-screen py-24 md:py-32 flex items-center force-light-text">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    
                    <!-- Text Content -->
                    <div class="md:w-1/2 text-center md:text-left animate-fadeInUp">
                        <span class="text-purple-400 font-semibold uppercase tracking-wider">Now Showing!</span>
                        <h1 class="text-4xl md:text-6xl font-bold text-white mt-2 mb-6">Matilda The Musical JR.</h1>
                        <p class="text-lg text-slate-300 mb-8">
                            Get ready to be a little bit naughty! Both shows are running side-by-side this season.
                        </p>
                        
                        <!-- Info Cards -->
                        <div class="space-y-4 mb-10">
                            <div class="flex items-start p-4 bg-gray-900/50 rounded-lg shadow-md border border-slate-700">
                                <svg class="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <div>
                                    <h3 class="font-semibold text-white">Rehearsals</h3>
                                    <p class="text-slate-300">Starting late December.</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Button -->
                        <button disabled class="inline-block bg-gray-600 text-white/70 font-bold py-3 px-8 rounded-lg shadow-xl cursor-not-allowed">
                            Tickets Soon
                        </button>
                    </div>
                    
                    <!-- Image -->
                    <div class="md:w-1/2 mt-8 md:mt-0 animate-fadeIn" style="animation-delay: 200ms;">
                        <img src="https://raw.githubusercontent.com/apiiela/sdaproductionswa/main/MATILDA%20JR_FULL_VERTICAL_4C.jpg" 
                             alt="Matilda The Musical Jr. Logo" 
                             class="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                             onerror="this.src='https://placehold.co/600x750/000000/e0e7ff?text=Matilda+Jr.+Logo'; this.onerror=null;">
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== FROZEN SECTION ===== -->
        <section id="frozen" class="min-h-screen py-24 md:py-32 flex items-center force-dark-text">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    
                    <!-- Text Content -->
                    <div class="md:w-1/2 text-center md:text-left animate-fadeInUp">
                        <span class="text-indigo-600 font-semibold uppercase tracking-wider">Also Showing!</span>
                        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mt-2 mb-6">Disney's Frozen KIDS</h1>
                        <p class="text-lg text-gray-800 mb-8">
                            Let it go! Both shows are running side-by-side this season.
                        </p>
                        
                        <!-- Info Cards -->
                        <div class="space-y-4 mb-10">
                            <div class="flex items-start p-4 bg-white/60 rounded-lg shadow-md border border-blue-200">
                                <svg class="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Rehearsals</h3>
                                    <p class="text-gray-800">Starting late December.</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Button -->
                        <button disabled class="inline-block bg-gray-600 text-white/70 font-bold py-3 px-8 rounded-lg shadow-xl cursor-not-allowed">
                            Tickets Soon
                        </button>
                    </div>
                    
                    <!-- Image -->
                    <div class="md:w-1/2 mt-8 md:mt-0 animate-fadeIn" style="animation-delay: 200ms;">
                        <img src="image_93ca3c.jpg" 
                             alt="Frozen KIDS Logo" 
                             class="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                             onerror="this.src='https://placehold.co/600x750/e0f2fe/0c4a6e?text=Frozen+KIDS+Logo'; this.onerror=null;">
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== ABOUT SECTION ===== -->
        <section id="about" class="py-16 md:py-24 bg-gray-800 force-light-text">
            <div class="container mx-auto px-6 text-center max-w-3xl">
                <img src="https://raw.githubusercontent.com/apiiela/sdaproductionswa/main/logosdatrans.png" 
                     alt="SDA Logo" 
                     class="max-w-48 mx-auto mb-6 bg-black rounded-lg p-2"
                     onerror="this.src='https://placehold.co/192x100/334155/white?text=SDA'; this.onerror=null;">
                <h2 class="text-3xl font-bold text-white mb-4">About SDA Productions WA</h2>
                <p class="text-lg text-slate-300 leading-relaxed">
                    SDA Productions WA is committed to providing quality and affordable performing arts experiences in a fun and positive environment. We are dedicated to helping each performer reach their potential, whether that be on a recreational level or supporting their desire to pursue a career in the performing arts.
                </p>
            </div>
        </section>

    </main>

    <!-- ===== FOOTER (CONTACT) ===== -->
    <footer id="contact" class="bg-black text-slate-400 py-16 force-light-text">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-2xl font-bold text-white mb-4">Get In Touch</h2>
            <p class="mb-8">Follow us on social media for the latest updates on auditions, enrolments, and shows!</p>
            
            <!-- Social Icons -->
            <div class="flex justify-center space-x-6 mb-8">
                <a href="https://www.facebook.com/SingDanceActWa/" 
                   target="_blank" 
                   class="text-slate-400 hover:text-indigo-400 transition-transform hover:scale-110">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    <span class="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/singdanceactwa/?hl=en" 
                   target="_blank" 
                   class="text-slate-400 hover:text-indigo-400 transition-transform hover:scale-110">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.011 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465 2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363.416 2.427.465C8.901 2.013 9.255 2 11.685 2h.63zm-.001 1.802h-.63c-2.403 0-2.7.01-3.64.058-.94.048-1.503.207-1.898.362A3.09 3.09 0 003.25 5.572a3.09 3.09 0 00-.362 1.898c-.048.94-.058 1.237-.058 3.64s.01 2.7.058 3.64c.048.94.207 1.503.362 1.898a3.09 3.09 0 001.898 1.898c.395.156.958.314 1.898.362.94.048 1.237.058 3.64.058h.63c2.403 0 2.7-.01 3.64-.058.94-.048 1.503.207 1.898.362a3.09 3.09 0 001.898-1.898c.156-.395.314-.958.362-1.898.048-.94.058-1.237.058-3.64s-.01-2.7-.058-3.64c-.048-.94-.207-1.503-.362-1.898a3.09 3.09 0 00-1.898-1.898c-.395-.156-.958-.314-1.898.362-.94-.048-1.237-.058-3.64-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zM12 15a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" clip-rule="evenodd" /></svg>
                    <span class="sr-only">Instagram</span>
                </a>
            </div>
            
            <p class="text-sm">&copy; 2025 SDA Productions WA. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>
