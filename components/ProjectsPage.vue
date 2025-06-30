<template>
  <div class="projects-page-container">
    <section class="projects-section">
      <h1>My Projects</h1>
      <p class="projects-intro">
        Here are some of the projects I've worked on. Each one represents a unique challenge and an opportunity to grow as a developer and designer. I strive to create solutions that are not only visually appealing but also accessible and user-friendly.
      </p>
      <div class="project-grid-vertical">
        <!-- Project 1 Card -->
        <div class="project">
          <div class="project-card">
            <h3>Wix Site</h3>
            <p>
              This website was designed to showcase my experiences in a variety of fields I explored during high school. I focused on creating a visually engaging and easy-to-navigate site that highlights my adaptability and willingness to learn new skills. The project allowed me to experiment with layout, color, and interactive elements, resulting in a portfolio that truly reflects my journey and growth.
            </p>
            <button class="project-button" @click="viewProject('Wix Site')">View Project</button>
          </div>
        </div>
        <!-- Project 2 Card -->
        <div class="project">
          <div class="project-card">
            <h3>Natural Health Solutions</h3>
            <p>
              This project involved building an ADHD-friendly website aimed at helping users manage their challenges in a supportive and accessible way. I worked closely with users to understand their needs, focusing on clear navigation, calming color schemes, and practical resources. The result is a site that not only informs but also empowers its visitors to take control of their well-being.
            </p>
            <button class="project-button" @click="viewProject('Natural Health Solutions')">View Project</button>
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
  name: 'ProjectsPage',
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
.projects-page-container {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-section {
  text-align: center;
}

.projects-section h1 {
  font-size: 2.5rem;
  color: var(--navy-blue);
  margin-bottom: 0.5rem;
}

.projects-intro {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.project-grid-vertical {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project {
  display: flex;
}

.project-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.project-card h3 {
  color: var(--navy-blue);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.project-card p {
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1.08rem;
}

.project-button {
  background-color: var(--lilac-purple);
  color: var(--navy-blue);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
  align-self: flex-end;
}

.project-button:hover {
  background-color: var(--navy-blue);
  color: white;
}

@media (max-width: 768px) {
  .project-grid-vertical {
    gap: 1.5rem;
  }
  .project-card {
    padding: 1.5rem;
  }
}
</style> 