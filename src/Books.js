import React, { Component } from 'react';

class Books extends Component {
    handleShelfChange = (event) => {
        const shelf = event.target.value;
        let book = this.props.book;
        book.shelf = shelf;

        if (this.props.onShelfChange) {
            this.props.onShelfChange(book, shelf);
        }
    }

    render() {
        const { book } = this.props;
        const style = {
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'})`
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={style}>
                     </div>
                     <div className="book-shelf-changer">
                        <select value={book.shelf ? book.shelf : 'none'} onChange={this.handleShelfChange}>
                             <option value="move" disabled>Move to...</option>
                             <option value="currentlyReading">Currently Reading</option>
                             <option value="wantToRead">Want to Read</option>
                             <option value="read">Read</option>
                             <option value="none">None</option>
                         </select>
                     </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(", ") : "Unknown Author(s)"}</div>
            </div>
        );
    }
}

export default Books;
