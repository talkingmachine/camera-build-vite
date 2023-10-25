import { getPaginationInfo } from './get-pagination-info';

describe('Get pagination info', () => {
  it('should return pagination info', () => {
    const tests = [
      {
        props: {currentPage: 5, listLength: 80, productsPerPage: 9},
        expected: {nextButton: true, prevButton: true, pageNumbers: [4, 5, 6] }
      },
      {
        props: {currentPage: 1, listLength: 30, productsPerPage: 9},
        expected: {nextButton: true, prevButton: false, pageNumbers: [1, 2, 3] }
      },
      {
        props: {currentPage: 2, listLength: 3, productsPerPage: 3},
        expected: false
      },
      {
        props: {currentPage: 2, listLength: 4, productsPerPage: 3},
        expected: {nextButton: false, prevButton: false, pageNumbers: [1, 2] }
      },
    ];
    tests.forEach((test) => {
      expect(test.expected).toEqual(getPaginationInfo(
        test.props.currentPage,
        test.props.listLength,
        test.props.productsPerPage
      ));
    });
  });
});
