import Test from "./Test.vue";
import Test2 from "./Test2.vue";
import VFormGroup from './VFormGroup.vue'
import VFormInput from "./VFormInput.vue";

export {
    Test,
    Test2,
    VFormGroup,
    VFormInput
}

declare module "@vue/runtime-core" {
    interface GlobalComponents {
        Test: typeof Test,
        Test2: typeof Test2,
        VFormGroup: typeof VFormGroup,
        VFormInput: typeof VFormInput
    }
}
