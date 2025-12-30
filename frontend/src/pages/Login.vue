<template>
  <div class="flex items-center justify-center h-screen bg-gray-900 text-white">
    <form
      @submit.prevent="handleLogin"
      class="bg-gray-800 p-8 rounded w-[400px]"
    >
      <h1 class="text-3xl font-bold mb-6 text-center">Connexion</h1>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full p-2 mb-4 text-black"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Mot de passe"
        class="w-full p-2 mb-4 text-black"
      />

      <button
        type="submit"
        class="w-full bg-black border px-4 py-2 rounded"
        :disabled="auth.loading"
      >
        {{ auth.loading ? 'Connexion...' : 'Se connecter' }}
      </button>

      <p v-if="auth.error" class="text-red-400 mt-4 text-center">
        {{ auth.error }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  await auth.login(email.value, password.value)

  // ✅ REDIRECTION SI SUCCÈS
  if (auth.token) {
    router.push('/dashboard')
  }
}
</script>
