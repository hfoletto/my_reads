import React, {Component} from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { search } from '../utils/BooksAPI'
import Shelf from './Shelf'

class Search extends Component {
  static propTypes = {}

  state = {
    searchTimeout: false,
    fetchBooks: null
  }

  searchBooks(e) {
    const searchTerms = e.target.value
    clearTimeout(this.state.searchTimeout)
    let searchTimeout = setTimeout(() => {
      console.log(searchTerms)
      if (searchTerms)
        search(searchTerms).then(data => {
          console.log(data)
          if (!data.error) this.setState({fetchBooks: data})
        })
    }, 500)
    this.setState({searchTimeout})
  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              onChange={this.searchBooks.bind(this)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {!this.state.fetchBooks ? (
            <div>Carregando Irmão</div>
          ) : (
            <Shelf title="Results"
                   books={this.state.fetchBooks}
                   name="none"
                   moveBook={this.props.addBook}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Search
