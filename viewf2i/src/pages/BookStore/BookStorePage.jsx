import React, { useState, useEffect } from 'react';
import './BookStore.css';
import Header from '../../components/Header';

const BookStore = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [filters, setFilters] = useState({ genre: '', author: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/library');
      const result = await response.json(); // The API response object
      console.log('Fetched result:', result);
  
      // Check if the data key exists and is an array
      if (result?.data && Array.isArray(result.data)) {
        const books = result.data; // Extract books array from result.data
        setBooks(books);
        setFilteredBooks(books);
  
        // Extract unique genres and authors for filtering
        const genres = [...new Set(books.map(book => book.genre))];
        const authors = [...new Set(books.map(book => book.author))];
  
        setGenres(genres);
        setAuthors(authors);
      } else {
        console.error('Unexpected API response structure:', result);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filtered = books;

    if (filters.genre) {
      filtered = filtered.filter(book => book.genre === filters.genre);
    }

    if (filters.author) {
      filtered = filtered.filter(book => book.author === filters.author);
    }

    setFilteredBooks(filtered);
  };

  return (
    <>
      <Header />
      <div className="bookstore">
        <div className="bookstore-container">
          <aside className="filter-menu">
            <h3>Browse</h3>
            <div>
              <label htmlFor="genre">Genre</label>
              <select name="genre" onChange={handleFilterChange}>
                <option value="">All</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="author">Author</label>
              <select name="author" onChange={handleFilterChange}>
                <option value="">All</option>
                {authors.map(author => (
                  <option key={author} value={author}>{author}</option>
                ))}
              </select>
            </div>

            <button onClick={applyFilters}>Apply Filters</button>
          </aside>

          <main className="book-list">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-item">
                {/* If cover images are available in your API, include them here */}
                <div className="book-cover-placeholder">No Image</div>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <p><em>{book.genre}</em></p>
                <p>{book.description}</p>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default BookStore;
