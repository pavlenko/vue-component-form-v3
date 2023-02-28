import Test from "./Test.vue";
import Test2 from "./Test2.vue";

export {
    Test,
    Test2
}

declare module "@vue/runtime-core" {
    interface GlobalComponents {
        Test: typeof Test,
        Test2: typeof Test2,
    }
}
