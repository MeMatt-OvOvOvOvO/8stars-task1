module.exports = {
  getBooks: async () => {
    const books = await Book.getBooksFromDatabase();
    return books;
  },

  getBook: async (bookId) => {
    const books = await Book.getBooksFromDatabase(bookId);
    return books;
  },
};

