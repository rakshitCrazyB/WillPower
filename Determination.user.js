// ==UserScript==
// @name        Button
// @namespace   CrazyB
// @include     *defence.pk* 
// @include     *facebook*
//@include    *youtube*
// @version     1
// ==/UserScript==
var input = document.createElement('input');
input.type = 'button';
input.value = 'Strayed from the path , You have . mmmm - Yoda';
input.onclick = showAlert;
input.setAttribute('style', 'font-size:18px;position:fixed; z-index: 100;    top:50%;    left:50%;    margin:-100px 0 0 -100px;    width:500px;    height:100px; ');
document.body.appendChild(input);
function showAlert()
{
  alert('Determination and will power are the key to success');
}
