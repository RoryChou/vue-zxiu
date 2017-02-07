/**
 * Created by Administrator on 2017/2/6.
 */
var Vue = require('vue');
var FooterNav = require('./components/footer-nav/footer-nav.vue');
require('./utils/js/rem.js');

new Vue({
    el: '#app',
    components: {
        'footer-nav': FooterNav
    },
    router:FooterNav.router
 });



