// ==================== FULLY FUNCTIONAL PARTICLE BACKGROUND ====================
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 1200
                    }
                },
                color: {
                    value: ["#00ff9d", "#00d9ff", "#ff00e4", "#9d00ff", "#ffaa00"]
                },
                shape: {
                    type: ["circle", "triangle", "edge", "polygon"],
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 6
                    }
                },
                opacity: {
                    value: 0.8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1.5,
                        opacity_min: 0.2,
                        sync: false
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3,
                        size_min: 1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 200,
                    color: "#00d9ff",
                    opacity: 0.5,
                    width: 1.5,
                    shadow: {
                        enable: true,
                        blur: 8,
                        color: "#00ff9d"
                    }
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "bounce",
                    bounce: true,
                    attract: {
                        enable: true,
                        rotateX: 800,
                        rotateY: 1600
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: ["grab", "bubble", "repulse"]
                    },
                    onclick: {
                        enable: true,
                        mode: ["push", "remove", "repulse", "bubble"]
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 220,
                        line_linked: {
                            opacity: 1,
                            width: 2.5
                        }
                    },
                    bubble: {
                        distance: 280,
                        size: 12,
                        duration: 2.5,
                        opacity: 0.9,
                        speed: 3
                    },
                    repulse: {
                        distance: 180,
                        duration: 0.6
                    },
                    push: {
                        particles_nb: 8
                    },
                    remove: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });

        // ==================== PARTICLE CONTROLS ====================
        let colorIndex = 0;
        const colorThemes = [
            ["#00ff9d", "#00d9ff", "#ff00e4", "#9d00ff"],
            ["#ff3300", "#ff9900", "#ffff00", "#ff00ff"],
            ["#0066ff", "#00ccff", "#00ffff", "#9900ff"],
            ["#00ff00", "#99ff00", "#00ff99", "#00ffcc"]
        ];

        function increaseParticles() {
            if (window.pJSDom && window.pJSDom[0]) {
                pJSDom[0].pJS.particles.number.value += 50;
                pJSDom[0].pJS.fn.particlesRefresh();
                showNotification("+50 Particles Added");
            }
        }

        function decreaseParticles() {
            if (window.pJSDom && window.pJSDom[0]) {
                pJSDom[0].pJS.particles.number.value = Math.max(50, pJSDom[0].pJS.particles.number.value - 50);
                pJSDom[0].pJS.fn.particlesRefresh();
                showNotification("-50 Particles Removed");
            }
        }

        function changeParticleColor() {
            if (window.pJSDom && window.pJSDom[0]) {
                colorIndex = (colorIndex + 1) % colorThemes.length;
                pJSDom[0].pJS.particles.color.value = colorThemes[colorIndex];
                pJSDom[0].pJS.fn.particlesRefresh();
                showNotification("Color Theme Changed");
            }
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: rgba(0, 255, 157, 0.9);
                color: #0a0a0f;
                padding: 10px 20px;
                border-radius: 20px;
                font-weight: bold;
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }

        // ==================== TYPING EFFECT ====================
        const typingText = document.getElementById('typing-text');
        const roles = [
            "Full Stack Developer",
            "AI Engineer",
            "Problem Solver",
            "UI/UX Designer",
            "Tech Innovator",
            "Future Creator"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isEnd = false;

        function typeEffect() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isEnd = true;
                isDeleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, isEnd ? speed : speed);
        }

        // Start typing effect
        setTimeout(typeEffect, 1000);

        // ==================== SMOOTH SCROLLING ====================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // ==================== 3D PARALLAX EFFECT ====================
        document.addEventListener('mousemove', (e) => {
            const boxes = document.querySelectorAll('.floating-box');
            const profilePic = document.getElementById('profile-pic');
            const x = (e.clientX / window.innerWidth) * 40 - 20;
            const y = (e.clientY / window.innerHeight) * 40 - 20;
            
            // Main box (with picture)
            if (boxes[0]) {
                boxes[0].style.transform = `translate(-50%, -50%) rotateX(${15 + y * 0.5}deg) rotateY(${15 + x * 0.5}deg)`;
            }
            
            // Second box
            if (boxes[1]) {
                boxes[1].style.transform = `translate(-40%, -60%) rotateX(${-10 - y * 0.3}deg) rotateY(${-10 - x * 0.3}deg)`;
            }
            
            // Third box
            if (boxes[2]) {
                boxes[2].style.transform = `translate(-60%, -40%) rotateX(${5 + y * 0.4}deg) rotateY(${5 + x * 0.4}deg)`;
            }
            
            // Profile picture glow effect
            if (profilePic) {
                const glowX = (e.clientX / window.innerWidth) * 100;
                const glowY = (e.clientY / window.innerHeight) * 100;
                profilePic.style.backgroundPosition = `${glowX}% ${glowY}%`;
            }
        });

        // ==================== PULSE ANIMATION ====================
        const profilePic = document.getElementById('profile-pic');
        if (profilePic) {
            setInterval(() => {
                profilePic.style.animation = 'pulse 2s ease-in-out';
                setTimeout(() => {
                    profilePic.style.animation = '';
                }, 2000);
            }, 5000);
        }

        // ==================== CONTACT FORM ====================
        function sendMessage() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert("Please fill all fields before transmission.");
                return;
            }
            
            // Simulate sending
            document.querySelector('.contact-form').innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <i class="fas fa-check-circle" style="font-size: 4rem; color: #00ff9d;"></i>
                    <h3 style="margin-top: 1rem;">Transmission Sent!</h3>
                    <p>Message received in the future. I'll contact you soon.</p>
                </div>
            `;
            
            // Add particle explosion effect
            if (window.pJSDom && window.pJSDom[0]) {
                for(let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        pJSDom[0].pJS.particles.array.push(
                            pJSDom[0].pJS.fn.particleCreate()
                        );
                    }, i * 30);
                }
            }
        }

        // ==================== SKILL CARDS HOVER EFFECT ====================
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.05)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // ==================== ADD CSS ANIMATIONS ====================
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // ==================== INITIAL NOTIFICATION ====================
        setTimeout(() => {
            showNotification("🚀 Particle System Active! Try hovering/clicking");
        }, 1500);