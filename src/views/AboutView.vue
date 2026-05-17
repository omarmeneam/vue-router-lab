<template>
  <div class="card">
    <h2 class="section-title">About Vue Router Lab</h2>
    <p>This application demonstrates the following core Vue and Vue Router concepts:</p>
    <ul style="margin-left: 20px; line-height: 1.6;">
      <li><strong>Vue Router:</strong> Maps URL paths to specific Vue components.</li>
      <li><strong>SPA Navigation:</strong> Provides seamless page transitions without full browser reloads.</li>
      <li><strong>router-link:</strong> Used instead of traditional `&lt;a&gt;` tags to change the route dynamically.</li>
      <li><strong>router-view:</strong> Acts as a placeholder where the active route's component is displayed.</li>
      <li><strong>Components:</strong> Modular, reusable pieces of UI like headers, footers, and cards.</li>
      <li><strong>Props:</strong> Used to pass the shared `persons` state down to the views.</li>
      <li><strong>Emits:</strong> Used by the form component to send the new person data back up to the parent `App.vue`.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>
