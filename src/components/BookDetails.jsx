import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const BookDetails = () => {
    const book = useLoaderData();
    console.log(book)
    const { name, author, category, image, quantity, rating, shortDescription, bookContent } = book;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');
    const { user } = useAuth();
    const navigate = useNavigate();

    // Open/Close Modal
    // const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (book.quantity > 0) {

            // Decrease book quantity using MongoDB's $inc operator
            axios.put(`http://localhost:5000/books/${book._id}`, {
                quantity: -1, // Use $inc operator in MongoDB
            })
                .then(data => {
                    // console.log('Book quantity decreased', data);
                })


            // Add to Borrowed Books List (you can store this in the DB or local storage)
            axios.post('http://localhost:5000/borrowedBooks', {
                bookId: book._id,
                userId: user.uid,
                name: user.displayName,
                email: user.email,
                returnDate,
            })
                .then(data => {
                    // console.log('Book borrowed', data);
                    if (data.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Book Borrowed Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Something went wrong',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }

                })

            navigate('/borrowedBooks');

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
                        <button onClick={() => setIsModalOpen(true)} disabled={book.quantity === 0} className="btn bg-[#1a237e] hover:bg-blue-700 text-white">Borrow</button>
                    </div>

                </div>
            </div>


            {/* Modal */}
            {
                isModalOpen &&
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4 text-center">Borrow Books</h2>
                        <form onSubmit={handleSubmit}>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className='w-full p-2 border rounded bg-gray-200'
                                    value={user.displayName || ''}
                                    disabled
                                    required
                                />
                            </div>


                            {/* First Name */}
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className='w-full p-2 border rounded bg-gray-200'
                                    value={user.email || ''}
                                    disabled
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Return Date</label>
                                <input
                                    type="date"
                                    name="returnDate"
                                    className='w-full p-2 border rounded bg-gray-200'
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    required
                                />
                            </div>



                            <div className="flex gap-3">

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Apply
                                </button>

                                {/* Close Modal */}
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    Cancel
                                </button>

                            </div>
                        </form>


                    </div>
                </div>
            }
        </div>
    );
};

export default BookDetails;