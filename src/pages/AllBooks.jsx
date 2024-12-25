import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AllBooks = () => {
    const books = useLoaderData();
    const [view, setView] = useState('card');
    const navigate = useNavigate();
    
    const handleUpdate = (id) => {
        // Navigate to update page
        navigate(`/books/update/${id}`);
    }

    return (
        <div className='container mx-auto py-10 px-5 lg:px-0'>
            <h1 className="text-4xl font-semibold text-center mb-8">All Books</h1>

            {/* View Toggle */}
            <div className="flex justify-end mb-6">
                <select
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2"
                >
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>

            {/* Card View */}
            {view === 'card' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {books.map((book) => (
                        <div key={book._id} className="border rounded-lg shadow-md p-6">
                            <img
                                src={book.image}
                                alt={book.name}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-lg font-semibold">{book.name}</h2>
                            <p className="text-gray-600">Author: {book.author}</p>
                            <p className="text-gray-600">Category: {book.category}</p>
                            <p className="text-gray-600">Rating: {book.rating}</p>
                            <button
                                onClick={() => handleUpdate(book._id)}
                                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            >
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Table View */}
            {view === 'table' && (
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 text-left py-2">
                            <th className="px-4 py-4">Image</th>
                            <th className="px-4 py-4">Title</th>
                            <th className="px-4 py-4 hidden md:table-cell">Author</th>
                            <th className="px-4 py-4 hidden md:table-cell">Category</th>
                            <th className="px-4 py-4 hidden md:table-cell">Rating</th>
                            <th className="px-4 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book._id} className="border-t font-medium">
                                <td className="px-4 py-4">
                                    <img
                                        src={book.image}
                                        alt={book.name}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                </td>
                                <td className="p-4 py-4 text-lg">{book.name}</td>
                                <td className="p-4 py-4 hidden md:table-cell">{book.author}</td>
                                <td className="p-4 py-4 hidden md:table-cell">{book.category}</td>
                                <td className="p-4 py-4 hidden md:table-cell">{book.rating}</td>
                                <td className="p-4 py-4">
                                    <button
                                        onClick={() => handleUpdate(book._id)}
                                        className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AllBooks;