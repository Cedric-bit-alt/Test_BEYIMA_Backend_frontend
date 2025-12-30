<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-2">Dashboard</h1>
    <p class="text-gray-600 mb-6">
      Organisation : <strong>{{ data?.organization }}</strong>
    </p>

    <!-- Loading -->
    <div v-if="loading">Chargement...</div>

    <!-- Erreur -->
    <div v-if="error" class="text-red-500">{{ error }}</div>

    <!-- Contenu -->
    <div v-if="data" class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Projets" :value="data.projects" />
      <StatCard title="Utilisateurs" :value="data.users" />
      <StatCard title="Transactions" :value="data.transactions" />
    </div>

    <!-- Actions rapides -->
    <div class="mt-6">
      <router-link
        to="/projects"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Voir les projets
      </router-link>
    </div>

    <div class="mt-6">
      <router-link
        to="/organizations"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Voir les organizations
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getDashboardSummary } from '../api/dashboard'
import StatCard from '../components/StatCard.vue'

const loading = ref(false)
const error = ref(null)
const data = ref(null)

onMounted(async () => {
  loading.value = true
  try {
    const res = await getDashboardSummary()
    data.value = res.data
  } catch (e) {
    error.value = 'Impossible de charger le dashboard'
  } finally {
    loading.value = false
  }
})
</script>
