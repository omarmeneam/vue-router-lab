<template>
  <aside class="sidebar">
    <div class="sidebar-title">Menu</div>
    <router-link to="/" class="menu-link">Add Person</router-link>
    <router-link to="/last" class="menu-link">Last Added</router-link>
    <router-link to="/list" class="menu-link">Person List</router-link>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar'
}
</script>
