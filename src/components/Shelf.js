import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Shelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      {props.books.length >= 1 ? (
          // Renderiza a prateleira quanto tem 1 ou mais livros
          <ol className="books-grid">
            {props.books.map((book, index) => (
              <Book key={index}
                    book={book}
                    shelfIn={book.shelf ? book.shelf : 'none'}
                    moveBook={props.moveBook}
              />
            ))}
          </ol>
        ) : (
          // Renderiza quando não há nenhum livro na prateleira
          <h3 className="bookshelf-empty">Empty shelf</h3>
        )
      }
    </div>
  </div>
)

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

export default Shelf
