<template>
    <div>
        <header class="header-home">
            <p>ZXIU 走秀网</p>
        </header>

        <div class="search">
            <input type="text" placeholder="请输入搜索内容">
        </div>
        <div id="container" class="page-1">
            <div class="wrapper">
                <div class="reload" style="display: none">松手刷新页面</div>
                <div class="banner swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="obj in banner">
                            <a href="javascript:;">
                                <img :src='obj' alt="">
                            </a>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

                <div class="main">
                    <ul>
                        <!--js add-->
                        <li class="loading">loading...</li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var Vue = require('vue');
    var VueResource = require('vue-resource');

    Vue.use(VueResource);
    module.exports = {
        data: function () {
            return {
                banner: {}
            }
        },
        created: function () {
            this.$http.jsonp('http://datainfo.duapp.com/shopdata/getBanner.php').then(
                    function (res) {
                        console.log(res.body);
                        this.banner = JSON.parse(res.body[0].goodsBenUrl);
                    },
                    function (res) {
                        console.log('网络错误!',res)
                    }
            )
        }/*,
        filters: {
            test: function (value) {
                console.log(value)
                return JSON.parse(value.body[0].goodsBenUrl)
            }
        }*/
    }
</script>

<style>

</style>