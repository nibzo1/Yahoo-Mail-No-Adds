function changeUI() {
  $('#uhWrapper').css('padding-top','22px');
  $('#masterNav, #theAd').remove();
  removeListAdd();
  $('#main, #yucs, #yuhead-bucket').css('max-width','100%');
  $('#shellcontent, .frost-container').css('right','0px');
  $('#shellcontent').removeClass('wide-right-rail');
}

function removeListAdd() {
  $('.mb-list-ad, .search-message-container-ad').remove();
}


changeUI();

$(document).ready(function() {
  changeUI();
});

$(document).ajaxSuccess(function() {
  changeUI();
});

$('body').bind('DOMSubtreeModified', function() {
    removeListAdd();
});
