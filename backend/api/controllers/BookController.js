const BookService = require("../services/BookService");

module.exports = {
  getBooks: async (req, res) => {
    try{
      const books = await BookService.getBooks();
      return res.ok(books)
    } catch (error){
      console.error(error)
    }
  },
  getBook: async (req, res) => {
    try{
      const bookId = req.param("id");
      const books = await BookService.getBook(bookId)
      return res.ok(books)
    } catch (error){
      console.error(error)
    }
  },
};

