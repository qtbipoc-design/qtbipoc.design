console.log('Main Loaded');


// This wraps the string of the Search & Filter result count in a heading tag
(function ($) {
  $(function () {
    if ($('.search-filter-results')) {
      $('.search-filter-results')
        .contents()
        .filter(function () {
          return this.nodeType === 3;
        })
        .eq(0)
        .wrap('<h4 class="search-filter-results-heading"></h4>');
    }
  });
})(jQuery);