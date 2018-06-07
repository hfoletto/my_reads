import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Shelf from './components/Shelf'
import Search from './components/Search'
import * as BooksAPI from './utils/BooksAPI'
import {search} from './utils/BooksAPI'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.moveBook = this.moveBook.bind(this)
    this.fetchBooks = this.fetchBooks.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.state = {
      books: [],
      searchBooks: [],
      searchTimeout: false,
    }
  }

  // Carregamento inicial, obtendo os livros já salvos
  componentDidMount() {
    BooksAPI.getAll().then(data => this.setState({
      books: data
    }))
    console.log(BooksAPI.getAll().then(data => {console.log(data)}))
  }

  // Método usado para adicionar ou mover livros entre prateleiras
  // Ela também garante que o livro selecionado seja movido para o final do array
  // Assim evita que o livro acabe aparecendo em uma posição inesperada
  moveBook(book, toShelf) {
    BooksAPI.update(book, toShelf).then(data => {console.log(data)})
    const movedBook = this.state.books.find(el => el.id === book.id)
    if (movedBook) {
      movedBook.shelf = toShelf
      const newBooks = this.state.books.filter(el => el.id !== book.id)
      newBooks.push(movedBook)
      this.setState({books: newBooks})
    } else {
      book.shelf = toShelf
      this.setState({books: [...this.state.books, book]})
    }
  }

  // Método usado para buscar os livros no servidor com a BooksAPI
  fetchBooks(e) {
    const searchTerms = e.target.value
    clearTimeout(this.state.searchTimeout)
    let searchTimeout = setTimeout(() => {
      console.log(searchTerms)
      if (searchTerms)
        search(searchTerms).then(data => {
          console.log(data)
          if (!data.error) this.setState({searchBooks: data})
        })
    }, 500)
    this.setState({searchTimeout})
  }

  clearSearch() {
    this.setState({searchBooks: []})
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf title="Currently Reading"
                       books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                       moveBook={this.moveBook}
                />
                <Shelf title="Want to Read"
                       books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                       moveBook={this.moveBook}
                />
                <Shelf title="Read"
                       books={this.state.books.filter(book => book.shelf === 'read')}
                       moveBook={this.moveBook}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route exact path="/search" render={() =>
          <Search moveBook={this.moveBook}
                  fetchBooks={this.fetchBooks}
                  books={this.state.searchBooks.map(book => {
                    const isInShelf = this.state.books.find(el => el.id === book.id)
                    if (isInShelf) book.shelf = isInShelf.shelf
                    return book
                  })}
                  clearSearch={this.clearSearch}
          />
        } />
      </div>
    )
  }
}

export default BooksApp
