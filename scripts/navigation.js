function changeSubmenuLabel(label) {
    // Change the default submenu label "Menu" to something else

    var newLabel;
    if (label) { newLabel = label } else { newLabel = "Sections"; }

    var menuLinkEl = document.querySelector(".submenu-organized-by-sections .page-submenu a.mobile-menu-link");
    if (!menuLinkEl) { return; }

    menuLinkEl.innerHTML = menuLinkEl.innerHTML.replace("Menu", newLabel);

}

(function ($) {  // Start jQuery

    $(".wpb_row").ready(function () {
        changeSubmenuLabel();
    });


})(jQuery) // End jQuery