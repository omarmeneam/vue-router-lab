<template>
  <div class="card" style="text-align: center; color: #7f8c8d;">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',
  props: {
    message: {
      type: String,
      default: 'No data available.'
    }
  }
}
</script>
