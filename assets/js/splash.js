/*!
 * Splash v1.0
 * Created by Andy Tran (http://andytran.me)
 * Copyright 2015 Andy Tran.
 * Licensed under MIT (https://github.com/andyhqtran/Splash/blob/master/LICENSE)
 */

// Load jQuery Library
var splashjQuery = document.createElement('script');
splashjQuery.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.querySelector('head').appendChild(splashjQuery);

splashjQuery.onload = splashLoad;

// Variables
var splashButtonPosX = 'left',
  splashButtonPosY = 'bottom',
  splashButtonAnimation = 'scaleIn',
  splashFormAnimation = 'fadeIn';

function splashLoad() {

  // Add Stylesheet
  var splashStylesheet = '<link type="text/css" media="screen" rel="stylesheet" href="assets/css/splash.css">';
  $('head').append(splashStylesheet);

  // Add Google Fonts
  $('head').append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons|Roboto:400,100,300,500,700,900|RobotoDraft:400,100,300,500,700,900" rel="stylesheet">');

  // Load Document
  $(document).ready(function () {

    // Add Trigger Button
    $('body').append('<a href="#splashForm" data-ripple="true" data-ripple-color="#fff" data-posX="' + splashButtonPosX + '" data-posY="' + splashButtonPosY + '" data-animation="' + splashButtonAnimation + '" class="sp-fab"><i class="material-icons">&#xE145;</i></a>');

    // Add Overlay
    $('body').append('<div class="sp-overlay"></div>');

    // Add Form
    $('body').append('<form id="splashForm" data-animation="' + splashFormAnimation + '" class="sp-dialog"> <div class="sp-dialog-header">Contact</div> <div class="sp-dialog-content"> <div class="sp-form"> <div class="sp-form-row"> <div class="sp-form-group"> <input type="text" required class="sp-form-input"> <label for="" class="sp-form-label">First Name</label> <div class="sp-form-bar"></div> </div> <div class="sp-form-group"> <input type="text" required class="sp-form-input"> <label for="" class="sp-form-label">Last Name</label> <div class="sp-form-bar"></div> </div> </div> <div class="sp-form-row"> <div class="sp-form-group"> <input type="email" required class="sp-form-input"> <label for="" class="sp-form-label">Email Address</label> <div class="sp-form-bar"></div> </div> </div> <div class="sp-form-row"> <div class="sp-form-group"> <textarea type="text" required class="sp-form-textarea"></textarea> <label for="" class="sp-form-label">Messages</label> <div class="sp-form-bar"></div> </div> </div> </div> </div> <div class="sp-dialog-footer"> <button data-ripple="true" data-ripple-color="#F22B71" class="sp-dialog-button sp-close">Cancel</button> <button type="submit" data-ripple="true" data-ripple-color="#F22B71" class="sp-dialog-button sp-form-button">Send</button> </div> </form>');

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
    $('.sp-fab').on('click', function (e) {
      e.preventDefault();
      $('.sp-overlay').fadeIn();

      $($.attr(this, 'href')).addClass('visible').show();
    });

    // Close Event
    $('.sp-close').on('click', function (e) {
      e.preventDefault();
      $('.sp-overlay').fadeOut();

      $(this).parent('.sp-dialog-footer').parent('.sp-dialog').fadeOut().removeClass('visible');
    });
  });
};