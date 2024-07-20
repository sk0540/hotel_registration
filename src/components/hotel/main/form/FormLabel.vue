<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
    item: {
        type: String,
        required: true,
    }
});
</script>
<template>
    <label>
        <span class="mainlang">{{ $t(`${props.item}`, {}, { locale: 'ja' }) }}</span>
        <span class="sublang">{{ $t(`${props.item}`, {}, { locale: 'en' }) }}</span>
    </label>
</template>
<style scoped>
label {
    margin: 0.625rem 0;
}

label span {
    margin-right: 0.75rem;
}

.sublang {
    font-size: 17px;
}
</style>