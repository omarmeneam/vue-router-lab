<template>
  <div class="person-card">
    <h3>{{ person.name }}</h3>
    <p><strong>Year of Birth:</strong> {{ person.yob }}</p>
    <p><strong>Age:</strong> {{ person.age }} years old</p>
    <p><strong>Weight:</strong> {{ person.weight }} kg</p>
    <p><strong>Height:</strong> {{ person.height }} cm</p>
    <p><strong>BMI:</strong> {{ person.bmi }} ({{ person.category }})</p>
    <button @click="$emit('delete', person.id)" class="btn delete-btn">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>
