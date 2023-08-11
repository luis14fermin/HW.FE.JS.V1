<template>
  <main class="mainWrapper" v-if="grid !== null && people.length !== 0">
    <HeaderTitle :title="grid.title" :description="grid.description" />
    <SearchBar v-model:searchInput="searchInput" />
    <PeopleTable
      :gridColumns="grid.columnDefs"
      :people="paginatedPeople"
      :customStyles="grid.tableStyles"
    />
    <PaginationButtons
      :nextPage="nextPage"
      :prevPage="prevPage"
      :disableNext="disableNext"
      :disablePrev="disablePrev"
    />
  </main>
  <LoadingView v-else />
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import HeaderTitle from './components/HeaderTitle.vue'
import PeopleTable from './components/PeopleTable.vue'
import PaginationButtons from './components/PaginationButtons.vue'
import SearchBar from './components/SearchBar.vue'
import LoadingView from './components/LoadingView.vue'
import { filterListDuplicates } from './utilities/utilities'
import { fetchData } from './services/apiServices'
import { handleFilteredPeople } from './services/searchServices'
import { handleNextPage, handlePrevPage, handlePaginatedPeople } from './services/paginationServices'

// refs
const loading = ref(true)
const grid = ref(null)
const people = ref([])
const searchInput = ref('')
const currentPage = ref(1)
const itemsPerPage = 4

// computed values
const filteredPeople = computed(() => handleFilteredPeople(searchInput, people))

const totalPages = computed(() => Math.ceil(filteredPeople.value.length / itemsPerPage))
const paginatedPeople = computed(() => handlePaginatedPeople(filteredPeople, currentPage, itemsPerPage))

const disableNext = computed(() => currentPage.value === totalPages.value || paginatedPeople.value.length === 0)
const disablePrev = computed(() => currentPage.value === 1 || paginatedPeople.value.length === 0)

// watchers
watch(searchInput, () => {
  currentPage.value = 1
})

// methods
const nextPage = () => handleNextPage(currentPage, totalPages)
const prevPage = () => handlePrevPage(currentPage)

// fetch data
onMounted(() => {
  // I'd use an env variable in a realistic fetch situation
  Promise.all([
    fetchData('/data/grid.json'),
    fetchData('/data/people.json')
  ])
    .then(([gridData, peopleData]) => {
      grid.value = gridData
      people.value = filterListDuplicates(peopleData)
      loading.value = false
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
}
.mainWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
  width: 100%;
  margin: 0px 20px 60px 20px;
}
body {
  background-color: #e8e8ea;
  margin: 0;
  padding: 0;
}
</style>
