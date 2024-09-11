<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    width: {
        type: Number,
        default: null,
    },
    type: {
        type: String,
        default: 'text',
    },
    name: {
        type: String,
        required: true,
    },
    mode: {
        type: String as () => 'text' | 'search' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal',
        default: 'text',
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
    <input :style="inputStyle" :inputmode="mode" :id="name" :name="name" />
</template>
<style scoped>
input {
    align-self: stretch;
    height: 2.125rem;
    border: var(--border-color) solid 1px;
    border-radius: 0.25rem;
}
</style>