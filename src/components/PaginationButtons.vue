<template>
<div class="buttonWrapper">
    <button
    @click="props.prevPage"
    :disabled="props.disablePrev"
    :class="props.disablePrev ? 'disabledButton' : 'paginationButton'">
        Prev
    </button>
    <button
    @click="props.nextPage"
    :disabled="props.disableNext"
    :class="props.disableNext ? 'disabledButton' : 'paginationButton'">
        Next
    </button>
</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  nextPage: Function,
  prevPage: Function,
  disableNext: Boolean,
  disablePrev: Boolean
})
</script>

<style scoped>
.buttonWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.paginationButton, .disabledButton {
    font-size: 18px;
    font-weight: 600;
    padding: 8px 16px;
    color: #FFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.paginationButton {
    background-color: #2D93D1;
    cursor: pointer;
}
.paginationButton:hover {
    background-color: #43679B;
}
.disabledButton {
    background-color: #CCC;
    cursor: auto;
}
</style>
