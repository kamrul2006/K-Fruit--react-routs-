import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import AboutSection from './Components/About.jsx';
import ContactSection from './Contact.jsx';
import Banner from './Components/Banner.jsx';
import ProductCard from './Components/Products.jsx';
import Details from './Components/Details.jsx';
import Users from './Components/Users.jsx';
import ErrorPage from './Components/Error.jsx';
import { Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Banner></Banner>
      },
      {
        path: "/about",
        element: <AboutSection></AboutSection>
      },
      {
        path: "/contact",
        element: <ContactSection></ContactSection>
      },
      {
        path: "/product",
        loader: () => fetch('Product.json'),
        element: <ProductCard></ProductCard>
      },
      {
        path: "/workers",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/product/:name",
        // loader: ({ params }) => console.log(params.name),
        // loader: ({ params }) => fetch(`Product.json/${params.name}`),
        element: <div className=' lg:px-52 my-10 border lg:mx-32'>
          <h2 className="text-lg lg:text-3xl font-bold text-gray-800 my-4 text-center py-6 ">No Data Here !!!</h2>
          <br />
          <Link to="../home">
            <button
              className=" bg-red-300 hover:bg-red-500 lg:text-xl font-semibold py-2 mx-auto  px-10 rounded-full transition duration-300 lg:w-full hover:text-white mb-4"
            >Go Back</button>
          </Link>
        </div>
      },
      {
        path: "workers/worker/:id",
        // loader: ({ params }) => console.log(params.name),
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <Details></Details>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
