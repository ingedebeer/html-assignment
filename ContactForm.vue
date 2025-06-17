<template>
  <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
    <div class="form-group">
      <label :for="nameId">{{ nameLabel }}</label>
      <input 
        type="text" 
        :id="nameId" 
        v-model="form.name"
        @input="handleFieldFocus('name')"
        @blur="handleFieldBlur('name')"
        :class="{ 'invalid': errors.name }"
        required 
        minlength="2" 
        maxlength="50"
        pattern="[A-Za-z\s]+"
        :aria-invalid="!!errors.name"
        :aria-describedby="nameErrorId"
        :placeholder="namePlaceholder">
      <span class="error-message" :id="nameErrorId" role="alert">{{ errors.name }}</span>
    </div>
    <div class="form-group">
      <label :for="emailId">{{ emailLabel }}</label>
      <input 
        type="email" 
        :id="emailId" 
        v-model="form.email"
        @input="handleFieldFocus('email')"
        @blur="handleFieldBlur('email')"
        :class="{ 'invalid': errors.email }"
        required 
        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
        :aria-invalid="!!errors.email"
        :aria-describedby="emailErrorId"
        :placeholder="emailPlaceholder">
      <span class="error-message" :id="emailErrorId" role="alert">{{ errors.email }}</span>
    </div>
    <div class="form-group">
      <label :for="messageId">{{ messageLabel }}</label>
      <textarea 
        :id="messageId" 
        v-model="form.message"
        @input="handleFieldFocus('message')"
        @blur="handleFieldBlur('message')"
        :class="{ 'invalid': errors.message }"
        rows="4" 
        required 
        minlength="10" 
        maxlength="1000"
        :aria-invalid="!!errors.message"
        :aria-describedby="messageErrorId"
        :placeholder="messagePlaceholder"></textarea>
      <span class="error-message" :id="messageErrorId" role="alert">{{ errors.message }}</span>
    </div>
    <button 
      type="submit" 
      class="submit-button"
      :disabled="isSubmitting"
      :aria-busy="isSubmitting">
      {{ isSubmitting ? submittingText : submitButtonText }}
    </button>
  </form>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps({
  nameLabel: {
    type: String,
    default: 'Name'
  },
  namePlaceholder: {
    type: String,
    default: 'Enter your name'
  },
  emailLabel: {
    type: String,
    default: 'Email'
  },
  emailPlaceholder: {
    type: String,
    default: 'Enter your email'
  },
  messageLabel: {
    type: String,
    default: 'Message'
  },
  messagePlaceholder: {
    type: String,
    default: 'Enter your message'
  },
  submitButtonText: {
    type: String,
    default: 'Send Message'
  },
  submittingText: {
    type: String,
    default: 'Sending...'
  }
})

const emit = defineEmits(['submit', 'error'])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const activeField = ref(null)
const componentId = ref(Math.random().toString(36).substr(2, 9))

const nameId = computed(() => `name-${componentId.value}`)
const emailId = computed(() => `email-${componentId.value}`)
const messageId = computed(() => `message-${componentId.value}`)
const nameErrorId = computed(() => `name-error-${componentId.value}`)
const emailErrorId = computed(() => `email-error-${componentId.value}`)
const messageErrorId = computed(() => `message-error-${componentId.value}`)

onMounted(() => {
  // Focus first input on mount
  nextTick(() => {
    const firstInput = document.getElementById(nameId.value)
    if (firstInput) firstInput.focus()
  })
})

const handleFieldFocus = (field) => {
  activeField.value = field
  // Clear error when field is focused
  if (errors.value[field]) {
    errors.value[field] = ''
  }
}

const handleFieldBlur = (field) => {
  // Validate field on blur
  validateField(field)
}

const validateField = (field) => {
  const value = form.value[field]
  let error = ''

  if (!value) {
    error = 'This field is required'
  } else if (field === 'name') {
    if (value.length < 2) {
      error = 'Name must be at least 2 characters long'
    } else if (value.length > 50) {
      error = 'Name must be less than 50 characters'
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      error = 'Name should only contain letters and spaces'
    }
  } else if (field === 'email' && !/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(value)) {
    error = 'Please enter a valid email address'
  } else if (field === 'message' && value.length < 10) {
    error = 'Message must be at least 10 characters long'
  } else if (field === 'message' && value.length > 1000) {
    error = 'Message must be less than 1000 characters'
  }

  errors.value[field] = error
  return !error
}

const validateForm = () => {
  const isNameValid = validateField('name')
  const isEmailValid = validateField('email')
  const isMessageValid = validateField('message')

  return isNameValid && isEmailValid && isMessageValid
}

const focusField = (fieldName) => {
  const field = document.getElementById(`${fieldName}-${componentId.value}`)
  if (field) {
    field.focus()
    activeField.value = fieldName
  }
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    message: ''
  }
  errors.value = {
    name: '',
    email: '',
    message: ''
  }
  
  // Focus first field after reset
  nextTick(() => {
    focusField('name')
  })
}

const handleSubmit = async () => {
  if (validateForm()) {
    isSubmitting.value = true
    
    try {
      // Emit the form data to parent
      emit('submit', { ...form.value })
      
      // Reset form after successful submission
      nextTick(() => {
        resetForm()
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      emit('error', error)
    } finally {
      isSubmitting.value = false
    }
  } else {
    // Focus the first field with an error
    const firstErrorField = Object.keys(errors.value).find(field => errors.value[field])
    if (firstErrorField) {
      focusField(firstErrorField)
    }
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

input.invalid,
textarea.invalid {
  border-color: #dc3545;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.submit-button {
  background-color: #4a90e2;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #357abd;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-button[aria-busy="true"] {
  position: relative;
  color: transparent;
}

.submit-button[aria-busy="true"]::after {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 50%;
  left: 50%;
  margin: -0.5rem 0 0 -0.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: button-loading-spinner 0.6s linear infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
</style> 