<template>
  <div class="project-detail-page">
    <div class="project-detail-container">
      <div class="back-button">
        <router-link to="/projects" class="btn btn-secondary">
          ← Back to Projects
        </router-link>
      </div>
      
      <div class="project-detail-content">
        <div class="project-header">
          <h1>{{ project.title }}</h1>
          <div class="project-meta">
            <span class="project-category">{{ project.category }}</span>
            <span class="project-date">{{ project.date }}</span>
          </div>
        </div>
        
        <div class="project-image">
          <img :src="project.image" :alt="project.title" class="project-hero-image">
        </div>
        
        <div class="project-description">
          <h2>About This Project</h2>
          <p>{{ project.description }}</p>
          
          <div class="project-features">
            <h3>Key Features</h3>
            <ul>
              <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
          
          <div class="project-tech">
            <h3>Technologies Used</h3>
            <div class="tech-tags">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="project-links">
            <a :href="project.liveUrl" target="_blank" class="btn btn-primary">
              View Live Site
            </a>
            <a :href="project.githubUrl" target="_blank" class="btn btn-secondary">
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetailPage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      projects: {
        'wix-site': {
          title: 'Wix Site',
          category: 'Personal Portfolio',
          date: '2023',
          image: '/Inge.JPG',
          description: 'This is a website designed to show my experiences in different fields I experimented working in during high school. It showcases my journey through various career explorations and personal growth.',
          features: [
            'Responsive design for all devices',
            'Interactive navigation',
            'Portfolio showcase',
            'Contact form integration',
            'Modern UI/UX design'
          ],
          technologies: ['Wix', 'HTML', 'CSS', 'JavaScript'],
          liveUrl: '#',
          githubUrl: '#'
        },
        'natural-health-solutions': {
          title: 'Natural Health Solutions',
          category: 'Health & Wellness',
          date: '2023',
          image: '/Inge.JPG',
          description: 'In this site you will see how I expanded my horizons by creating a ADHD-friendly website that works with them to help manage their adversities. The focus was on accessibility and user-friendly design.',
          features: [
            'ADHD-friendly design principles',
            'Accessibility features',
            'Clear navigation structure',
            'Readable typography',
            'Calming color scheme'
          ],
          technologies: ['HTML', 'CSS', 'JavaScript', 'Accessibility Tools'],
          liveUrl: '#',
          githubUrl: '#'
        }
      }
    }
  },
  computed: {
    project() {
      return this.projects[this.id] || {
        title: 'Project Not Found',
        category: 'Unknown',
        date: 'Unknown',
        image: '/Inge.JPG',
        description: 'This project could not be found.',
        features: [],
        technologies: [],
        liveUrl: '#',
        githubUrl: '#'
      }
    }
  }
}
</script>

<style scoped>
.project-detail-page {
  padding: 2rem 0;
  min-height: 80vh;
}

.project-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.back-button {
  margin-bottom: 2rem;
}

.project-detail-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.project-header {
  margin-bottom: 2rem;
}

.project-header h1 {
  color: var(--navy-blue);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.project-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-category,
.project-date {
  background: var(--lilac-purple);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-image {
  margin-bottom: 2rem;
  text-align: center;
}

.project-hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.project-description h2 {
  color: var(--navy-blue);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.project-description p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.project-features,
.project-tech {
  margin-bottom: 2rem;
}

.project-features h3,
.project-tech h3 {
  color: var(--navy-blue);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.project-features ul {
  list-style: none;
  padding: 0;
}

.project-features li {
  padding: 0.5rem 0;
  color: var(--text-color);
  position: relative;
  padding-left: 1.5rem;
}

.project-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--lilac-purple);
  font-weight: bold;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--light-grey);
  color: var(--navy-blue);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--navy-blue);
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.btn-primary {
  background-color: var(--lilac-purple);
  color: white;
}

.btn-primary:hover {
  background-color: var(--navy-blue);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--navy-blue);
  border: 2px solid var(--navy-blue);
}

.btn-secondary:hover {
  background-color: var(--navy-blue);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .project-detail-container {
    padding: 0 1rem;
  }
  
  .project-detail-content {
    padding: 1.5rem;
  }
  
  .project-header h1 {
    font-size: 2rem;
  }
  
  .project-description h2 {
    font-size: 1.5rem;
  }
  
  .project-description p {
    font-size: 1rem;
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}
</style> 