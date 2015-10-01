/*!
 * Splash v1.0
 * Created by Andy Tran (http://andytran.me)
 * Copyright 2015 Andy Tran.
 * Licensed under MIT (https://github.com/andyhqtran/Splash/blob/master/LICENSE)
 */

$(document).ready(function () {

  // Ripple Event
  $('[data-ripple="true"]').on('click', function (e) {
    e.preventDefault();

    var $div = $('<div class="ripple" />'),
      btnOffset = $(this).offset(),
      xPos = e.pageX - btnOffset.left,
      yPos = e.pageY - btnOffset.top,
      $ripple = $(".ripple");

    $ripple.css("height", $(this).height());
    $ripple.css("width", $(this).height());

    $div.css({
      top: yPos - ($ripple.height() / 2),
      left: xPos - ($ripple.width() / 2),
      background: $(this).data("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function () {
      $div.remove();
    }, 2000);
  });

  // Open Model
  $('.sp-button').on('click', function (e) {
    e.preventDefault();
    $('.sp-overlay').fadeIn();

    $($.attr(this, 'href')).addClass('visible').show();
  });

  // Close Event
  $('.sp-close').on('click', function (e) {
    e.preventDefault();
    $('.sp-overlay').fadeOut();

    $(this).parent('.sp-form-header').parent('.sp-form').fadeOut().removeClass('visible');
  });
});