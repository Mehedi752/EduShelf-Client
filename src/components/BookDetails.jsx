import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';
import axios from 'axios';

const BookDetails = () => {
    const book = useLoaderData();
    console.log(book)
    const { name, author, category, image, quantity, rating, shortDescription, bookContent } = book;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');
    const { user } = useAuth();
    const navigate = useNavigate();

    // Open/Close Modal
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (book.quantity > 0) {

            // Decrease book quantity using MongoDB's $inc operator
            axios.patch(`/books/${book._id}`, {
                quantity: -1, // Use $inc operator in MongoDB
            });
            // Add to Borrowed Books List (you can store this in the DB or local storage)
            axios.post('/borrowed-books', {
                bookId: book._id,
                userId: user.uid,
                returnDate,
            });

            // Update UI or redirect to borrowed books page
            navigate('/borrowedBooks');

            toggleModal(); // Close modal
        }
    };
    return (
        <div className='container mx-auto py-12 px-5 lg:px-0'>

            <h1 className="text-4xl font-semibold text-center mb-12">Book Details</h1>

            <div className="flex flex-col lg:flex-row justify-between gap-12">
                <div className="bg-[#131313]/5 rounded-2xl p-12 lg:p-[74px]">
                    <img src={image} alt="" className="w-full lg:w-[425px] h-full lg:h-[564px]" />
                </div>


                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h3 className="text-[#131313] text-[40px] font-bold font-['Playfair Display'] mb-4">{name}</h3>
                    <p className="text-[#131313]/80 text-xl font-medium font-['Work Sans'] mb-6">By : {author}</p>
                    <div className="border mb-4"></div>

                    <p className="text-[#131313]/80 text-xl font-medium font-['Work Sans'] mb-4">{category}</p>
                    <div className="border mb-6"></div>

                    <p className="mb-6"><span className="text-[#131313] text-base font-bold font-['Work Sans']">Review: </span>
                        <span className="text-[#131313]/70 text-base font-normal font-['Work Sans']">{shortDescription}</span></p>
                    <div className="border mb-6"></div>

                    <h3 className="mb-6">
                        <span className="text-[#131313] text-base font-semibold font-['Work Sans']">Content : </span>
                        <span className="text-[#131313]/70 text-base font-normal font-['Work Sans']">{bookContent}</span>
                    </h3>
                    <div className="border mb-6"></div>

                    <div className="flex flex-col gap-3 mb-8">
                        <p className="text-[#131313]/70 text-base font-normal font-['Work Sans']">Rating :
                            <span className="text-[#131313] text-base font-semibold font-['Work Sans'] ml-[60px]">{rating}</span></p>
                        <p className="text-[#131313]/70 text-base font-normal font-['Work Sans']">Available :
                            <span className="text-[#131313] text-base font-semibold font-['Work Sans'] ml-[40px]">{quantity}</span></p>

                    </div>

                    <div className="flex gap-3">
                        <button onClick={toggleModal} className="btn bg-[#1a237e] hover:bg-blue-700 text-white">Borrow</button>
                    </div>

                </div>
            </div>

            // Modal
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h3 className="modal-title">Borrow Book</h3>
                        <form onSubmit={handleSubmit} className="modal-form">
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={user.displayName || ''}
                                    disabled
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email || ''}
                                    disabled
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Return Date:</label>
                                <input
                                    type="date"
                                    name="returnDate"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-accent">
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetails;