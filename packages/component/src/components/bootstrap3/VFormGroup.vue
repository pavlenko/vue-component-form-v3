<template>
    <div :class="{'form-group': true, 'has-success': _length === 0, 'has-error': _length > 0}">
        <label class="control-label" v-html="label" />
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VFormGroup from "../default/VFormGroup.vue";
export default defineComponent({
    name: "VFormGroup",
    extends: VFormGroup
})
</script>

<style scoped>

</style>