<template>
  <div class="searchWrapper">
    <input
    class="searchField"
    v-model="model"
    placeholder="Type here to search..." />
  </div>

</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    searchInput: String
  },
  setup (props, { emit }) {
    const model = computed({
      get: () => props.searchInput,
      set: (value) => emit('update:searchInput', value)
    })

    return { model }
  }
}
</script>

<style scoped>
.searchWrapper {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
}
.searchField {
  flex: 1;
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.searchField {
  flex: 1;
}
input:focus,
select:focus {
  outline: none;
}
</style>
