function makePage(number, text, isActive) {
    return {
      number,
      text,
      active: isActive,
    };
  }
  
  function getPages(currentPage, totalPages) {
    const maxSize = 5;
    const pages = [];
  
    const addPages = (start, end, isActive) => {
      for (let number = start; number <= end; number++) {
        pages.push(makePage(number, number.toString(), number === isActive));
      }
    };
  
    const isMaxSized = maxSize < totalPages;
    if (isMaxSized) {
      let startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
      let endPage = Math.min(startPage + maxSize - 1, totalPages);
  
      if (endPage - startPage + 1 < maxSize) {
        startPage = Math.max(endPage - maxSize + 1, 1);
      }
  
      addPages(startPage, endPage, currentPage);
  
      if (startPage > 1) {
        if (startPage > 2) {
          pages.unshift(makePage(startPage - 1, "...", false));
        }
        pages.unshift(makePage(1, "1", false));
      }
  
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push(makePage(endPage + 1, "...", false));
        }
        pages.push(makePage(totalPages, totalPages.toString(), false));
      }
    } else {
      addPages(1, totalPages, currentPage);
    }
  
    return pages;
  }
  
  module.exports = { getPages };
  