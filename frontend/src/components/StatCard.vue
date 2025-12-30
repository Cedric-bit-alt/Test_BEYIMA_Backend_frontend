<template>
  <div class="bg-white rounded shadow p-4">
    <p class="text-gray-500 text-sm">{{ title }}</p>
    <p class="text-2xl font-bold">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number]
})
</script>
