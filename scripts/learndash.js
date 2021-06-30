// Login Modal
// Part of a fix to prevent scrolling and keep the login model
// fixed positioning in the center of the page
//
// https://www.notion.so/qtbipocdesign/Learndash-Login-Modal-93e71dfba7cc4a78873318f2b58c0916

jQuery(function($) {
  $('a[href="#login"]').click(function(e) {
        e.preventDefault();
        $(".learndash-wrapper-login-modal")
.addClass("ld-modal-open")
.removeClass("ld-modal-closed");
        return false;
    });
})