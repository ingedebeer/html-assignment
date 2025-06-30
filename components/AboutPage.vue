<template>
  <div class="about-page-container">
    <section class="about-section">
      <!-- Header Section -->
      <div class="about-header">
        <h1>A Little More About Me</h1>
        <p class="subtitle">Designer, Developer, and Lifelong Learner</p>
      </div>
      <div class="about-content">
        <!-- Profile Image -->
        <div class="about-image">
          <img src="/Inge.JPG" alt="A photo of Inge de Beer" class="profile-image">
        </div>
        <!-- Expanded About Text -->
        <div class="about-text">
          <h2>My Journey</h2>
          <p>
            Hello again! I'm Inge, and my journey into the world of web development and design is fueled by a deep-seated passion for creating things that are both beautiful and functional. It all started with a curiosity for how websites worked, which quickly blossomed into a love for bringing ideas to life on the screen.
          </p>
          <p>
            I thrive on the challenge of blending aesthetic design with clean, efficient code. For me, a successful project is one that not only looks stunning but also provides an intuitive and accessible experience for every user. I believe that the best digital products are born from a blend of creativity, empathy, and technical precision.
          </p>
          <h2>My Philosophy</h2>
          <p>
            I'm a firm believer in continuous learning. The tech world is always evolving, and I'm committed to growing with it. Whether I'm diving into a new JavaScript framework, exploring the latest design trends, or experimenting with CSS animations, I'm always eager to expand my skillset.
          </p>
          <p>
            When I'm not at my computer, you might find me sketching out new ideas, getting lost in a good book, or exploring the outdoors to find fresh inspiration.
          </p>
          <!-- Call-to-action Button -->
          <div class="about-actions">
            <router-link to="/projects" class="btn btn-primary">See My Work</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage' // About Me page component
}
</script>

<style scoped>
.about-page-container {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.about-section {
  text-align: center;
}

.about-header {
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 2.5rem;
  color: var(--navy-blue);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--lilac-purple);
  font-weight: 500;
}

.about-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  text-align: left;
  align-items: flex-start;
}

.about-image .profile-image {
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.about-text h2 {
  font-size: 2rem;
  color: var(--navy-blue);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--lilac-purple);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 1.5rem;
}

.about-actions {
  margin-top: 2rem;
}

.btn-primary {
  background-color: var(--lilac-purple);
  color: var(--navy-blue);
  padding: 0.85rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary:hover {
  background-color: var(--navy-blue);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  .about-image {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .about-image .profile-image {
    max-width: 250px;
  }
  .about-text {
    text-align: center;
  }
  .about-text h2 {
    display: block;
  }
}
</style> 