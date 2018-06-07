import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class Search extends React.Component {
  static propTypes ={
    moveBook: PropTypes.func.isRequired,
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    clearSearch: PropTypes.func.isRequired
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
        <div className="search-books-results">
          {this.props.books.length < 1 ? (
            <div>Carregando Irmão</div>
          ) : (
            <Shelf title="Results"
                   books={this.props.books}
                   moveBook={this.props.moveBook}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Search
