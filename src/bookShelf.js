import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
	static: propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateBook: PropTypes.func.isRequired
	}

	handleChange = (e)=>{
		const value 	= e.target.value,
			  bookId 	= e.target.attributes['data-book-id'].value;
		if (this.props.onUpdateBook) { this.props.onUpdateBook({id:bookId}, value) }
	}

	render(){
		const props = this.props,
			  title = props.type,
			  books = props.books;
		return(
			<div className="bookshelf">
				{title ? (<h2 className="bookshelf-title">{title}</h2>) : ''}
				
					<div className="bookshelf-books">
						<ol className="books-grid">
							{
								books.map(item=>(
										<li key={item.id}>
											<div className="book">
												<div className="book-top">
													<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks ? item.imageLinks.thumbnail : ''})` }}></div>
														
														<div className="book-shelf-changer">
															<select value={item.shelf ? item.shelf : "none"} onChange={this.handleChange} data-book-id={item.id}>
																<option value="none" disabled>Move to...</option>
																<option value="currentlyReading">Currently Reading</option>
																<option value="wantToRead">Want to Read</option>
																<option value="read">Read</option>
																<option value="none">None</option>
															</select>
														</div>
												
												</div>
												
												<div className="book-title">{item.title ? item.title : ''}</div>
												<div className="book-authors">
													{item.authors ? item.authors.map((author, i)=>(
														<span 
															key={i} 
															style={{display:'block'}}>
															{author}														
														</span>
													)):[]}
												</div>
											</div>
										</li>
									))
							}
						</ol>
					</div>
			</div>
		)
	}
}

export default BookShelf
