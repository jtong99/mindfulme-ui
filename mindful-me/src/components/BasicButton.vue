<template>
  <button @click="handleClick" :disabled="disabled" :class="[btnClass, rounded]">
    <div>{{ label }}</div>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

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
  rounded: {
    type: String,
    default: 'rounded-lg',
  },
  hasBorder: {
    type: Boolean,
    default: true,
  },
})

const handleClick = () => {
  if (props.action === 'sign-in') {
    router.push('/sign-in')
  } else if (props.action === 'sign-up') {
    router.push('/sign-up')
  }
  console.log('emit', props.action)
}
</script>
