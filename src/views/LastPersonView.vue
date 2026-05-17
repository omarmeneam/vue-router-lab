<template>
  <div>
    <h2 class="section-title">Last Added Person</h2>
    <PersonCard 
      v-if="lastPerson" 
      :person="lastPerson" 
      @delete="$emit('delete-person', $event)" 
      @update="$emit('update-person', $event)" 
      @patch="$emit('patch-person', $event)" 
    />
    <EmptyState v-else message="No persons have been added yet." />
  </div>
</template>

<script>
import PersonCard from '../components/PersonCard.vue'
import EmptyState from '../components/EmptyState.vue'

export default {
  name: 'LastPersonView',
  components: {
    PersonCard,
    EmptyState
  },
  props: {
    lastPerson: {
      type: Object,
      default: null
    }
  }
}
</script>
