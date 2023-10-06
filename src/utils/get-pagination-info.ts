import { PRODUCTS_PER_PAGE } from '../consts/global';

export const getPaginationInfo = (currentPage: number, listLength: number) => {
  const pages = Math.ceil(listLength / PRODUCTS_PER_PAGE);

  if (listLength <= PRODUCTS_PER_PAGE) {
    return false;
  }

  const getPageNumbers = () => {
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

