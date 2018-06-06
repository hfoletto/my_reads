import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelfName: PropTypes.string
  }

  state = {}

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: 'url("'+this.props.book.imageLinks.thumbnail+'")'
            }}></div>
            <div className="book-shelf-changer">
              <select
                onChange={e => this.props.moveBook(this.props.book.title, this.props.shelfName, e.target.value)}
                value={this.props.shelfName}
              >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{
            (typeof this.props.book.authors !== 'undefined' && this.props.book.authors.length > 0) &&
              this.props.book.authors.join(', ')
          }</div>
        </div>
      </li>
    )
  }
}

export default Book
