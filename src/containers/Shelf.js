import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from '../components/Book'

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {}

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, index) => (
              <Book key={index}
                    book={book}
                    shelfName={this.props.name}
                    moveBook={this.props.moveBook}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
