<template>
  <div>
    <h2 class="section-title">Person List</h2>
    <div v-if="persons.length > 0">
      <PersonCard v-for="person in persons" :key="person.id" :person="person" />
    </div>
    <EmptyState v-else message="The person list is currently empty." />
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
  }
}
</script>
