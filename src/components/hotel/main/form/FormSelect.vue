<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    }
});
</script>
<template>
    <select :id="name" :name="name" />
</template>
<style scoped>
select {
    width: 12.5rem;
    height: 2.5rem;
    border: var(--border-color) solid 1px;
    border-radius: 0.25rem;
}
</style>