import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Shelf from './components/Shelf'
import Search from './components/Search'


// BooksAPI.getAll().then(data => {console.log(data)})
// BooksAPI.search('Shakespeare').then(data => {console.log(data)})

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.moveBook = this.moveBook.bind(this)
  }

  state = {
    books: []
  }

  // Função usada para mover os livros de prateleiras (Shelfs)
  // Ela também garante que o livro selecionado seja movido para o final do array
  // Assim evita que o livro acabe aparecendo em uma posição inesperada
  moveBook(book, toShelf) {
    const movedBook = this.state.books.find(el => el.id === book.id)
    movedBook.shelf = toShelf
    const newBooks = this.state.books.filter(el => el.id !== book.id)
    newBooks.push(movedBook)
    this.setState({books: newBooks})
  }

  addBook(book, toShelf) {
    this.setState({books: [...this.state.books, {
        id: book.id,
        shelf: toShelf,
        book
      }]})
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
                       books={this.state.books.filter(book => book.shelf === 'currentlyReading').map(book => book.book)}
                       name="currentlyReading"
                       moveBook={this.moveBook}
                />
                <Shelf title="Want to Read"
                       books={this.state.books.filter(book => book.shelf === 'wantToRead').map(book => book.book)}
                       name="wantToRead"
                       moveBook={this.moveBook}
                />
                <Shelf title="Read"
                       books={this.state.books.filter(book => book.shelf === 'read').map(book => book.book)}
                       name="read"
                       moveBook={this.moveBook}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
        <Route exact path="/search" render={() => <Search addBook={this.addBook.bind(this)} />} />
      </div>
    )
  }
}

export default BooksApp
