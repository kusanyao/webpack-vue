/**
 * app
 */

import Vue   from 'vue';
import content from '../components/layout/content.vue';
import sidebar from '../components/layout/sidebar.vue';

import '../css/main.css';
// import '../css/main.less';

new Vue({
    el: '#app',
    components: {
        'app-sidebar': sidebar,
        'app-content': content,
    }
})