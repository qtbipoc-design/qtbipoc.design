/* 
 * Automatically detect whether bio is truncated so page can display a "Read more" button 
 * From: https://paulbakaus.com/tutorials/css/multiline-truncated-text-with-show-more-button-with-just-css/
*/

console.log("Hello directory js");
const memberBioParagraphs = document.querySelectorAll('.directory-result-member-bio span');
const contentObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
    console.log(entry);
  }
});

memberBioParagraphs.forEach(span => {
  contentObserver.observe(span);
});