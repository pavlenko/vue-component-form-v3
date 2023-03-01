<template>
    <form :id="id"  :name="name" :novalidate="novalidate" :class="{'form-inline': inline}">
        <slot />
    </form>
</template>

<script>
import {defineComponent} from "vue";
import {VForm} from "../default";
export default defineComponent({
    extends: VForm,
    props: {
        inline: Boolean,
    }
})
</script>

<style scoped>

</style>