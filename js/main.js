
function checkRadio() {
  if(document.getElementById('test1').checked) {
    pasteAgree();
  }
  else if (document.getElementById('test2').checked) {
    pasteDisagree();
  }
  else {
    alert("Вы не сделали выбор");
  }
}
var contentWrapper = document.querySelector('.modal-content');
function pasteAgree() {
  contentWrapper.classList.add('fade');
  setTimeout(function() {
    contentWrapper.innerHTML = "";
    contentWrapper.appendChild(hiddenAgree);
    contentWrapper.classList.remove('fade');
  },(1000*1));
};
function pasteDisagree() {
  contentWrapper.classList.add('fade');
  setTimeout(function() {
    contentWrapper.innerHTML = "";
    contentWrapper.appendChild(hiddenDisagree);
    contentWrapper.classList.remove('fade');
  },(1000*1));
}
