<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    class="border font-semibold py-2 px-4 rounded-lg shadow-md"
    :class="btnClass"
  >
    <div>{{ props.label }}</div>
  </button>
</template>

<script setup>
const emits = defineEmits(['emitClick'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
    required: true,
  },
  btnClass: {
    type: String,
  },
  width: {
    type: String,
    default: "w-28"
  }
})

const handleClick = () => {
  emits('emitClick', props.action)
  console.log('emit', props.action)
}
</script>
