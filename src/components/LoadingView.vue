<template>
<div class="loadingWrapper">
    <div class="loadingText">
        Loading
    </div>
    <img :src="loadingIcon" class="loadingIcon" />
</div>
</template>

<script setup>
import loadingIcon from '../assets/loadingIcon.svg'
</script>

<style scoped>
.loadingWrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loadingText {
    font-size: 40px;
    font-weight: 700;
    color: #043953;
}
.loadingIcon {
    width: 75px;
    height: 60px;
}
</style>
