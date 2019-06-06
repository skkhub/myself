/**
* @file
* @author sunkeke(sunkeke@baidu.com)
* @date 2019-05-31
*/

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './common/reset.less';
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
