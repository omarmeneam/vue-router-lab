<template>
  <div class="card">
    <h2 class="section-title">Welcome to BMI Calculator SPA</h2>
    <p>This is a modern Single Page Application built with Vue.js and Vue Router.</p>
    <p>Use the sidebar menu to navigate through the application without page reloads. You can add new persons, calculate their Body Mass Index (BMI), and view the list of all added individuals.</p>
    <div style="margin-top: 20px;">
      <router-link to="/" class="btn" style="text-decoration: none; display: inline-block;">Get Started</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
