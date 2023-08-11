<template>
<div>
  <h1>
    {{ props.title }}
  </h1>
  <h2>
    {{ props.description }}
  </h2>
</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
h1,
h2 {
  text-align: center;
  color: #043953;
}
</style>
