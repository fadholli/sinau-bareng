function submit(e) {
  e.preventDefault();
  var popUp = document.getElementById("pop-up");
  popUp.innerHTML = 'sandi yang anda masukan salah';
  return false;
}

var form = document.getElementById('form');
form.addEventListener('submit', submit);

var show = document.getElementById('show');
var password = document.getElementById('password')
var statusShow = true;
function toggleShow(e) {
  if (statusShow === true) {
    statusShow = false;
    show.innerHTML = 'hidden';
    password.setAttribute('type', 'password');
  } else {
    statusShow = true;
    show.innerHTML = 'show';
    password.setAttribute('type', 'text');
  }
}
