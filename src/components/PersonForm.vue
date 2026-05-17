<template>
  <div class="card">
    <h2>Add New Person</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div class="form-group">
        <label>Year of Birth:</label>
        <input type="number" v-model="year" required />
      </div>
      <div class="form-group">
        <label>Weight (kg):</label>
        <input type="number" step="0.1" v-model="weight" required />
      </div>
      <div class="form-group">
        <label>Height (m):</label>
        <input type="number" step="0.01" v-model="height" required />
      </div>
      <button type="submit" class="btn">Add Person</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PersonForm',
  data() {
    return {
      name: '',
      year: '',
      weight: '',
      height: ''
    }
  },
  methods: {
    submitForm() {
      const newPerson = {
        name: this.name,
        year: this.year,
        weight: this.weight,
        height: this.height
      };
      this.$emit('add-person', newPerson);
      this.name = '';
      this.year = '';
      this.weight = '';
      this.height = '';
    }
  }
}
</script>
