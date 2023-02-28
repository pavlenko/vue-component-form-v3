<template>
    <input ref="field" class="form-control" :id="_id" :name="_name" :type="type" :disabled="disabled" :readonly="readonly" v-model="_value" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VFormInput from "../default/VFormInput.vue";
export default defineComponent({
    name: "VFormInput",
    extends: VFormInput
})
</script>

<style scoped>

</style>