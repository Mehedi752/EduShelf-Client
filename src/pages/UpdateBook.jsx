import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id)
    const [book, setBook] = useState([]);

    useEffect(() => {
        // Fetch book details by ID
        axios.get(`http://localhost:5000/books/details/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((error) => console.error('Error fetching book:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:5000/books/update/${id}`, book)
            .then((res) => {
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Book Updated',
                    text: 'Book details have been updated successfully.',
                    timer: 2000,
                });
                navigate(`/books/details/${id}`);
            })
            .catch((error) => console.error('Error updating book:', error));
    };

    return (
        <div className="bg-[#f3f3f3]">
            <div className="container mx-auto py-12 px-5 md:px-[100px] lg:px-[400px]">
                <div className="bg-white p-10 md:p-[50px] lg:p-[100px] rounded-[10px] shadow-lg">
                    <h1 className="text-3xl font-semibold text-center mb-8">Update Book</h1>
                    <form onSubmit={handleSubmit} className="mx-auto space-y-6">
                        <div className="mb-4">
                            <label className='label'>
                                <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                                    Book Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={book.name}
                                onChange={handleChange}
                                placeholder="Book Title"
                                className="input input-bordered w-full bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                            />
                        </div>

                        <div className="mb-4">
                            <label className='label'>
                                <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                                    Book Author
                                </span>
                            </label>
                            <input
                                type="text"
                                name="author"
                                defaultValue={book.author}
                                onChange={handleChange}
                                placeholder="Author Name"
                                className="input input-bordered w-full bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                            />
                        </div>

                        <div className="mb-4">
                            <label className='label'>
                                <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                                    Book Category
                                </span>
                            </label>
                            <input
                                type="text"
                                name="category"
                                defaultValue={book.category}
                                onChange={handleChange}
                                placeholder="Category"
                                className="input input-bordered w-full bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                            />
                        </div>

                        <div className="mb-4">
                            <label className='label'>
                                <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                                    Book Quantity
                                </span>
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                defaultValue={book.quantity}
                                onChange={handleChange}
                                placeholder="Quantity"
                                className="input input-bordered w-full bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                            />
                        </div>

                        <div className="mb-4">
                            <label className='label'>
                                <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                                    Book Rating
                                </span>
                            </label>
                            <input
                                type="text"
                                name="rating"
                                defaultValue={book.rating}
                                onChange={handleChange}
                                placeholder="Rating (1-5)"
                                min="1"
                                max="5"
                                className="input input-bordered w-full bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                            />
                        </div>


                        <div className="mb-4">
                            <label className='label'>
                                <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                                    Book Image URL
                                </span>
                            </label>
                            <input
                                type="url"
                                name="image"
                                defaultValue={book.image}
                                onChange={handleChange}
                                placeholder="Image URL"
                                className="input input-bordered w-full bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Update Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;
