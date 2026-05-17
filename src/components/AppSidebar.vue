  <aside class="sidebar">
    <div style="padding: 0 20px 20px; font-weight: bold; font-size: 1.2em;">Menu</div>
    <router-link to="/home" class="menu-link">🏠 Home</router-link>
    <router-link to="/" class="menu-link">➕ Add Person</router-link>
    <router-link to="/last" class="menu-link">🕒 Last Added</router-link>
    <router-link to="/list" class="menu-link">📋 Person List</router-link>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar'
}
</script>
