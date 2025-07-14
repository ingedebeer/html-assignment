# Inge de Beer Portfolio

A modern, minimalistic portfolio website built with Vue.js, featuring responsive design, project showcases, and a contact form with validation.


# HTML Assignment 
* Title : Shows the main purpose of the page - My portfolio <br>
* The Header : includes my page name as well as the naigation section.<br>
* Navigation secion : includes easy navigation to different sections of the page which shows information about myself and my work.<br>
* About me section : has a short introduction about myself as well as an embedded image of myself and an alt-description of the image for annyone who isn't able to load it or for screenreaders.<br>
* My products : with two sub-sections, each showcasing a project I've worked on with a short intro to what it is about.<br>
* Contact : has links to my email and phone for anyone that wans to get in touch.<br>
* Footer : includes secondary navigation links to different sections as well as my name <br>

I chose a hybrid portfolio to showcase some personal projects I've worked on along with the professional tasks I have and hope to cwork on in the future.<br>
I chose to add an image of myself because it adds a personal feel to the site which makes people feel more familiar with the content and work.<br>

# CSS Assignment 
## CSS : <br>
* Overall design : <br>
  I chose a minimalistic , modern design because it portrays my design style. <br>
  It gives a clean and organised feeling which is how I like my projects to be.<br>
* Typography : <br>
  The fonts are both serif and sans-serif for easy readability and it contributes to the clean aesthetic, it also separates the two from each other to avoid confusion.<br>
* Colours : <br>
  All the colours I used are calming while still creating a large enough contrast for accessibility. <br>
  The final shades of the colours have not been decided yet. <br>
* Layout : 
  The navigation bar was centered and changed into a horizontal list to make it easily locatable. <br>
* Validation :
  I used the W3C Validator and the first time no errors came up. <br>
  I realised I used the wrong one (HTML instead of CSS) and corrected the errors that came up. <br>
* Reflection :
  I experiences this section of the assignment to be slightly easier than the first because seeing the vision take shape guided me.

## Advanced CSS : <br>  
* Challenges / Ideas : <br>
  Nearly every part of this section challenged me :(. <br>
  I found it difficult to optimise the structure for mobile-first and it took me quite a few tries to do. <br>
* Decisions - Naviagtion , Structure : <br>
  With the minimalistic effect in mind I kept a lot of white space. <br>
  The buttons that change colour add a fine touch of interactivity. <br>
  Toggled navigation is easier to use on smaller screens so I added it for efficiency. <br>
  The image size reduces significantly on mobile/smaller screens. <br>
* Mobile-first / Responsiveness : <br>
  The trasition times are fast on elements. <br>
  I used fast-loading media and clean code to help the site load efficiently on mobile. <br>
  Transitions add to the feel of the sight. <br>
  
# JavaScript Assignment
## JS: <br>
* Decision : <br>
  I chose a simple pop-up message that indicates which project the user is viewing. <br>
  It includes the title of the project with the message "You are viewing (project name)!" .<br>
  I also added a rotation on the navigation menu. <br>
* What user action triggers it : <br>
  When the user clicks on the "View Project" button the message appears.<br>
  The user opening the navigation menu triggers the rotation of the hamburger icon. <br>
* Why you chose that interaction : <br>
  It points out that the user is viewing the project they chose to click on. <br>
  It gives confirmation that the site recognises the users' action. <br>
* Any challenges or decisions you made while working with JavaScript : 
  Understanding the use of Java Script was confusing while only seeing the theory. <br>
  Once I started practicing and using it, seeing the effects myself it became easier to grasp. <br>
* Validation :
  When testing these additions in my console no errors turned up. <br>
  
# JavaScript + Vue.js -> Assignment 6
## JS A6: <br>
* Decisions and Validation : <br>
  I added a pop-up message that confirms the info the user entered and that they're message is submitted. <br>
  Each line of the form is validated and shows errors when left blank to prevent automatic submission. <br>
  The email section validates that it is an email address being entered. <br>
  Each section has a minimum amount of letters to ensure accurate information. <br>
* Interactions - Modal : <br>
  When the user clicks "Send Message" the message appears.<br>
  The user can close this popup/modal by clicking the "Close" button. <br>
* Any challenges or decisions you made while working with JavaScript : 
  I struggled to see the use of Vue.js before actually using and testing it on sites. <br>
  When reading through the theory I got confused easily and applying it to the site without practice was difficult. <br>
  Deciding on a format for the modal without overwhelming the user was a challenge since many people don't like pop-ups. <br>
  There was an error in my code when I added this page and I needed to do a lot of reading to find and resolve it. <br>
  I misunderstood this assignment completely and had to redo it at the last minute because I coded this into my existing page. <br>
  (I am still not entirely clear on how this assignment should have been done honestly). <br>

# Vue.js
## Assignment 7: <br>
* Validation and Modal interactions : <br>
  Most of the interactions and validation are the same as they were with the previous assignment. <br>
  The "Name"-field's validaion has been adjusted to only acccept letters, periods and hyphens. <br>
* Testing Notes : <br>
  Although some elements look slightly different the page and buttons react the same.<br>
  All the buttons are still the same as they previously were. <br>
  No errors appeared during testing and the sight reacts the same across different browsers and screen sizes. <br>
* Any challenges while working with Vue.js : <br>
  The entered info didn't appear in the modal after initial canges. <br>
  After resolving this issue it was pretty straight-forward and I could focus on the smaller details like look and feel across the sight. <br>

# Assignment 8: <br>
 ## Summary: 
* Modern Design: <br>
  Clean, minimal, and mobile-friendly layout to ensure easy loading and navigation.
* Vue.js SPA: <br>
  Fast navigation with Vue Router
* Project Showcase: <br>
  Interactive project cards with pop-up modals
* About Me: <br>
  Creative, extended biography and photo
* Contact Form: <br>
  Validated form with confirmation modal
* Accessible: <br>
  Keyboard navigation and ARIA attributes

## About the Vue Router & Page Structure

### How I implemented Vue Router
* I used [Vue Router](https://router.vuejs.org/) to turn this site into a single-page application. <br>
* The router is set up in `router/index.js`, where I defined routes for each main page (Home, About, Projects, Contact, and a Not Found page). <br>
* Each route points to its own Vue component, and navigation is handled with `<router-link>`s in the main navigation bar.

### What pages I created and how they're structured
* Home: A welcoming hero section , a short about me section , and a preview of my projects. <br>
* About Me: A more detailed look at my journey, philosophy, and a photo, plus a button to see my work. <br>
* Projects: Each project gets its own card with a longer description and a "View Project" popup. <br>
* Contact: A form with real-time validation and a confirmation popup, so you know your message went through. <br>
* Not Found: A friendly 404 page for any routes that don't exist. <br>

Each page is its own Vue component, and the layout is designed to be clean and easy to navigate, both on desktop and mobile.

### Challenges & Insights
* Getting the modal popups just right took some trial and error, especially making sure they worked well on all screen sizes and didn't overlap with headings. <br> 
* Moving from static HTML to Vue was a big shift, but it made the site much more interactive and maintainable.
* Validation and accessibility : Making sure the contact form was both user-friendly and accessible was a challenge.
* Keeping the code clean: I learned the value of good comments and structure, especially as the project grew.

### Why routing matters in SPAs
* Routing is what makes a single-page app feel like a real website. Instead of loading a whole new page every time you click a link, the app just swaps out the content you need. This means: <br>
- Faster navigation (no full page reloads) <br>
- Smoother user experience <br>
- The ability to share and bookmark specific pages (like /about or /projects) <br>
- Easier to manage and scale as your site grows <br>

# Summative Assignment adjustments

This project is a polished, production-ready portfolio site for Inge de Beer, built with Vue 3 and Vite. Below is a detailed summary of all the changes and improvements made to achieve the final design and functionality:

## Major Adjustments and Features

### 1. **Navigation and Routing**
- Implemented Vue Router for seamless navigation between Home, About, Projects, and Contact pages.
- Fixed scroll behavior so every route navigation scrolls to the top of the page.
- Made the site name ("Inge de Beer") in the header and footer a subtle home button, visually unchanged but clickable.
- Switched to hash mode routing (`createWebHashHistory`) for full GitHub Pages compatibility (no more 404 errors on refresh or direct links).

### 2. **Design and Responsiveness**
- Increased base font size for better readability on large screens.
- Ensured all major headings (`h1`, `h2`, `h3`) have a consistent purple underline across all pages.
- Made all "View Project" buttons equal in width and style on both the Home and Projects pages, including the Wix Site button.
- Improved modal (popup) layout on mobile: the close (X) button no longer overlaps headings.
- Ensured all modals and popups are accessible and visually clean on all devices.

### 3. **Accessibility and Usability**
- Added keyboard accessibility for navigation and interactive elements.
- Ensured all buttons and links have clear focus states and are usable via keyboard.
- Improved color contrast and visual clarity for all interactive elements.

### 4. **Favicon and Branding**
- Added a default `favicon.ico` to the project and referenced it in `index.html` for browser tab branding.

### 5. **Deployment and Hosting**
- Configured Vite with the correct `base` path for GitHub Pages (`/html-assignment/`).
- Automated deployment to GitHub Pages using `gh-pages` and a postbuild script to copy `index.html` to `404.html` (SPA routing fix).

### 6. **Codebase Cleanliness and Maintenance**
- Resolved all console errors and warnings.
- Cleaned up unused code and ensured all files are up to date in the GitHub repository.
- Added clear, maintainable CSS for all custom styles and responsive adjustments.

## Live Site

My site is live at: [https://ingedebeer.github.io/html-assignment/](https://ingedebeer.github.io/html-assignment/)
