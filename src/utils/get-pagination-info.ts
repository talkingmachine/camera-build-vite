
export const getPaginationInfo = (currentPage: number, listLength: number, productsPerPage: number) => {
  const pages = Math.ceil(listLength / productsPerPage);

  if (listLength <= productsPerPage) {
    return false;
  }

  const getPageNumbers = () => {
    if (pages === 2) {
      return [1, 2];
    }

    const res = [currentPage - 1, currentPage, currentPage + 1];
    if (res[0] < 1) {
      return res.map((pageNumber) => pageNumber + 1);
    } else if (res[res.length - 1] > pages) {
      return res.map((pageNumber) => pageNumber - 1);
    }

    return res;
  };

  const pageNumbers = getPageNumbers();

  return ({
    nextButton: pageNumbers[pageNumbers.length - 1] !== pages,
    prevButton: pageNumbers[0] !== 1,
    pageNumbers: pageNumbers
  });
};

