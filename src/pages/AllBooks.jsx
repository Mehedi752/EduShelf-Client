import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AllBooks = () => {
    const books = useLoaderData();
    const [view, setView] = useState('card');
    const navigate = useNavigate();
    const [showAvailable, setShowAvailable] = useState(false);

    const filteredBooks = showAvailable
        ? books.filter((book) => book.quantity > 0)
        : books;

    const handleUpdate = (id) => {
        // Navigate to update page
        navigate(`/books/update/${id}`);
    }

    return (
        <div className='container mx-auto py-10 px-5 lg:px-0'>
            <h1 className="text-4xl font-semibold text-center mb-8">All Books</h1>

            {/* View Toggle */}
            <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
                <button
                    onClick={() => setShowAvailable(!showAvailable)}
                    className={`border px-4 py-2 rounded text-sm transition-colors duration-300 ${showAvailable
                            ? 'bg-green-600 text-white font-medium'
                            : 'bg-red-500 text-white font-medium'
                        }`}
                >
                    {showAvailable ? 'Show All Books' : 'Show Available Books'}
                </button>
                <select
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 text-sm"
                >
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>

            {/* Card View */}
            {view === 'card' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredBooks.map((book) => (
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
                        {filteredBooks.map((book) => (
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