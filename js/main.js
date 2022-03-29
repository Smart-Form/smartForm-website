//
//
//  scrollToTop
//
//
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 150); 
        return false; 
    }); 
});

//
//
// Avoid rotate
//
//
$(document).ready(function () {
  // Blocking device rotation on mobile web pages
  screen.orientation.lock('portrait');
});

//
//
//  form-validation
//
//
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//
//
//  emailSubscribeBtn
//
//
jQuery(function ($) {
  $('#emailSubcribeBtn').on('click', function () {
    var form = document.forms['emailSubscription_form'];
    if (!form.checkValidity()) {
      // Form is invalid!
    } else {
      // Form is valid, let the user proceed or do whatever we need to
      var $el = $(this),
      textNode = this.lastChild;
      $el.find('span').toggleClass('glyphicon glyphicon-ok');
      textNode.nodeValue = ($el.hasClass('showSubscription') ? 'Subscribed' : 'Subscribed');
      $el.toggleClass('showSubscription');
    }
  });
});

//
//
// Hide Bootstrap5 navbar menu on scroll down, show on scroll up
//
//
document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  // add padding-top to bady (if necessary)
  // navbar_height = document.querySelector('.navbar').offsetHeight;
  // document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    }); 
    // window.addEventListener
  }
  // if

}); 

//
//
//  Open new window
//
//
function openNewWindow_tc() {
    window.open("terms_and_conditions.html");
}
