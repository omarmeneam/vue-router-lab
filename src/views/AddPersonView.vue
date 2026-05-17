<template>
  <div>
    <PersonForm @add-person="handleAddPerson" />
  </div>
</template>

<script>
import PersonForm from '../components/PersonForm.vue'

export default {
  name: 'AddPersonView',
  components: {
    PersonForm
  },
  methods: {
    handleAddPerson(person) {
      this.$emit('add-person', person);
    }
  }
}
</script>
