<template>
  <div class="person-card">
    <h3>{{ person.name }}</h3>
    <p><strong>Year of Birth:</strong> {{ person.year }}</p>
    <p><strong>Weight:</strong> {{ person.weight }} kg</p>
    <p><strong>Height:</strong> {{ person.height }} m</p>
    <p><strong>BMI:</strong> {{ bmi }} ({{ bmiCategory }})</p>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: Object
  },
  computed: {
    bmi() {
      const h = parseFloat(this.person.height);
      const w = parseFloat(this.person.weight);
      if (h > 0) {
        return (w / (h * h)).toFixed(2);
      }
      return 0;
    },
    bmiCategory() {
      const b = parseFloat(this.bmi);
      if (b < 18.5) return 'Underweight';
      if (b < 25) return 'Normal weight';
      if (b < 30) return 'Overweight';
      return 'Obese';
    }
  }
}
</script>
