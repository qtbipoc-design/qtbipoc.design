(($) => $(() => {


  /* External link icon */

  $('a').each(() => true).not('a:has(img), a[href^="/"], a[href^="#"], a[href^="https://qtbipoc.design"], a[href^="mailto"], a[href^="tel"], #footer-custom .nectar_icon a, #wpadminbar *').attr('rel','external');
    
}))(jQuery);