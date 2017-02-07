<template>
    <footer class="nav">
        <ul @click='which'>
            <li>
                <a href="#home">
                    <span class="iconfont icon-shouyeshouye "></span>
                    首页
                </a>
            </li>
            <li>
                <a href="#fenlei">
                    <span class="iconfont icon-fenlei "></span>
                    分类
                </a>
            </li>
            <li>
                <a href="#cart">
                    <span class="iconfont icon-gouwuche"></span>
                    购物车
                </a>
            </li>
            <li>
                <a href="#myshow">
                    <span class="iconfont icon-iconfontwode "></span>
                    我的秀
                </a>
            </li>
            <li>
                <a href="#more">
                    <span class="iconfont icon-gengduo "></span>
                    更多
                </a>
            </li>
        </ul>
    </footer>
</template>

<script>
    var Vue = require('vue');
    var VueRouter = require('vue-router');
    var Home = require('../home/home.vue');
    var Fenlei = require('../fenlei/fenlei.vue');
    var Cart = require('../cart/cart.vue');
    var MyShow = require('../my-show/my-show.vue');
    var More = require('../more/more.vue');

    Vue.use(VueRouter);
    var router = new VueRouter({
        routes: [
            { path: '/', component: Home },
            { path: '/home', component: Home },
            { path: '/fenlei', component: Fenlei },
            { path: '/cart', component: Cart },
            { path: '/myshow', component: MyShow },
            { path: '/more', component: More }
        ]
    });
   module.exports = {
       name: 'footer-nav',
       router: router,
       methods: {
           which: function (e) {
               console.log(e)
           }
       }
   }
</script>

<style>
    @import "index.css";
</style>