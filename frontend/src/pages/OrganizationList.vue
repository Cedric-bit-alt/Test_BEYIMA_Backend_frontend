<script setup>
import { onMounted, ref } from 'vue'
import { getOrganizations } from '@/api/organizations'

const organizations = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await getOrganizations()
    organizations.value = res.data
  } catch (err) {
    error.value = err.response?.data || 'Erreur API'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <h1>Organisations</h1>

    <p v-if="loading">Chargement...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="organizations.length === 0">Aucune organisation</p>

    <ul v-else>
      <li v-for="org in organizations" :key="org.id">
        {{ org.name }}
      </li>
    </ul>
  </div>
</template>
