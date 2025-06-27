 document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('year').textContent = new Date().getFullYear();
            
            // Theme toggle
                const themeToggle = document.getElementById('themeToggle');
                let darkTheme = true;

                function applyDarkTheme() {
                    document.body.style.backgroundColor = '#121212';
                    document.body.style.color = '#f8f9fa';
                    document.querySelector('.navbar').style.backgroundColor = '#121212';
                    document.querySelector('.navbar').style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
                    themeToggle.textContent = '🌙';
                    themeToggle.style.backgroundColor = '#f8f9fa';
                    themeToggle.style.color = '#121212';
                    document.getElementById('navThemeToggle').textContent = '☀️';
                }

                function applyLightTheme() {
                    document.body.style.backgroundColor = '#f8f9fa';
                    document.body.style.color = '#212529';
                    document.querySelector('.navbar').style.backgroundColor = '#f8f9fa';
                    document.querySelector('.navbar').style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    themeToggle.textContent = '☀️';
                    themeToggle.style.backgroundColor = '#3a86ff';
                    themeToggle.style.color = 'white';
                    document.getElementById('navThemeToggle').textContent = '🌙';
                }

                function toggleTheme() {
                    darkTheme = !darkTheme;
                    if (darkTheme) {
                        applyDarkTheme();
                    } else {
                        applyLightTheme();
                    }
                }

                // Apply dark theme by default on page load
                applyDarkTheme();

                // Set event listeners for toggle buttons
                themeToggle.addEventListener('click', toggleTheme);
                document.getElementById('navThemeToggle').addEventListener('click', toggleTheme);

            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });
            
            // Scroll animations
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            fadeElements.forEach(element => {
                observer.observe(element);
            });

            // Typing animation
            const strings = ["Web Developer", "UI/UX Design", "Problem Solving"];
            let i = 0;
            let j = 0;
            let currentString = strings[0];
            let isDeleting = false;
            
            function typeEffect() {
                const typingElement = document.querySelector('.typing-text');
                
                if (isDeleting) {
                    typingElement.textContent = currentString.substring(0, j - 1);
                    j--;
                    
                    if (j === 0) {
                        isDeleting = false;
                        i = (i + 1) % strings.length;
                        currentString = strings[i];
                    }
                } else {
                    typingElement.textContent = currentString.substring(0, j + 1);
                    j++;
                    
                    if (j === currentString.length) {
                        isDeleting = true;
                    }
                }
                
                setTimeout(typeEffect, isDeleting ? 50 : 100);
            }
            
            setTimeout(typeEffect, 2000);
        });