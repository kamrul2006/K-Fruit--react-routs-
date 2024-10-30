
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
// import Details from "./Details";

const ProductCard = () => {
    // const [produc, setProduc] = useState([])
    const [prop, setProp] = useState([])
    const handleViw = product => {
        setProp([product])
        console.log(product)
    }
    console.log(prop)

    const products = useLoaderData();
    // console.log(products)

    return (

        <div className="md:grid grid-cols-3 gap-4 mx-12 my-7">

            {
                products.map(product =>

                    <div key={product.id} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-green-300 mt-2 mx-auto">

                        <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />

                        <div className="p-6">

                            <div className="flex items-center justify-between">
                                <h3 className="text-lg md:text-2xl font-serif font-semibold text-gray-900">{product.name}</h3>
                                <h3 className="text-xs font-semibold text-gray-400 border px-1 rounded-md">{product.category}</h3>
                            </div>


                            <p className="text-gray-600 mt-2 text-sm">{product.description}</p>

                            <div className="mt-4 flex justify-between items-center">

                                <span className="text-xl font-bold text-gray-900">$ {product.price}</span>

                                <button
                                    onClick={() => handleViw(product)}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                                >
                                    <Link to={`/product/${product.name}`}>     View Details</Link>
                                    {/* <a href={`/product/${product.name}`}>View Detail</a> */}
                                    {/* View Detail */}
                                </button>



                            </div>
                            <div className="mt-4 flex justify-between items-center">

                                <button
                                    // onClick={onClick}
                                    className="bg-transparent hover:text-white text-black px-2 py-1 rounded-md font-medium hover:bg-blue-500 transition duration-200 border ">
                                    Add to Cart
                                </button>

                                <button
                                    //   onClick={onClick} 
                                    className="bg-orange-500 text-white px-7 py-2 rounded-lg font-semibold hover:bg-pink-600 transition duration-200"
                                >
                                    Bye Now
                                </button>
                            </div>
                        </div>
                    </div>
                )

            }
            {/* <div className="hidden">
                <Details
                    prop={prop}
                ></Details>
            </div> */}
        </div>

    )
};

export default ProductCard;
