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

  state = {
    searching: '',
    display: false,
    searchTerms: [
      'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
      'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
      'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook',
      'Cricket', 'Cycling', 'Desai', 'Design', 'Development',
      'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
      'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness',
      'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo',
      'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
      'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery',
      'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry',
      'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics',
      'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh',
      'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate',
      'Virtual Reality', 'Web Development', 'iOS']
  }

  // Limpando a busca para realizar nova
  componentWillMount() {
    this.props.clearSearch()
  }

  // Atualiza o state searching, display e noMatch
  searchInput(e) {
    const searching = e.target.value
    this.setState({
      searching: searching,
      display: false,
      noMatch: false
    })
  }

  // Confere se apertou enter, e então invoca a função de pesquisa no componente
  // pai ou se não correspondeu a um dos termos de pesquisa, alerta o usuário
  submitSearch(e) {
    if (e.key === 'Enter') {
      const filterTerms = this.state.searchTerms.filter(el =>
        el.toLowerCase() === this.state.searching.toLowerCase()
      )
      if (filterTerms.length === 1) {
        this.props.fetchBooks(this.state.searching)
        this.setState({display: true})
      } else {
        this.setState({noMatch: true})
      }
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
                   onChange={this.searchInput.bind(this)}
                   onKeyPress={this.submitSearch.bind(this)}
            />
          </div>
        </div>
        <div className={['search-error-message',
            this.state.noMatch ? 'active' : null
        ].join(' ')}>
          Make sure to only search using one of the terms in the list below.
        </div>
        {this.props.books.length >= 1 && this.state.display ? (
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
            <ul>{this.state.searchTerms.map((term, index) => {
              return term.toLowerCase().startsWith(
                this.state.searching.toLowerCase()
              ) ? (
                <li key={index}>
                  <span>{term.slice(0, this.state.searching.length)}</span>
                  {term.slice(this.state.searching.length, term.length)}
                </li>
              ) : (
                <li key={index} className="hidden">{term}</li>
              )
            })}</ul>
          </div>
        )}
      </div>
    )
  }
}

export default Search
