// All 3D/Three.js related code has been removed for a cleaner, non-3D portfolio experience.

// Mouse trail animation
document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);

    // Remove the trail element after its animation (e.g., 500ms)
    setTimeout(() => {
        trail.remove();
    }, 800);
});

// Typing animation setup
const typed = new Typed('.typing-text', {
    strings: [
        '"Hello, World!"',
        '"Welcome to my portfolio!"',
        '"I am a Java Developer"',
        '"Let\'s build something amazing!"'
    ],
    typeSpeed: 120,
    backSpeed: 60,
    backDelay: 3000,
    loop: true
});

// Terminal functionality
const terminal = document.querySelector('.terminal-input');
const terminalOutput = document.querySelector('.terminal-output');

const commands = {
    help: `Available commands:
    - help               Show this help message
    - whoami             About me
    - skills             Show my technical skills
    - education          Show my educational background
    - experience         Show my work experience
    - projects           List my projects
    - leetcode           Show LeetCode stats (350+ problems solved)
    - codeforces         Show Codeforces rating (1500+)
    - hackerrank         Show HackerRank achievements (5★ Java)
    - certificates       View my certifications
    - contact            Get my contact information
    - resume             Download my resume
    - clear              Clear terminal screen
    - exit               Close the terminal`,

    whoami: `Kuldip Amreliya
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Role:     Java Developer & Problem Solver
Location: Surat, Gujarat, India
Status:   Open to opportunities
Education: B.E. Computer Engineering (CGPA: 9.0/10)

Passionate about creating robust and scalable 
applications using Java, Spring Boot, and modern 
web technologies. Always learning and improving!`,

    skills: `🛠️  Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌱 Core Languages & Frameworks
   • Java (Advanced) - 95%
   • Spring Boot - 90%
   • Spring Security - 85%
   • REST APIs - 88%

🗄️  Databases
   • MySQL - 85%
   • MongoDB - 80%
   • Hibernate ORM - 85%

🔧 Tools & Technologies
   • Git/GitHub - 80%
   • Maven - 75%
   • JUnit - 85%
   • Postman - 80%

🎨 Frontend
   • HTML5/CSS3 - 75%
   • JavaScript - 75%
   • Thymeleaf - 80%`,

    education: `📚 Educational Background
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎓 B.E. Computer Engineering
   Pacific School of Engineering
   Gujarat Technological University
   Batch: 2025 | CGPA: 9.0/10
   
📖 H.S.C. (12th Grade) - 76%
   Science Stream (2021)
   
📝 S.S.C. (10th Grade) - 79.33%
   General Stream (2019)`,

    experience: `💼 Work Experience
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔹 Java Developer Intern
   Fransa Consultancy | Feb 2025 - Apr 2025
   • Backend development with Spring Boot
   • RESTful API development & MySQL integration
   • Unit testing with JUnit
   • Agile development practices

🔹 Java Development Intern  
   SaiKet Systems | Jun 2024 - Jul 2024
   • Java-based module development
   • Strong fundamentals & communication skills

🔹 Intern - AI & Cloud Technologies
   Edunet Foundation (IBM & AICTE) | Jul 2024
   • AI & Cloud platform training
   • Hands-on experience with IBM SkillsBuild`,

    projects: `🚀 Featured Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. JournalHub
   Secure journal management app with authentication,
   CRUD operations, and cloud storage
   Tech: Spring Boot, MongoDB, Spring Security, Thymeleaf

2. 4U Beauty Parlour Website
   Responsive business website with services and contact
   Tech: HTML, CSS, JavaScript
   Live: 4ubeautyparlour.com

3. Banking Application (Core Java)
   Console-based banking operations with OOP concepts
   Tech: Core Java, File I/O, Collections

4. BuyProductBazar
   Waste management marketplace with chatbot integration
   Tech: HTML, CSS, JavaScript, Chatbot API

Visit my GitHub for more projects and source code!`,

    leetcode: `💡 LeetCode Stats
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Problems Solved: 350+
Platform: LeetCode
Focus: Algorithms & Data Structures
Profile: https://leetcode.com/yourusername`,

    codeforces: `⚔️  Codeforces Profile
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Rating: 1500+ (Specialist)
Contest Participation: Active
Focus: Competitive Programming & Problem Solving
Profile: https://codeforces.com/profile/yourusername`,

    hackerrank: `🏆 HackerRank Achievements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Java Badge: ★★★★★ (5 Stars)
Other Certificates:
  • Problem Solving (Intermediate)
  • Problem Solving (Basics)
  • SQL (Intermediate)
  • SQL (Basics)
  • CSS (Basic)
Profile: https://hackerrank.com/profile/yourusername`,

    certificates: `📜 Certifications
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔹 Oracle Java Foundation - Oracle (Aug 2024)
🔹 Introduction to Java on Azure - Microsoft (Jul 2024)
🔹 Problem Solving (Intermediate) - HackerRank (Jul 2024)
🔹 SQL (Intermediate) - HackerRank (Jul 2024)
🔹 Fundamental AI Concepts - Microsoft (Jul 2024)
🔹 Enterprise-grade AI - IBM (Jul 2024)
...and many more!

Visit /certificates.html to see all my certifications!`,

    contact: `📞 Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    kuldipamreliya001@gmail.com
Phone:    +91 86903 39086
Location: Surat, Gujarat, India
LinkedIn: linkedin.com/in/kuldipamreliya
GitHub:   github.com/yourusername

Feel free to reach out for collaborations!`,

    resume: `📄 Resume Download
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Click the "Download Resume" button in the hero section 
to download my latest resume in PDF format.

Or contact me directly to request a copy!`,

    clear: () => {
        terminalOutput.innerHTML = '';
        addToTerminal('Terminal cleared. Type "help" for available commands.');
        return '';
    },

    exit: () => {
        return `Goodbye! 👋

Thank you for visiting my portfolio.
Feel free to explore the rest of the site!`;
    }
};

function executeCommand(input) {
    const [command, ...args] = input.trim().split(' ');
    const fullCommand = command.toLowerCase();
    const argsString = args.join(' ');

    if (commands[fullCommand]) {
        if (typeof commands[fullCommand] === 'function') {
            return commands[fullCommand](argsString);
        }
        return commands[fullCommand];
    }
    return `Command not found: ${command}. Type 'help' for available commands.`;
}

function addToTerminal(text, isCommand = false) {
    const line = document.createElement('div');
    line.className = 'line';
    if (isCommand) {
        line.innerHTML = `<span class="prompt">$</span> ${text}`;
    } else {
        line.textContent = text;
    }
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

if (terminal && terminalOutput) {
    // Initial welcome message
    addToTerminal('Welcome to Java Terminal v1.0');
    addToTerminal('Type "help" for available commands');

    terminal.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const input = terminal.value.trim();
            if (input) {
                addToTerminal(input, true);
                const response = executeCommand(input);
                if (response) {
                    addToTerminal(response);
                }
            }
            terminal.value = '';
        }
    });

    // Auto-focus terminal
    terminal.focus();

    // Add click handler to keep focus
    terminalOutput.addEventListener('click', () => {
        terminal.focus();
    });
}

// Initial load handling
document.addEventListener('DOMContentLoaded', () => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize all components
    initTyping();
    initTerminal();
    initScrollHandling();
    animateSkillLevels();

    // Intersection Observer for section animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Section ${entry.target.id || entry.target.tagName} is intersecting, adding visible class.`);
                entry.target.classList.add('visible');
                
                // Animate tech items with delay
                if (entry.target.classList.contains('tech-stack')) {
                    const techItems = entry.target.querySelectorAll('.tech-item');
                    techItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });
                }
                
                // Animate project cards with delay
                if (entry.target.classList.contains('projects')) {
                    const projectCards = entry.target.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200);
                    });
                }
                
                // Animate skill cards with delay
                if (entry.target.classList.contains('skills')) {
                    const skillCards = entry.target.querySelectorAll('.skill-card');
                    skillCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 150);
                    });
                }

                // Animate education items with delay
                if (entry.target.classList.contains('education')) {
                    const educationItems = entry.target.querySelectorAll('.education-item');
                    educationItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });
                }

                // Animate experience items with delay
                if (entry.target.classList.contains('experience')) {
                    const experienceItems = entry.target.querySelectorAll('.experience-item');
                    experienceItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Special handling for certificates page
    if (document.querySelector('.certificates')) {
        const certificatesSection = document.querySelector('.certificates');
        const achievementsSection = document.querySelector('.achievements');
        
        // Make certificates sections visible immediately
        if (certificatesSection) {
            certificatesSection.classList.add('visible');
        }
        if (achievementsSection) {
            achievementsSection.classList.add('visible');
        }
    }
});

// Header scroll handling
let lastScroll = 0;
const header = document.querySelector('.header');

function initScrollHandling() {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize typing animation
function initTyping() {
    const typed = new Typed('.typing-text', {
        strings: [
            '"Hello, World!"',
            '"Welcome to my portfolio!"',
            '"I am a Java Developer"',
            '"Let\'s build something amazing!"'
        ],
        typeSpeed: 120,
        backSpeed: 60,
        backDelay: 3000,
        loop: true
    });
}

// Initialize terminal
function initTerminal() {
    const terminal = document.querySelector('.terminal-input');
    const terminalOutput = document.querySelector('.terminal-output');

    if (terminal && terminalOutput) {
        terminal.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = terminal.value.toLowerCase().trim();
                let response = '';

                if (commands[command]) {
                    response = typeof commands[command] === 'function' 
                        ? commands[command]() 
                        : commands[command];
                } else {
                    response = `Command not found: ${command}. Type 'help' for available commands.`;
                }

                if (response) {
                    const line = document.createElement('div');
                    line.className = 'line';
                    line.textContent = `$ ${command}`;
                    terminalOutput.appendChild(line);

                    const responseLine = document.createElement('div');
                    responseLine.className = 'line';
                    responseLine.textContent = response;
                    terminalOutput.appendChild(responseLine);
                }

                terminal.value = '';
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation handling
function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = 'home'; // Default to home

    sections.forEach(section => {
        const sectionTop = section.offsetTop - header.offsetHeight;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Initial call to set active link on load
setActiveLink();

// Set active link on scroll
window.addEventListener('scroll', setActiveLink);

// Handle smooth scrolling for internal nav links only
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    const formData = {
        access_key: '775369c4-4485-458a-bdf5-8f773f51c842',
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: 'New Contact Form Submission from Portfolio'
    };
    
    // Send to W3Forms API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(async (response) => {
        const json = await response.json();
        
        if (response.ok && json.success) {
            // Success
            submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitButton.style.background = 'linear-gradient(135deg, #00ff88, #00cc70)';
            
            // Reset form
            form.reset();
            
            // Show success message
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                submitButton.innerHTML = originalButtonText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 2000);
        } else {
            throw new Error(json.message || 'Failed to send message');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        
        // Error state
        submitButton.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
        submitButton.style.background = 'linear-gradient(135deg, #ff4444, #cc0000)';
        
        alert('Sorry, there was an error sending your message. Please try again or email me directly at kuldipamreliya001@gmail.com');
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.innerHTML = originalButtonText;
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
    });
    
    return false;
}

// Add form field animations
const formFields = document.querySelectorAll('.contact-form input, .contact-form textarea');
formFields.forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', () => {
        if (!field.value) {
            field.parentElement.classList.remove('focused');
        }
    });
});

// Function to animate skill levels (bar only)
function animateSkillLevels() {
    const skillCards = document.querySelectorAll('.skill-card');
    console.log('Found skill cards:', skillCards.length);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillCard = entry.target;
                const progress = skillCard.querySelector('.skill-progress');
                const level = skillCard.getAttribute('data-level');
                console.log('Animating skill:', skillCard, 'Level:', level);
                progress.style.width = `${level}%`;
                skillCard.classList.add('visible');
                observer.unobserve(skillCard);
            }
        });
    }, {
        threshold: 0.2
    });
    skillCards.forEach(card => {
        observer.observe(card);
    });

    // Fallback: force all bars to fill on load for testing
    setTimeout(() => {
        skillCards.forEach(card => {
            const progress = card.querySelector('.skill-progress');
            const level = card.getAttribute('data-level');
            progress.style.width = `${level}%`;
            card.classList.add('visible');
        });
    }, 1000);
}

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
} 