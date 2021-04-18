import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import stores from './stores'


const app = createApp(App);
app.config.warnHandler = () => null;


app.use(router).use(stores).mount('#app')
