import Test from "./Test.vue";
import Test2 from "./Test2.vue";
import VFormGroup from './VFormGroup.vue'
import VFormInput from "./VFormInput.vue";
import VForm from "./VForm.vue";

export {
    Test,
    Test2,
    VForm,
    VFormGroup,
    VFormInput
}

declare module "@vue/runtime-core" {
    interface GlobalComponents {
        Test: typeof Test,
        Test2: typeof Test2,
        VForm: typeof VForm,
        VFormGroup: typeof VFormGroup,
        VFormInput: typeof VFormInput
    }
}
