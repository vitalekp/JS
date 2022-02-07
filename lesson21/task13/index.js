export const getSection = (num) => 
  document.querySelector(`span[data-number="${num}"]`).parentNode.dataset.section;

// getSection(1);