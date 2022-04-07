console.log('Main Loaded');


// This wraps the string of the Search & Filter result count in a heading tag
(function($){
  if ($('.search-filter-results')) {
    // console.log('results exists');
    $('.search-filter-results')
      .contents()
      .filter(function () {
        return this.nodeType === 3;
      })
      .eq(0)
      .wrap('<h4 class="search-filter-results-heading"></h4>');
  }
})(jQuery);