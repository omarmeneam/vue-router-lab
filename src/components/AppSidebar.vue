<template>
  <aside class="sidebar">
    <div class="sidebar-title">Menu</div>
    
    <div class="menu-section">
      <div class="menu-label">Required</div>
      <router-link to="/" class="menu-link">➕ Add Person</router-link>
      <router-link to="/last" class="menu-link">🕒 Last Added</router-link>
      <router-link to="/list" class="menu-link">📋 Person List</router-link>
    </div>

    <div class="menu-section">
      <div class="menu-label">Optional</div>
      <router-link to="/home" class="menu-link">🏠 Home</router-link>
      <router-link to="/about" class="menu-link">ℹ️ About</router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar'
}
</script>
