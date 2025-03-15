<template>
  <div class="form-container">
    <div class="label">Sign Up</div>

    <InputForm
      label="First Name"
      id="signup-first-name"
      v-model="firstName"
      placeholder="Enter your first name"
    />

    <InputForm
      label="Last Name"
      id="signup-last-name"
      v-model="lastName"
      placeholder="Enter your last name"
    />

    <InputForm
      label="Email"
      id="signup-email"
      v-model="email"
      placeholder="Enter your username"
    />

    <InputForm
      label="Password"
      id="signup-password"
      type="password"
      v-model="password"
      placeholder="Enter your password"
    />

    <InputForm
      label="Confirm Password"
      id="signup-confirm-password"
      type="password"
      v-model="confirmPassword"
      placeholder="Confirm your password"
    />

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <BasicButton
      label="Sign Up"
      action="sign-up"
      btnClass="bg-blue-500 text-white w-full"
      @click="handleSignUp"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import InputForm from '@/components/InputForm.vue'
import BasicButton from '@/components/BasicButton.vue'
import { signup } from '@/api/api'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const userData = ref('')

const handleSignUp = () => {
  const payload = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
  }

  const hasEnteredAllDetails = computed(() => {
    return email.value && password.value && firstName.value && lastName.value
  })

  const passwordMatches = computed(() => {
    return password.value === confirmPassword.value
  })

  if (!hasEnteredAllDetails.value) {
    errorMessage.value = 'Please fill in all fields.'
  } else if (!passwordMatches.value) {
    errorMessage.value = 'Password does not match.'
  }

  if (hasEnteredAllDetails.value && passwordMatches.value) {
    signup(payload)
      .then((response) => {
        errorMessage.value = ''
        console.log('API response', response)
        userData.value = response.data
        if (response.success) {
            // route to questionnaire
        }
      })
      .catch((error) => {
        errorMessage.value = error
        console.error('Error while calling signup api', error)
      })
  }
}
</script>

<style scoped lang="scss">
.form-container {
  //   width: 300px;
  //   margin: auto;
  //   padding: 20px;
  //   border: 1px solid #ddd;
  //   border-radius: 5px;
  @apply bg-teal-100 flex flex-col gap-6 items-center font-mono py-7 w-96 m-auto my-4 p-6 border rounded-md text-center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  //   text-align: center;
}

.label {
  //   margin-bottom: 15px;
  @apply font-spaceMono text-3xl mb-4;
}

.error {
  //   color: red;
  //   font-size: 14px;
  @apply text-red-600 text-sm;
}
</style>
