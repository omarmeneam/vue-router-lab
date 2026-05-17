import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddPersonView from '../views/AddPersonView.vue'
import LastPersonView from '../views/LastPersonView.vue'
import PersonListView from '../views/PersonListView.vue'
import NotFound404View from '../views/NotFound404View.vue'

const routes = [
  { path: '/home', name: 'Home', component: HomeView, meta: { title: 'Home' } },
  { path: '/about', name: 'About', component: AboutView, meta: { title: 'About' } },
  { path: '/', name: 'AddPerson', component: AddPersonView, meta: { title: 'Add Person' } },
  { path: '/last', name: 'LastPerson', component: LastPersonView, meta: { title: 'Last Added' } },
  { path: '/list', name: 'PersonList', component: PersonListView, meta: { title: 'Person List' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound404View, meta: { title: '404 Not Found' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vue Router Lab'
  next()
})

export default router
