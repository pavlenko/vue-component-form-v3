<template>
    <form :id="id" :name="name" :novalidate="novalidate">
        <slot />
    </form>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "VForm",
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        novalidate: Boolean
    }
})
</script>

<style scoped>

</style>