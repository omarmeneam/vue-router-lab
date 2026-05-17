import { createRouter, createWebHistory } from 'vue-router'
import AddPersonView from '../views/AddPersonView.vue'
import LastPersonView from '../views/LastPersonView.vue'
import PersonListView from '../views/PersonListView.vue'

const routes = [
  {
    path: '/',
    name: 'AddPerson',
    component: AddPersonView
  },
  {
    path: '/last',
    name: 'LastPerson',
    component: LastPersonView
  },
  {
    path: '/list',
    name: 'PersonList',
    component: PersonListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
