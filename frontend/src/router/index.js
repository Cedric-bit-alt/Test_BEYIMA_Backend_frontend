import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Dashboard from '../pages/Dashboard.vue'
import ProjectList from '../pages/ProjectList.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import OrganizationList from '../pages/OrganizationList.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/projects', component: ProjectList },
  {path: '/organizations', component: OrganizationList },
  { path: '/projects/:id', component: ProjectDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//export default router
export default createRouter({
  history: createWebHistory(),
  routes,
})