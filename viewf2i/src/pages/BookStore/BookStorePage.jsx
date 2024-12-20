import React, { useState, useEffect } from 'react';
import './BookStore.css';
import Header from '../../components/Header';

const BookStore = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [filters, setFilters] = useState({ genre: '', author: '', minPrice: '', maxPrice: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/library');
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data);

      // Extract unique genres and authors for filtering
      const genres = [...new Set(data.map(book => book.genre))];
      const authors = [...new Set(data.map(book => book.author))];

      setGenres(genres);
      setAuthors(authors);
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

    if (filters.minPrice) {
      filtered = filtered.filter(book => book.price >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(book => book.price <= parseFloat(filters.maxPrice));
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

            <div>
              <label htmlFor="minPrice">Min Price</label>
              <input type="number" name="minPrice" onChange={handleFilterChange} />
            </div>

            <div>
              <label htmlFor="maxPrice">Max Price</label>
              <input type="number" name="maxPrice" onChange={handleFilterChange} />
            </div>

            <button onClick={applyFilters}>Apply Filters</button>
          </aside>

          <main className="book-list">
            {filteredBooks.map(book => (
              <div key={book.id} className="book-item">
                <img src={book.coverImage} alt={book.title} />
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <p>{book.price} Ks</p>
                <button>Add to cart</button>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default BookStore;
