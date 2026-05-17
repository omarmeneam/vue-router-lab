<template>
  <div class="app-container">
    <AppSidebar />
    <div class="main-content">
      <AppHeader />
      <main class="content-area">
        <AddPersonView @add-person="addPerson" />
        <hr style="margin: 20px 0;">
        <LastPersonView :last-person="lastPerson" />
        <hr style="margin: 20px 0;">
        <PersonListView :persons="persons" />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AddPersonView from './views/AddPersonView.vue'
import LastPersonView from './views/LastPersonView.vue'
import PersonListView from './views/PersonListView.vue'

export default {
  name: 'App',
  components: {
    AppSidebar,
    AppHeader,
    AppFooter,
    AddPersonView,
    LastPersonView,
    PersonListView
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
