import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <div className="sticky top-0">
                <Nav></Nav>
            </div>

            {
                navigation.state === "loading" ?
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className="relative w-20 h-20">
                            <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-blue-500 border-b-green-500 animate-spin"></div>
                            <div className="absolute w-full h-full rounded-full border-4 border-transparent border-l-purple-500 border-r-pink-500 animate-spin [animation-duration:1.5s]"></div>
                        </div>
                    </div>
                    : <Outlet></Outlet>
            }


            <div>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Home;