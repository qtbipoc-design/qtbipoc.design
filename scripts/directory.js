(($) => $(() => {
  /* 
   * Automatically detect whether bio is truncated so page can display a "Read more" button 
   * From: https://paulbakaus.com/tutorials/css/multiline-truncated-text-with-show-more-button-with-just-css/
   */

  const memberBioParagraphs = document.querySelectorAll('.directory-result-member-bio span');
  const contentObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      // entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
      entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('hasTruncation');
      // console.log(entry);

      if (entry.target.scrollHeight <= entry.contentRect.height) {
        entry.previousElementSibling.checked = false;
      }
    }
  });

  
  memberBioParagraphs.forEach(element => {
    contentObserver.observe(element);
  });
  

}))(jQuery);
