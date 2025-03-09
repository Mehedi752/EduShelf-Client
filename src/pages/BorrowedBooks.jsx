import axios from 'axios';
import { set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../customHooks/useAuth';
import useAxiosSecure from '../customHooks/useAxiosSecure';

const BorrowedBooks = () => {
    const { user } = useAuth();
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/borrowedBooks?email=${user.email}`)
            .then((res) => {
                setBorrowedBooks(res.data);
            });

    }, []);
    //console.log(borrowedBooks);


    const handleReturnButton = (borrowedBookId, bookId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://library-management-server-xi-six.vercel.app/borrowedBooks/${borrowedBookId}`)
                    .then((data) => {
                        setBorrowedBooks(borrowedBooks.filter((book) => book._id !== borrowedBookId));
                        //console.log('Book returned', data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your borrowed book has been returned.",
                            icon: "success"
                        });

                        // Increase book quantity using MongoDB's $inc operator
                        axios.put(`https://library-management-server-xi-six.vercel.app/books/return/${bookId}`, {
                            quantity: 1,
                        })
                            .then(data => {
                                //console.log('Book quantity increased', data);
                            });
                    });
            }
        });

    }
    return (
        <div className='container mx-auto py-12 px-5 lg:px-0'>
            <h1 className="text-4xl font-bold text-center mb-8">Your Borrowed Books</h1>
            {borrowedBooks.length === 0 ? (
                <p className="text-center text-gray-500">You haven't borrowed any books yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {borrowedBooks.map((book) => (
                        <div key={book._id} className="border rounded-lg shadow-md p-6">
                            <img
                                src={book.bookImage}
                                alt={book.bookName}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-lg font-semibold mb-2">{book.bookName}</h2>
                            <p className="text-sm text-gray-600">Category: {book.bookCategory}</p>
                            <p className="text-sm text-gray-600">
                                Borrowed Date: {new Date(book.borrowedDate).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-gray-600">
                                Return Date: {new Date(book.returnDate).toLocaleDateString()}
                            </p>
                            <button onClick={() => handleReturnButton(book._id, book.bookId)}

                                className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                            >
                                Return
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BorrowedBooks;