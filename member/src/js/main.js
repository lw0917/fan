require.config({
    baseUrl:'/js/',
    paths:{
        flex:'./libs/flexible',
        bscroll:'./libs/better-scroll',
        swiper:'./libs/swiper.min',
        jquery:'./libs/jquery',
        index:'./page/index'
    }
  
})
require(['bscroll','swiper','jquery','flex','index'],function(BScroll,Swiper,$){

})