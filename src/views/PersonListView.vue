<template>
  <div>
    <h2 class="section-title">Person List</h2>
    <div style="margin-bottom: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
      <input type="text" v-model="searchQuery" placeholder="Search by name..." style="flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 4px; min-width: 200px;" />
      <select v-model="sortQuery" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
        <option value="">No Sorting</option>
        <option value="name">Name A-Z</option>
        <option value="bmiAsc">BMI Low to High</option>
        <option value="bmiDesc">BMI High to Low</option>
        <option value="ageDesc">Age High to Low</option>
      </select>
    </div>

    <div v-if="paginatedPersons.length > 0">
      <PersonCard 
        v-for="person in paginatedPersons" 
        :key="person.id" 
        :person="person" 
        @delete="$emit('delete-person', $event)" 
        @update="$emit('update-person', $event)" 
        @patch="$emit('patch-person', $event)" 
      />
      
      <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
        <button @click="prevPage" :disabled="currentPage === 1" class="btn" style="background-color: #34495e;">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="btn" style="background-color: #34495e;">Next</button>
      </div>
    </div>
    <EmptyState v-else message="No persons match the current criteria." />
  </div>
</template>

<script>
import PersonCard from '../components/PersonCard.vue'
import EmptyState from '../components/EmptyState.vue'

export default {
  name: 'PersonListView',
  components: {
    PersonCard,
    EmptyState
  },
  props: {
    persons: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      searchQuery: '',
      sortQuery: '',
      currentPage: 1,
      itemsPerPage: 5
    }
  },
  computed: {
    filteredPersons() {
      return this.persons.filter(p => p.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    sortedPersons() {
      let result = [...this.filteredPersons];
      if (this.sortQuery === 'name') {
        result.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortQuery === 'bmiAsc') {
        result.sort((a, b) => Number(a.bmi) - Number(b.bmi));
      } else if (this.sortQuery === 'bmiDesc') {
        result.sort((a, b) => Number(b.bmi) - Number(a.bmi));
      } else if (this.sortQuery === 'ageDesc') {
        result.sort((a, b) => Number(b.age) - Number(a.age));
      }
      return result;
    },
    totalPages() {
      return Math.ceil(this.sortedPersons.length / this.itemsPerPage) || 1;
    },
    paginatedPersons() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedPersons.slice(start, end);
    }
  },
  watch: {
    searchQuery() { this.currentPage = 1; },
    sortQuery() { this.currentPage = 1; },
    persons() {
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    }
  }
}
</script>
