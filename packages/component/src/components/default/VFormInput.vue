<template>
    <input ref="field" :id="_id" :name="_name" :type="type" :disabled="disabled" :readonly="readonly" v-model="_value" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "VFormInput",
    props: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        type: {
            type: String
        },
        value: {
            type:    [String, Number],
            default: null
        },
        error: {
            type:    Object,
            default: function () { return {}; }
        },
        disabled: {
            type:    Boolean,
            default: false
        },
        readonly: {
            type:    Boolean,
            default: false
        }
    },
    computed: {
        _id: function () { return this.id || '';/*TODO*/ },
        _name: function () { return this.name || '';/*TODO*/ },
        _value: {
            get: function () { return this.value; },
            set: function (value?: string) { this.$emit('input', value); }
        }
    }
})
</script>

<style scoped>

</style>