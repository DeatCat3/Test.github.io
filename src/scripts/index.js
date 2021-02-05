import initMagnific from './vendor/magnificpopup';
import initVeu from './vendor/vue';
import initValidate from './vendor/validate';
import initPopups from './parts/popups';
import initSliders from './parts/sliders';
import initLazy from './parts/lazy';

 $(document).ready(() => {
  initMagnific();
  initVeu();
  initValidate();
  initPopups();
  initSliders();
  initLazy();
});
//Save e-mail
email.value = localStorage.getItem('email');
try{
email.oninput = () => { localStorage.setItem('email', email.value)}
}catch(e){localStorage.setItem('email', email.value)};

$('.error').hide();
//Success
function sendForm() {
  $('.footer__message__inputs, .error').detach();
  $('.footer__message__success').show();
}

// Validate email
function validateEmail(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}
// validate email and send form after success validation
$("#toSend").on("click", validate);
function validate() {
  var email = $("#email").val();
  var $error = $(".error");

  if (validateEmail(email)) {
    $error.fadeOut();
    sendForm();
  } else {
    $error.fadeIn();
    //$error.text("Введите почту в формате '×××@×××.××'");
    $error.show();
    $('#email').css({'backgroundColor' : '#FED6D6', 'color':'#D44544'})
  }
  return false;
}