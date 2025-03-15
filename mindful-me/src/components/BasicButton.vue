<template>
  <button @click="handleClick" :disabled="disabled" class="border font-semibold py-2 px-4 rounded-lg shadow-md"
    :class="[btnClass, radius]">
    <div>{{ label }}</div>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
// const emits = defineEmits(['emitClick'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  action: {
    type: String,
    required: true,
  },
  btnClass: {
    type: String,
  },
})

const handleClick = () => {
  if (props.action === 'sign-in') {
    router.push('/sign-in');
  } else if (props.action === 'sign-up') {
    router.push('/sign-up');
  }
  console.log('emit', props.action)
}
</script>
