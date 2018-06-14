import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class Search extends React.Component {
  static propTypes ={
    moveBook: PropTypes.func.isRequired,
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    clearSearch: PropTypes.func.isRequired,
    searchTerms: PropTypes.array.isRequired
  }

  // Limpando a busca para realizar nova
  componentWillMount() {
    this.props.clearSearch()
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
                   onChange={this.props.fetchBooks}
            />
          </div>
        </div>
        {this.props.books.length >= 1 ? (
          <div className="search-books-results">
            <Shelf title="Results"
                   books={this.props.books}
                   moveBook={this.props.moveBook}
            />
          </div>
        ) : (
          <div className="search-terms">
            <h2>Search Terms</h2>
            <p>The search will only work with the following terms:</p>
            <ul>{this.props.searchTerms.map(term => (
              <li><span>{term}</span></li>
            ))}</ul>
          </div>
        )}
      </div>
    )
  }
}

export default Search
