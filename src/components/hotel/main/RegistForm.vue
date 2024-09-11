<script setup lang="ts">
import FormLabel from './form/FormLabel.vue'
import FormInput from './form/FormInput.vue'
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

const getMode = (id: string) => {
    switch (id) {
        case 'email':
            return 'email';
        case 'tel':
            return 'tel';
        default:
            return 'text';
    }
};
</script>
<template>
    <form>
        <FormLabel :item="id" />
        <FormInput :name="id" :mode="getMode(id)" :required="required" />
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