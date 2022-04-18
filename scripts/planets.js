'use strict';

(($) => $(() => {

  // Put planets from the content (not auto-generated) behind content by putting the planet's top-level row in the back.
  $(".wpb_row .planetContainer").closest(".wpb_row:not(.inner_row)")
    .css('z-index', '-1');
  
}))(jQuery);