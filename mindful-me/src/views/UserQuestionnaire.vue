<template>
  <div class="mx-auto">
      <div v-for="(questionnaire, index) in questionnaires" :key="index" class="mx-auto mb-4">
        <div>
          <span>{{ questionnaire.question_no }}. </span>{{ questionnaire.question }}
        </div>
        <div v-if="questionnaire.haveSlider">
          <VueSlider max="5" min="1" width="300px" v-model="questionnaire.value" />
        </div>
        <div v-else>need options</div>
      </div>
      <div class="input-container">
        <label>Notes</label>
        <input class="input-field" type="text" placeholder="Please add notes" v-model="inputValue" />
      </div>
      <BasicButton
        label="Submit"
        btnClass="border font-semibold py-2 px-4 shadow-md bg-blue-500 hover:bg-white hover:border-black text-white hover:text-black"
        @click="handleSubmit"
      />
  </div>
</template>

<script setup>
import VueSlider from 'vue-3-slider-component'
import BasicButton from '@/components/BasicButton.vue'
import { checkins } from '@/api/api'
import { ref } from 'vue'

const errorMessage = ref('')
const inputValue = ref('')
const questionnaires = {
  mood_rating: {
    question_no: 1,
    question: 'How is your mood?',
    value: 0,
    haveSlider: true,
  },
  primary_emotion: {
    question_no: 2,
    question: 'What are your primary emotions?',
    value: 0,
    haveSlider: false,
  },
  intensity: {
    question_no: 3,
    question: 'How intense do you feel at the moment?',
    value: 0,
    haveSlider: true,
  },
  energy_level: {
    question_no: 4,
    question: 'How energetic do you feel at the moment?',
    value: 0,
    haveSlider: true,
  },
  stress_level: {
    question_no: 5,
    question: 'How stressful do you feel at the moment?',
    value: 0,
    haveSlider: true,
  },
  wellbeing: {
    question_no: 6,
    question: 'How would you rate your overall wellbeing today?',
    value: 0,
    haveSlider: true,
  },
}

const handleSubmit = () => {
  console.log('ques', questionnaires)
  const payload = {
    mood_rating: questionnaires.mood_rating.value,
    primary_emotion: questionnaires.primary_emotion.value,
    intensity: questionnaires.intensity.value,
    energy_level: questionnaires.energy_level.value,
    stress_level: questionnaires.stress_level.value,
    wellbeing: questionnaires.wellbeing.value,
    // notes:
  }
  checkins(payload)
    .then((response) => {
      errorMessage.value = ''
      console.log('API response', response)
      // userData.value = response.data
    })
    .catch((error) => {
      errorMessage.value = error.response.data.message
      console.error('Error while calling signup api', error)
    })
}
</script>

<style scoped>
.input-container {
  margin-bottom: 1rem;
}

.input-field {
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 8px;
}
</style>
