import axios from "axios";
import Swal from "sweetalert2";


const AddBooks = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        axios.post('http://localhost:5000/books', initialData)
            .then((res) => {
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Book Added',
                    text: 'New book has been added successfully.',
                    timer: 2000,
                });
            })
            .catch((error) => console.error('Error adding book:', error));
    }
    return (
        <div className="bg-[#f3f3f3]">
            <div className="container mx-auto py-12 px-5 md:px-[100px] lg:px-[400px]">
                <div className="bg-white p-10 md:p-[50px] lg:p-[100px] rounded-[10px] shadow-lg">
                    <h1 className="text-3xl font-semibold text-center mb-8">Add Book</h1>
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
                            <select
                                name="category" defaultValue={'Select Category'}
                                className="select bg-[#f3f3f3] rounded-[5px] border-none"
                                required
                            >
                                <option disabled className="opacity-50">Select Category</option>
                                <option value="Sci-F">Sci-Fi</option>
                                <option value="Design">Thriller</option>
                                <option value="Marketing">Novel</option>
                                <option value="Sales">History</option>
                                <option value="Customer Support">Drama</option>
            
                            </select>
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
                                type="number"
                                name="rating"
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
                                placeholder="Image URL"
                                className="input input-bordered w-full bg-[#f3f3f3] rounded-[5px] border-none px-5 py-6"
                            />
                        </div>

                        <div className="mb-4">
                            <label className='label'>
                                <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                                    Short Description
                                </span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Short Description About Book"
                                className="input input-bordered w-full h-[100px] bg-[#f3f3f3] rounded-[5px] border-none px-5 pt-3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className='label'>
                                <span className='label-text text-[#403f3f] text-xl font-semibold mb-2'>
                                    Book Content
                                </span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="More About Book"
                                className="input input-bordered w-full h-[100px] bg-[#f3f3f3] rounded-[5px] border-none px-5 pt-3"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Add Book
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;