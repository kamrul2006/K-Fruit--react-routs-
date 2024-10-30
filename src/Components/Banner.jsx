import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="text-white ">
                <div
                    className="h-full"
                    style={{
                        backgroundImage: "url(https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4)", backgroundPosition: "center", backgroundSize: 'cover'
                    }}>
                    <div className="bg-green-700 bg-opacity-60 py-20  h-full">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl font-bold mb-4">Welcome to K-Fruit</h1>
                            <p className="text-lg mb-6">
                                Discover the freshest and highest-quality fruits, handpicked just for you. Your one-stop shop for all things fruity and nutritious.
                            </p>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
                             <Link to="/product">Shop Now</Link>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            {/* jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj */}


    




        </div>
    );
};

export default Banner;