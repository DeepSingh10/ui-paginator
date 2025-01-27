const { getPages } = require('../index');

describe('getPages', () => {
  test('should return pages for small number of totalPages', () => {
    expect(getPages(1, 3)).toEqual([
      { number: 1, text: '1', active: true },
      { number: 2, text: '2', active: false },
      { number: 3, text: '3', active: false },
    ]);
  });

  test('should return paginated pages with ellipsis for large totalPages', () => {
    expect(getPages(3, 10)).toEqual([
      { number: 1, text: '1', active: false },
      { number: 2, text: '2', active: false },
      { number: 3, text: '3', active: true },
      { number: 4, text: '4', active: false },
      { number: 5, text: '5', active: false },
      { number: 6, text: '...', active: false },
      { number: 10, text: '10', active: false },
    ]);
  });

  test('should handle edge cases like first page', () => {
    expect(getPages(1, 10)).toContainEqual({ number: 1, text: '1', active: true });
  });

  test('should handle edge cases like last page', () => {
    expect(getPages(10, 10)).toContainEqual({ number: 10, text: '10', active: true });
  });
});
