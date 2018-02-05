import React, { Component } from 'react'

class BookShelf extends Component {

	render(){
		const props = this.props,
			  title = props.type,
			  books = props.books;

			  console.log("books",books);	

		return(
			<div className="bookshelf">
				<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{
								books.map(item=>(
										<li key={item.id}>
											<div className="book">
												<div className="book-top">
													<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks.thumbnail})` }}></div>
														<div className="book-shelf-changer">
															<select>
																<option value="none" disabled>Move to...</option>
																<option value="currentlyReading">Currently Reading</option>
																<option value="wantToRead">Want to Read</option>
																<option value="read">Read</option>
																<option value="none">None</option>
															</select>
														</div>
												</div>
												<div className="book-title">{item.title}</div>
												<div className="book-authors">
													{item.authors.map((author, i)=>(
														<span 
															key={i} 
															style={{display:'block'}}>
															{author}														
														</span>
													))}
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
