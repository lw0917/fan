define([
    'swiper',
    'bscroll',
    'jquery'
], function(Swiper, BScroll,$) {
    new Swiper('.banner',{
        autoplay:{
            delay:2000
        },
        loop:true
    })
    $.ajax({
        url:"./api/namelist",
        dataType:'json',
        success:function(res){
            console.log(res)
        }
    })
});