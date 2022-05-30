(($) => $(() => {


  /* External link icon */
  // This code adds the `rel="external"` attribute, and needs CSS to add the actual icon

  $('a').each(() => true).not('a:has(img), a[href^="/"], a[href^="#"], a[href^="https://qtbipoc.design"], a[href^="https://staging"], a[href^="mailto"], a[href^="tel"], #footer-custom .nectar_icon a, #wpadminbar *').attr('rel','external');
    
}))(jQuery);