//
//
//scrollToTop
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
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

//
//
//form-validation
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
//emailSubscribeBtn
//
//
jQuery(function($) {
  $('#emailSubcribeBtn').on('click', function() {
    var $el = $(this),
      textNode = this.lastChild;
    textNode.nodeValue = ($el.hasClass('showSubscription') ? 'Subscribed' : 'Subscribed')
    $el.toggleClass('showSubscription');
  });
});
