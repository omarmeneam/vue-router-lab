<template>
  <div>
    <h2 class="section-title">Person List</h2>
    <div style="margin-bottom: 20px;">
      <input type="text" v-model="searchQuery" placeholder="Search by name..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
    </div>
    <div v-if="filteredPersons.length > 0">
      <PersonCard v-for="person in filteredPersons" :key="person.id" :person="person" @delete="$emit('delete-person', $event)" />
    </div>
    <EmptyState v-else message="No persons match the current search." />
  </div>
</template>

<script>
import PersonCard from '../components/PersonCard.vue'
import EmptyState from '../components/EmptyState.vue'

export default {
  name: 'PersonListView',
  components: {
    PersonCard,
    EmptyState
  },
  props: {
    persons: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    filteredPersons() {
      return this.persons.filter(p => p.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  }
}
</script>
