<script setup lang="ts">
</script>
<template>
    <header>
        <div class="logo">Motomachi International Hotel</div>
    </header>
</template>
<style scoped>
header {
    display: flex;
    justify-content: center;
    border-bottom: var(--bg-color) 1px solid;
    background: #FFF;
    filter: drop-shadow(0 2px 2px var(--drop-shadow-color));
}



.logo {
    color: var(--logo-color);
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 6rem;
}
</style>