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
    }
  });

  
  memberBioParagraphs.forEach(element => {
    // flagTruncatedContent(element, "hasTruncation");
    contentObserver.observe(element);
  });
  

}))(jQuery);


const flagTruncatedContent = function (el, flagName) {
  console.log(el);
  if (el.scrollHeight > el.clientHeight) {
    el.classList.add(flagName);
  }
  // el.classList[el.target.scrollHeight > el.contentRect.height ? 'add' : 'remove'](flagName);
}
