import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div className="p-8  bg-sky-50 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">More about : {user.name}</h2>


            <div
                className="bg-emerald-200 hover:bg-emerald-300 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 mx-60 text-center"
            >
                <h3 className="text-3xl font-semibold text-gray-800">Name: {user.name}</h3>
                <p className="text-gray-600 mt-2">Location: {user.address.suite},{user.address.street},{user.address.city}</p>
                <p className="text-gray-600 mt-2">E-mail: {user.email}</p>
                <p className="text-gray-600 mt-2">Phone: {user.phone}</p>
                <p className="text-gray-600 mt-2 mb-4">Company Name:  {user.company.name}</p>
                <hr />
                <Link to={`/workers`}>                <button
                    className=" m-2 bg-red-300 hover:bg-red-500 text-xl font-semibold w-full py-2 rounded-full transition duration-300 hover:text-white"
                >Go Back</button></Link>
            </div>


        </div>

    );
};

export default Details;