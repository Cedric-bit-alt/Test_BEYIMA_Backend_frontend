<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">Projets</h1>
    <div v-if="loading">Chargement...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-if="!loading && projects.length === 0">Aucun projet trouvé.</div>
    <ul v-else>
      <li v-for="p in projects" :key="p.id">
        <router-link :to="`/projects/${p.id}`" class="block p-2 border rounded mb-2">
          {{ p.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getProjects } from '../api/projects'

const projects = ref([])
const loading = ref(false)
const error = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    const res = await getProjects()
    projects.value = res.data
  } catch (err) {
    error.value = err.response?.data?.message || 'Erreur inconnue'
  } finally {
    loading.value = false
  }
})
</script>
