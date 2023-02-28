import Test from "./Test.vue";
import Test2 from "./Test2.vue";
import VFormGroup from './VFormGroup.vue'

export {
    Test,
    Test2,
    VFormGroup
}

declare module "@vue/runtime-core" {
    interface GlobalComponents {
        Test: typeof Test,
        Test2: typeof Test2,
        VFormGroup: typeof VFormGroup
    }
}
