<template>
  <div class="card">
    <h2 class="section-title">Welcome to BMI Calculator SPA</h2>
    <p>This is a modern Single Page Application built with Vue.js, Vue Router, and JSON Server Backend.</p>
    
    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid var(--accent);">
      <h3>Quick Statistics</h3>
      <ul style="margin-left: 20px; margin-top: 10px;">
        <li><strong>Total Persons:</strong> {{ persons.length }}</li>
        <li><strong>Average BMI:</strong> {{ averageBMI }}</li>
        <li><strong>Highest BMI:</strong> {{ highestBMI }}</li>
        <li><strong>Lowest BMI:</strong> {{ lowestBMI }}</li>
      </ul>
    </div>

    <div style="margin-top: 20px;">
      <router-link to="/" class="btn" style="text-decoration: none; display: inline-block;">Get Started</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    persons: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    averageBMI() {
      if (this.persons.length === 0) return 0;
      const total = this.persons.reduce((sum, p) => sum + Number(p.bmi), 0);
      return (total / this.persons.length).toFixed(2);
    },
    highestBMI() {
      if (this.persons.length === 0) return 0;
      return Math.max(...this.persons.map(p => Number(p.bmi))).toFixed(2);
    },
    lowestBMI() {
      if (this.persons.length === 0) return 0;
      return Math.min(...this.persons.map(p => Number(p.bmi))).toFixed(2);
    }
  }
}
</script>
