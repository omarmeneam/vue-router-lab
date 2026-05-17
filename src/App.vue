<template>
  <div id="app">
    <AppHeader />
    <div class="layout">
      <AppSidebar />
      <div class="main-content">
        <main class="content-area">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component 
                :is="Component" 
                :persons="persons"
                :last-person="lastPerson"
                @add-person="addPerson"
                @delete-person="deletePerson"
              />
            </transition>
          </router-view>
        </main>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import axios from 'axios'
import AppSidebar from './components/AppSidebar.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppSidebar,
    AppHeader,
    AppFooter
  },
  data() {
    return {
      persons: []
    }
  },
  computed: {
    lastPerson() {
      if (this.persons.length === 0) return null;
      return this.persons[this.persons.length - 1];
    }
  },
  mounted() {
    axios.get('http://localhost:3000/persons')
      .then(response => {
        this.persons = response.data;
      })
      .catch(err => console.error('Error fetching persons:', err));
  },
  methods: {
    addPerson(person) {
      axios.post('http://localhost:3000/persons', person)
        .then(response => {
          this.persons.push(response.data);
        })
        .catch(err => console.error('Error adding person:', err));
    },
    deletePerson(id) {
      axios.delete(`http://localhost:3000/persons/${id}`)
        .then(() => {
          this.persons = this.persons.filter(p => p.id !== id);
        })
        .catch(err => console.error('Error deleting person:', err));
    }
  }
}
</script>
