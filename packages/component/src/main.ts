import type {Plugin} from 'vue'
//import PEModal from './components/PEModal.vue';
//import PEModalContainer from './components/PEModalContainer.vue';

export const PEModalPlugin: Plugin = {
    install(app) {
        //TODO components
        //app.component('PEModal', PEModal);
        //app.component('PEModalContainer', PEModalContainer);
    },
}

/**
 * You must declare all here for proper IDE navigation
 */
declare module "@vue/runtime-core" {
    //Bind to `this` keyword
    interface ComponentCustomProperties {
        //TODO
    }

    interface GlobalComponents {
        //TODO
    }
}
