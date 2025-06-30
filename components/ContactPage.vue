<template>
  <div class="contact-page">
    <h1>Contact Me</h1>
    <p>Have a question or want to work together? Send me a message!</p>
    <!-- Contact Form Component -->
    <ContactForm @submit="handleFormSubmit" />

    <!-- Submission Confirmation Popup -->
    <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <div class="popup-header">
          <h3>Thank You!</h3>
          <button class="close-button" @click="closePopup">&times;</button>
        </div>
        <div class="popup-body">
          <p>Your message has been sent successfully. Here is the data you submitted:</p>
          <div class="submitted-data">
            <p><strong>Name:</strong> {{ submittedData.name }}</p>
            <p><strong>Email:</strong> {{ submittedData.email }}</p>
            <p><strong>Message:</strong></p>
            <div class="message-content">{{ submittedData.message }}</div>
          </div>
        </div>
        <div class="popup-footer">
          <button class="btn btn-primary" @click="closePopup">Close</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactForm from './ContactForm.vue'

// State for showing the confirmation popup
const showPopup = ref(false)
// Stores the submitted form data
const submittedData = ref({})

// Handles form submission and shows the popup
function handleFormSubmit(data) {
  submittedData.value = data
  showPopup.value = true
}

// Closes the popup and resets the data
function closePopup() {
  showPopup.value = false
  submittedData.value = {}
}
</script>

<style scoped>
.contact-page {
  text-align: center;
  padding: 2rem;
}
.contact-page > p {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #555;
}

/* Styles for the submitted data display inside the popup */
.submitted-data {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: left;
}

.submitted-data p {
  margin: 0.5rem 0;
  color: #333;
}

.message-content {
  white-space: pre-wrap;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #e9ecef;
  font-family: monospace;
  max-height: 150px;
  overflow-y: auto;
}

.popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
}

.popup-header h3 {
    margin: 0;
    color: var(--navy-blue);
}

.popup-body {
    padding: 1rem 0;
}

.popup-footer {
    padding-top: 1rem;
    border-top: 1px solid #eee;
    text-align: right;
}

/* Generic button style for the popup footer */
.btn-primary {
  background-color: var(--lilac-purple);
  color: var(--navy-blue);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-primary:hover {
  background-color: var(--navy-blue);
  color: white;
}
</style> 