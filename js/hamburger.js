$(function() {
  
  
  $(".is-hamburger").click(function() {
   
     $(".p-hamburger").toggleClass("is-open");
     $(".p-dropdown-menu__list").toggleClass("is-open");
    
  })
  // 画面リサイズでリロードさせる設定
  var timer = 0;
  var currentWidth = window.innerWidth;
$(window).resize(function(){
      if (currentWidth == window.innerWidth) {
          return;
      }
      if (timer > 0) {
          clearTimeout(timer);
      }

      timer = setTimeout(function () {
          location.reload();
      }, 200);
  
});
});

