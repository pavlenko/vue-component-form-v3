import 'bootstrap-5/scss/bootstrap.scss'

import {createApp} from 'vue'
import {VFormPlugin} from "@pe/vue-component-form-v3/src/main";
import App from './App.vue'

const app = createApp(App)

app.use(VFormPlugin);
app.mount('#app')
