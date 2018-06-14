import React from 'react'
import PropTypes from 'prop-types'

const Book = props => (
  <li>
    <div className={['book', !props.book.title && 'placeholder'].join(' ')}>
      <div className="book-top">
        <div className="book-cover" style={props.book.title && {
          backgroundImage: 'url("'+props.book.imageLinks.thumbnail+'")'
        }}></div>
        <div className={props.shelfIn === 'none' ?
          'book-shelf-adder' :
          'book-shelf-changer'
        }>
          {props.book.title && (
            <select
              onChange={e => props.moveBook(props.book, e.target.value)}
              value={props.shelfIn}
            >
              <option value="none" disabled>{props.shelfIn === 'none' ?
                'Add to..' :
                'Move to...'
              }</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              {props.shelfIn !== 'none' && (<option value="none">None</option>)}
            </select>
          )}
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{
        (typeof props.book.authors !== 'undefined' &&
          props.book.authors.length > 0) &&
          props.book.authors.join(', ')
      }</div>
    </div>
  </li>
)

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfIn: PropTypes.string,
  moveBook: PropTypes.func
}

export default Book
