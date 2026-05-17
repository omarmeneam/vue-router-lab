<template>
  <div class="card" style="text-align: center; padding: 50px 20px;">
    <h1 style="color: var(--primary); font-size: 3rem; margin-bottom: 10px;">404</h1>
    <h2 class="section-title" style="border: none; padding: 0;">Page Not Found</h2>
    <p style="margin-bottom: 25px;">The URL you entered does not match any known route in this application.</p>
    <router-link to="/" class="btn" style="text-decoration: none; display: inline-block;">Return to Add Person</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound404View'
}
</script>
