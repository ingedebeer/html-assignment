// Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X
        if (isMenuOpen) {
            hamburger.style.transform = 'rotate(45deg)';
            hamburger.style.backgroundColor = 'var(--lilac-purple)';
            hamburger.style.top = '6px';
            hamburger.style.position = 'relative';
            
            // Update pseudo-elements through CSS classes
            hamburger.classList.add('active');
        } else {
            hamburger.style.transform = 'rotate(0)';
            hamburger.style.backgroundColor = 'var(--navy-blue)';
            hamburger.style.top = '0';
            hamburger.style.position = 'relative';
            
            // Remove active class to reset pseudo-elements
            hamburger.classList.remove('active');
        }
    }

    // Touch-friendly menu toggle
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    // Project message functionality
    const projectButtons = document.querySelectorAll('.project-button');
    const projectMessages = document.querySelectorAll('.project-message');

    projectButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Get the project name from the h3 element that's a sibling of the button
            const projectName = this.parentElement.querySelector('h3').textContent;
            showProjectMessage(projectName);

            // Hide all messages first
            projectMessages.forEach(message => {
                message.style.display = 'none';
                message.style.opacity = '0';
            });

            // Show the selected message with animation
            const selectedMessage = projectMessages[index];
            if (selectedMessage) {
                selectedMessage.style.display = 'block';
                
                // Trigger reflow
                selectedMessage.offsetHeight;
                
                // Add fade-in animation
                selectedMessage.style.opacity = '1';
                selectedMessage.style.transform = 'translateY(0)';
            }
        });
    });

    // Add touch feedback to buttons
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });

        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Project Message Functionality
function showProjectMessage(projectName) {
    alert(`You are viewing ${projectName}!`);
} 
