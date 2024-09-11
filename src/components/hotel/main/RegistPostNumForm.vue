<script setup lang="ts">
import FormLabel from './form/FormLabel.vue'
import FormInput from './form/FormInput.vue'
import FormButton from './form/FormButton.vue'
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
        <div class="post-input">
            <FormInput :width=200 mode="numeric" :name="id" :required="required" />
            <FormButton></FormButton>
        </div>
    </form>
</template>
<style scoped>
form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
}

.post-input {
    display: flex;
}
</style>