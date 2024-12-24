import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../auth/Register";
import Login from "../auth/Login";
import BookCategory from "../components/BookCategory";
import BookDetails from "../components/BookDetails";
import PrivateRoute from "../provider/PrivateRoute";
import BorrowedBooks from "../pages/BorrowedBooks";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div className="text-center text-3xl">404 Not Found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/books/:category',
                element: <BookCategory></BookCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.category}`)
            },
            {
                path: '/books/details/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/details/${params.id}`)
            },

            {
                path: '/borrowedBooks',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/borrowedBooks')
            }
        ]
    },
]);

export default Router;