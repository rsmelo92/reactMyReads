import React, { Component } from 'react'
import BookShelf from './bookShelf'

class ListBooks extends Component{
	render(){
		const books = this.props.books,
			  currentlyReading = books.filter(item=>{
				return item.shelf === 'currentlyReading';
			  }),
			  wantToRead = books.filter(item=>{
				return item.shelf === 'wantToRead';
			  }),
			  read = books.filter(item=>{
				return item.shelf === 'read';
			  });

		return(
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	            	<BookShelf
						type="Currently Reading"
						books={currentlyReading}
	            	/>
	            	<BookShelf
						type="Want to Read"
						books={wantToRead}
	            	/>
	            	<BookShelf
						type="Read"
						books={read}
	            	/>
	            </div>
            </div>
		)
	}
}

export default ListBooks