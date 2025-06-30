<template>
  <div id="app">
    <!-- Header with Navigation -->
    <header>
      <h1>Inge de Beer</h1>
      <p>| Front-end Web Developer | Designer |</p>
      <hr>
      <nav class="nav">
        <button class="menu-toggle" aria-label="Toggle Menu" @click="toggleMenu">
          <span class="hamburger"></span>
        </button>
        <ul class="nav-menu" :class="{ 'show': isMenuOpen }">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About Me</router-link></li>
          <li><router-link to="/projects" @click="closeMenu">My Projects</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content Area -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <p>Inge de Beer</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const nav = document.querySelector('.nav');
      const menuToggle = document.querySelector('.menu-toggle');
      
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        this.closeMenu();
      }
    });
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Navigation Styles */
.nav {
  position: relative;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-menu a {
  text-decoration: none;
  color: var(--navy-blue);
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.nav-menu a:hover,
.nav-menu a.router-link-active {
  color: var(--lilac-purple);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--navy-blue);
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: var(--navy-blue);
  transition: all 0.3s ease;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    gap: 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-radius: 8px;
    padding: 1rem 0;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .nav-menu.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu a {
    display: block;
    padding: 1rem 2rem;
    border-bottom: 1px solid #eee;
  }

  .nav-menu li:last-child a {
    border-bottom: none;
  }

  /* Hamburger Animation */
  .menu-toggle.active .hamburger {
    background-color: transparent;
  }

  .menu-toggle.active .hamburger::before {
    transform: rotate(45deg);
    top: 0;
  }

  .menu-toggle.active .hamburger::after {
    transform: rotate(-45deg);
    bottom: 0;
  }
}
</style> 