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
        <FormSelect :name="id" />
    </form>
</template>
<style scoped>
form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
}
</style>