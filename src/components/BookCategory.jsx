import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Rating from 'react-rating-stars-component';


const BookCategory = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div className='container mx-auto py-10 px-5 lg:px-0'>
            <h1 className="text-4xl font-semibold text-center mb-12">Explore Books in Categories</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[100px]">
                {books.map((book) => (
                    <div key={book.id} className="book-card border bg-cyan-50 p-5 md:p-10 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <img
                            src={book.image}
                            alt={book.name}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="p-4 md:p-6">
                            <h2 className="text-3xl font-semibold mb-2">{book.name}</h2>
                            <p className="text-xl font-medium mb-2">{book.author}</p>
                            <p className="mb-2 text-lg font-medium">Category : <span className="opacity-50">{book.category}</span></p>
                            <p className="mb-2 text-lg font-medium">Available : <span className="opacity-50">{book.quantity}</span></p>

                            {/* Rating Component */}
                            <div className="mb-2 flex items-center gap-2"> 
                                <span className="text-lg font-medium">Ratting :</span> 
                                <Rating
                                    count={5}
                                    value={book.rating}
                                    size={28}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                    edit={false}
                                />
                            </div>

                            {/* Details Button */}
                            <div className="mb-2">
                                <Link
                                    to={`/books/details/${book._id}`}
                                    className="text-white bg-[#1a237e] hover:bg-blue-700 py-2 px-6 rounded-lg inline-block transition-colors duration-300"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCategory;