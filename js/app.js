NProgress.start();

$('.ant-carousel-vertical').slick({
    dots: true,
    autoplay: true,
    speed: 500
});
// new SlimSelect({
//     select: '#single2'
// })
new SlimSelect({
    select: '#single1'
})
new SlimSelect({
    select:'#single'
})

NProgress.done();

