<template>
  <div id="app">
    <AppHeader />
    <div class="layout">
      <AppSidebar />
      <div class="main-content">
        <main class="content-area">
          <router-view 
            :persons="persons"
            :last-person="lastPerson"
            @add-person="addPerson"
          />
        </main>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
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
  methods: {
    addPerson(person) {
      this.persons.push(person);
    }
  }
}
</script>
