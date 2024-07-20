<script setup lang="ts">
</script>
<template>
    <h1>
        <span>会員登録</span>
        <span>Member registration</span>
    </h1>
</template>
<style scoped>
h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.125rem;
    margin-bottom: 1.25rem;
}

h1::before,
h1::after {
    content: '';
    height: 1px;
    background-color: var(--border-color);
    width: 4.0625rem;

}

h1 span {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
}
</style>