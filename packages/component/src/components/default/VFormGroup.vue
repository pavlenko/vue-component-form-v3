<template>
    <div :class="{success: _length === 0, error: _length > 0}">
        <label v-html="label"/>
        <slot/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "VFormGroup",
    props: {
        label: {
            type: String
        },
        error: {
            type:    Object,
            default: function () { return {}; }
        }
    },
    computed: {
        _length: function () {
            const keys = Object.keys(this.error);

            if (keys.length === 0) {
                return -1;
            }

            return Object.keys(this.error).filter((key: string) => {
                return this.error[key] === false;
            }).length
        }
    }
})
</script>

<style scoped>

</style>