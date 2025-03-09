import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import BookCategory from './BookCategory';
import { IoMdArrowBack } from 'react-icons/io';
import useAxiosSecure from '../customHooks/useAxiosSecure';


const BookDetails = () => {
    const book = useLoaderData();
    const { name, author, category, image, quantity, rating, shortDescription, bookContent } = book;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [returnDate, setReturnDate] = useState('');
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/borrowedBooks?email=${user.email}`)
            .then((res) => {
                setBorrowedBooks(res.data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const borrowedDate = new Date();
        const returnedDate = new Date(returnDate);

        if (returnedDate <= borrowedDate) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Return Date',
                text: 'Return date must be after the borrowed date.',
                timer: 2000,
            });
            return;
        }

        if (book.quantity > 0) {
            const isBookAlreadyBorrowed = borrowedBooks.some((borrowedBook) => borrowedBook.bookId === book._id);
            if (isBookAlreadyBorrowed) {
                Swal.fire({
                    icon: 'error',
                    title: 'Book Already Borrowed',
                    text: 'You have already borrowed this book.',
                    timer: 2000,
                });
                return;
            }

            // Decrease book quantity using MongoDB's $inc operator
            axios.put(`https://library-management-server-xi-six.vercel.app/books/${book._id}`, {
                quantity: -1,
            })
                .then(data => {
                    // //console.log('Book quantity decreased', data);
                })


            // Add to Borrowed Books List (you can store this in the DB or local storage)
            axios.post('https://library-management-server-xi-six.vercel.app/borrowedBooks', {
                bookId: book._id,
                bookImage: book.image,
                bookName: book.name,
                bookCategory: book.category,
                userId: user.uid,
                userName: user.displayName,
                email: user.email,
                borrowedDate: format(new Date(), "yyyy-MM-dd"),
                returnDate,
            })
                .then(data => {
                    // //console.log('Book borrowed', data);
                    if (data.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Book Borrowed Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong',
                        showConfirmButton: false,
                        timer: 2000
                    })
                })

            navigate(`/books/${category}`);

        }
    };
    return (
        <div className='container mx-auto py-12 px-5 lg:px-0'>

            <h1 className="text-4xl font-bold text-center mb-12">Book Details</h1>

            <div className="mb-12">
                <Link to={`/books/${category}`} className="text-gray-700 flex items-center gap-2 text-2xl lg:text-3xl font-normal font-['Rancho']">
                    <IoMdArrowBack /> Back to Categories</Link>
            </div>

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
                        <button onClick={() => setIsModalOpen(true)} disabled={parseInt(book.quantity) === 0} className="btn bg-[#1a237e] hover:bg-blue-700 text-white">Borrow</button>
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

                            {/* Borrowed Date */}
                            <div className="mb-4">
                                <label className="block font-medium mb-2">Borrowed Date</label>
                                <input
                                    type="text"
                                    name="borrowedDate"
                                    value={format(new Date(), "dd-MM-yyyy")}
                                    disabled
                                    className="w-full p-2 border rounded bg-gray-200"
                                />
                            </div>

                            {/* Return Date */}
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