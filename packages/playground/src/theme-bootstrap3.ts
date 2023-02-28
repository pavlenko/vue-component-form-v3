import 'bootstrap-3/less/bootstrap.less'

import {createApp} from 'vue'
import {VFormPlugin, VFormPluginOptions, VFormPluginTheme} from "@pe/vue-component-form-v3/src/main";
import App from './App.vue'

const app = createApp(App)

app.use(VFormPlugin, <VFormPluginOptions>{theme: VFormPluginTheme.BOOTSTRAP_3});
app.mount('#app')