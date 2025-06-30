<template>
  <div>
    <!-- Hero Section -->
    <section class="home-page">
      <div class="hero-section">
        <div class="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p class="hero-subtitle">Front-end Web Developer | Designer</p>
          <p class="hero-description">
            Hi! I'm Inge. I love to bring ideas to life on the web with my unique outlook and styles.
          </p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-page">
      <div class="about-section">
        <h2>About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p>
              Hi! I'm Inge. I love to bring ideas to life on the web with my unique outlook and styles.
            </p>
            <p>
              I'm passionate about creating beautiful, functional, and accessible web experiences. 
              With a focus on front-end development and design, I strive to build websites that not 
              only look great but also provide excellent user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, experimenting with 
              different technologies, or working on personal projects that challenge my skills.
            </p>
          </div>
          <div class="about-image">
            <img src="/Inge.JPG" alt="This is me!" class="profile-image">
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section (side-by-side on desktop, stacked on mobile) -->
    <section class="projects-page" id="projects">
      <div class="projects-section">
        <h2>My Projects</h2>
        <div class="project-grid">
          <!-- Project 1 Card -->
          <div class="project">
            <div class="project-card">
              <h3>Wix Site</h3>
              <p>This is a website designed to show my experiences in different fields I experimented working in during high school.</p>
              <button class="project-button" @click="viewProject('Wix Site')">View Project</button>
            </div>
          </div>
          <!-- Project 2 Card -->
          <div class="project">
            <div class="project-card">
              <h3>Natural Health Solutions</h3>
              <p>In this site you will see how I expanded my horizons by creating a ADHD-friendly website that works with them to help manage their adversities.</p>
              <button class="project-button" @click="viewProject('Natural Health Solutions')">View Project</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Popup Modal -->
    <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <div class="popup-header">
          <h3>You are viewing {{ popupTitle }}</h3>
          <button class="close-button" @click="closePopup">&times;</button>
        </div>
        <div class="popup-body">
          <p>{{ popupMessage }}</p>
          <p>This project showcases my skills in web development and design. More details about this project will be available soon.</p>
        </div>
        <div class="popup-footer">
          <button class="btn btn-primary" @click="closePopup">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      showPopup: false, // Controls visibility of the project modal
      popupTitle: '',   // Title of the project in the modal
      popupMessage: ''  // Message in the modal
    }
  },
  methods: {
    // Show the modal for a given project
    viewProject(projectName) {
      this.popupTitle = projectName;
      this.popupMessage = `Thank you for your interest in ${projectName}!`;
      this.showPopup = true;
    },
    // Close the modal
    closePopup() {
      this.showPopup = false;
    }
  }
}
</script>

<style scoped>
.home-page {
  padding: 2rem;
  text-align: center;
}
</style> 