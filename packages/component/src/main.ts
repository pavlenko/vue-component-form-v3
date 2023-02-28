import type {Plugin} from 'vue'

import * as componentsDefault from "./components/default";
import * as componentsBootstrap3 from "./components/bootstrap3";
import * as componentsBootstrap4 from "./components/bootstrap4";

export enum VFormPluginTheme {
    DEFAULT,
    BOOTSTRAP_3,
    BOOTSTRAP_4,
    BOOTSTRAP_5
}

export interface VFormPluginOptions {
    theme?: VFormPluginTheme
}

export const VFormPlugin: Plugin = {
    install(app, options: VFormPluginOptions) {
        options = options || <VFormPluginOptions>{};

        let components;
        if (VFormPluginTheme.BOOTSTRAP_3 === options.theme) {
            components = componentsBootstrap3;
        } else if (VFormPluginTheme.BOOTSTRAP_4 === options.theme) {
            components = componentsBootstrap4;
        } else if (VFormPluginTheme.BOOTSTRAP_5 === options.theme) {
            components = componentsDefault;
        } else {
            components = componentsDefault;
        }

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
