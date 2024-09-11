<script setup lang="ts">
import { ref } from 'vue'
import HotelTitle from './main/HotelTitle.vue'
import RegistForm from './main/RegistForm.vue'
import RegistSelectForm from './main/RegistSelectForm.vue'
import RegistPostNumForm from './main/RegistPostNumForm.vue'
import RegistButton from './main/RegistButton.vue'
import RegistBirthDateForm from './main/RegistBirthDateForm.vue'

const userData = ref({});

const itemObject = [
    { 'id': 'name', 'type': 'input', 'required': true },
    { 'id': 'furigana', 'type': 'input', 'required': false },
    { 'id': 'birthdate', 'type': 'birthdate', 'required': true },
    { 'id': 'email', 'type': 'input', 'required': true },
    { 'id': 'pass', 'type': 'input', 'required': true },
    { 'id': 'region', 'type': 'select', 'required': true },
    { 'id': 'postcode', 'type': 'post', 'required': true },
    { 'id': 'city', 'type': 'input', 'required': true },
    { 'id': 'address', 'type': 'input', 'required': true },
    { 'id': 'registry', 'type': 'input', 'required': false },
    { 'id': 'phone', 'type': 'input', 'required': true }];

const getComponent = (type: string) => {
    switch (type) {
        case 'select':
            return RegistSelectForm;
        case 'birthdate':
            return RegistBirthDateForm;
        /*case 'password':
          return RegistPasswordForm;*/
        case 'post':
            return RegistPostNumForm;
        default:
            return RegistForm; // Or handle unknown types
    }
}

const onSubmit = () => {
    console.log('Form submitted:');
}
</script>

<template>
    <main>
        <HotelTitle />
        <form method="post">
            <template v-for="item in itemObject" :key="item.id">
                <component :is="getComponent(item.type)" :id="item.id" :required="item.required" />
            </template>
            <RegistButton />
        </form>
    </main>
</template>

<style scoped>
main {
    width: 37.5rem;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
}

.require-info {
    align-self: flex-start;
    margin: 0.625rem 0;
}
</style>