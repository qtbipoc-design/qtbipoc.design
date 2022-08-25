(($) => $(() => {
  /* 
   * Automatically detect whether bio is truncated so page can display a "Read more" button 
   * From: https://paulbakaus.com/tutorials/css/multiline-truncated-text-with-show-more-button-with-just-css/
   */

  const memberBioParagraphs = document.querySelectorAll('.directory-result-member-bio span');
  const contentObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
      console.log(entry);
    }
  });

  const flagTruncatedContent = function (el, flagName) {
    el.classList[el.target.scrollHeight > el.contentRect.height ? 'add' : 'remove'](flagName);
  }
  
  memberBioParagraphs.forEach(span => {
    contentObserver.observe(span);
    flagTruncatedContent(span, "hasTruncation");
  });
  

}))(jQuery);


