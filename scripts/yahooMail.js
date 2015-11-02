function changeUI() {

  $('#uhWrapper').css('padding-top','22px');
  $('#masterNav').remove();
  removeListAdd();
  $('#theAd').remove();
  $('#yucs').css('max-width','100%');
  $('#main').css('max-width','100%');
  $('.frost-container').css('right','0');
  $('#yuhead-bucket').css('max-width','100%');
  $('#shellcontent').css('right','0px');
  $('#shellcontent').removeClass('wide-right-rail');
}
changeUI();

$(document).ready(function() {
  changeUI();
});

$(document).ajaxSuccess(function() {
  changeUI();
});

$('body').bind('DOMSubtreeModified', function() {
  if ($('.mb-list-ad').length) {
    removeListAdd();
  }
});

function removeListAdd() {
  $('.mb-list-ad').remove();
}
