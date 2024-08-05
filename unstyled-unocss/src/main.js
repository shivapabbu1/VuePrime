import { createApp } from 'vue'
import 'virtual:uno.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Panel from "primevue/panel";

const app = createApp(App);
app.component('Panel', Panel);
app.use(PrimeVue, {unstyled: true, pt: {
    panel: {
        header: () => ({
            class: [
                'flex items-center justify-between', 
                'px-5 pt-5 bg-purple-500 text-red rounded-tl-lg rounded-tr-lg', 
            ]
        }),
        title: 'leading-none font-bold',
        content: {
            class: [
                'px-5 pb-3 pt-2 bg-purple-500  text-white last:rounded-br-lg last:rounded-bl-lg',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' 
            ]
        }
    }
}});

app.mount('#app');