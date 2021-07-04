
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
  $(window).resize(function () {
    $(".p-dropdown-menu__list").css('display', '');
  });
});
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/hogehoge",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

  
});

