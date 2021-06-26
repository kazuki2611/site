
$(function () {
    $('.is-hamburger').click(function () {
        $('.p-dropdown-menu__list').slideToggle();
    });
});
jQuery(function ($) {

    //質問をクリック
    $(".c-faq__titile").click(function () {




        $(".c-faq__titile").not(this).next().slideUp(300);




        $(this).next().slideToggle(300);


    });
    $(window).resize(function() {
        $(".p-dropdown-menu__list").css('display','');
    });
});

