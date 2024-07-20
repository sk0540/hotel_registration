<script setup lang="ts">
import FormLabel from './form/FormLabel.vue'
import FormSelect from './form/FormSelect.vue'
import { isLabeledStatement } from 'typescript';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    required: {
        type: Boolean,
    }
});

</script>
<template>
    <form>
        <FormLabel :item="id" />
        <FormSelect />
    </form>
</template>
<style scoped>
form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    margin: 0.875rem 0;
}
</style>