var YN = jQuery.noConflict();

// Main page cleanup
function changeUI() {
  YN('#uhWrapper').css('padding-top','22px');
  YN('#masterNav, #theAd').remove();
  removeListAdd();
  YN('#main, #yucs, #yuhead-bucket').css('max-width','100%');
  YN('#shellcontent, .frost-container').css('right','0px');
  YN('#shellcontent').removeClass('wide-right-rail');
}

// remove list adds
function removeListAdd() {
  YN('.mb-list-ad, .search-message-container-ad').remove();
}

// Init page cleanup
changeUI();

// Listen for page to load
YN(window).load(function() {
  changeUI();
});

// Listen for page to finnish
YN(document).ready(function() {
  changeUI();
});

// Listen for complete AJAX calls
YN(document).ajaxSuccess(function() {
  changeUI();
});

// Bind to changes in the DOM
YN('body').bind('DOMSubtreeModified', function() {
    removeListAdd();
});
