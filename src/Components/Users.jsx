import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData()
    // console.log(users)

    return (
        <div className="mx-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">           Our Workers: {users.length}</h1>
 

            <div className="grid grid-cols-3">
                {users.map(user => <div key={user.id}
                    className="bg-sky-200 hover:bg-sky-300 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 m-2 text-center"
                >
                    <p className="text-2xl font-bold">Name: {user.name}</p>
                    <p className="text-xl">Email: {user.email}</p>
                    <p className="text-xl">ID: 1210-{user.id}0</p>
                    <p className="text-xl">Phone: {user.phone}</p>
                    <hr />
                    <Link to={`/workers/worker/${user.id}`}>
                        <button
                            className=" m-2 bg-orange-300 hover:bg-orange-500 text-xl font-semibold w-full py-2 rounded-full transition duration-300 hover:text-white"
                        >Details</button></Link>
                </div>)}
            </div>


        </div>
    );
};

export default Users;