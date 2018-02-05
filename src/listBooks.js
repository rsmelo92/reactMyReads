import React, { Component } from 'react'
import BookShelf from './bookShelf'

class ListBooks extends Component{
	render(){
		const books = this.props.books;
		let currentlyReading = books.length>0 ? books.filter(item=>{ return item.shelf === 'currentlyReading'; 	}) : [],
			wantToRead 		 = books.length>0 ? books.filter(item=>{ return item.shelf === 'wantToRead'; 		}) : [],
			read 			 = books.length>0 ? books.filter(item=>{ return item.shelf === 'read'; 				}) : [];

		return(
			<div className="list-books">
	            <div className="list-books-title">
					<h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	            	<BookShelf
						type="Currently Reading"
						onUpdateBook={this.props.onUpdateBook}
						books={currentlyReading}
	            	/>
	            	<BookShelf
						type="Want to Read"
						onUpdateBook={this.props.onUpdateBook}
						books={wantToRead}
	            	/>
	            	<BookShelf
						type="Read"
						onUpdateBook={this.props.onUpdateBook}
						books={read}
	            	/>
	            </div>
            </div>
		)
	}
}

export default ListBooks