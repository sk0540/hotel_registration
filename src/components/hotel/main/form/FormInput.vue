<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    width: {
        type: Number,
        default: null,
    }
});

const inputStyle = computed(() => {
    if (props.width) {
        return { width: props.width - 4 + 'px' };
    } else {
        return {};
    }
});
</script>
<template>
    <input :style="inputStyle"></input>
</template>
<style scoped>
input {
    align-self: stretch;
    height: 2.25rem;
    border: var(--border-color) solid 1px;
    border-radius: 0.25rem;
}
</style>