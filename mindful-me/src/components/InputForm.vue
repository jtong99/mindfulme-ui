<template>
  <div class="w-full">
    <label class="block font-medium text-gray-700 mb-1 text-left" :for="id">{{ label }}</label>
    <input
      class="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
    />
  </div>
</template>

<script setup>
defineEmits(['update:modelValue'])
defineProps({
  label: String,
  id: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  modelValue: String,
})
</script>
