<template>
  <div class="form-container">
    <div class="label">Sign In</div>

    <InputForm
      label="Email"
      id="signin-email"
      v-model="email"
      placeholder="Enter your email"
    />

    <InputForm
      label="Password"
      id="signin-password"
      type="password"
      v-model="password"
      placeholder="Enter your password"
    />

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <BasicButton
      label="Sign In"
      action="sign-in"
      btnClass="bg-green-500 text-white w-full"
      @click="handleSignIn"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputForm from '@/components/InputForm.vue'
import BasicButton from '@/components/BasicButton.vue'
import { signin } from '@/api/api'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const userData = ref('')

const handleSignIn = () => {
  console.log('username', email.value)
  console.log('password', password.value)
  const payload = {
    email: email.value,
    password: password.value,
  }
  console.log("all details", !email.value || !password.value)
  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields.'
  } else {
    signin(payload)
      .then((response) => {
        errorMessage.value = ""
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
  //   if (!username.value || !password.value) {
  //     errorMessage.value = "Please fill in all fields.";
  //     return;
  //   }

  //   errorMessage.value = "";
  //   alert(`Sign-in successful for: ${username.value}`);
}
</script>

<style scoped lang="scss">
.form-container {
  //   width: 300px;
  //   margin: auto;
  //   padding: 20px;
  //   border: 1px solid #ddd;
  //   border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  //   text-align: center;
  @apply bg-teal-100 flex flex-col gap-6 items-center font-mono py-7 w-64 sm:w-96 m-auto p-6 border rounded-md text-center;
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
