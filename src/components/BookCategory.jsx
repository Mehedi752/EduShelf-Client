import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookCategory = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div>
            <h3 className="">Number of Books : {books.length}</h3>
        </div>
    );
};

export default BookCategory;