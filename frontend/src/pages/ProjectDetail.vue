<template>
  <div class="p-4">
    <button @click="$router.back()" class="mb-4 text-blue-500">← Retour</button>
    <div v-if="loading">Chargement...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-if="project">
      <h1 class="text-2xl font-bold">{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getProjectById } from '../api/projects'
import { useRoute } from 'vue-router'

const route = useRoute()
const project = ref(null)
const loading = ref(false)
const error = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    const res = await getProjectById(route.params.id)
    project.value = res.data
  } catch (err) {
    error.value = err.response?.data?.message || 'Erreur inconnue'
  } finally {
    loading.value = false
  }
})
</script>
