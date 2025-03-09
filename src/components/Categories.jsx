import { Link } from 'react-router-dom';

const Categories = () => {

    const categories = [
        {
            id: 1,
            name: 'Sci-Fi',
            image: 'https://i.ibb.co.com/bmHtBQs/sci-fi.jpg'
        },
        {
            id: 2,
            name: 'Thriller',
            image: 'https://i.ibb.co.com/gVTRskN/thriller.jpg'
        },
        {
            id: 3,
            name: 'Novel',
            image: 'https://i.ibb.co.com/BgFpv3Z/novel.jpg'
        },
        {
            id: 4,
            name: 'Drama',
            image: 'https://i.ibb.co.com/cNtNk4q/drama.jpg'
        }
    ];

    return (
        <div className="container mx-auto py-6 lg:py-10 px-5 lg:px-0">
            <h1 className="text-4xl font-bold text-center mb-8">Explore Book Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {categories.map((category) => (
                    <div key={category.id} className="category-card relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                        <div className="absolute bottom-4 left-4 text-white z-10">
                            <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                        </div>
                        <Link
                            to={`/books/${category.name}`}
                            className="absolute bottom-4 right-4 text-lg bg-[#1a237e] border-none hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors duration-300"
                        >
                            View Books
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
