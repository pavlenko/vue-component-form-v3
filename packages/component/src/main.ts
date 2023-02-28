import type {Plugin} from 'vue'
//import PEModal from './components/PEModal.vue';
//import PEModalContainer from './components/PEModalContainer.vue';

import * as components from "./components";
//import {VFormInput} from "./components";

export const VFormPlugin: Plugin = {
    install(app) {
        //TODO components
        console.log(Object.keys(components));

        Object.entries(components).forEach(([key, value], index) => {
            app.component(key, value);
        });
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
