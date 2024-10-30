import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="">
      <div className="navbar backdrop-blur-md bg-white/20 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/163-512.png" className="w-7" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li> <Link to="/workers">Workers</Link></li>
              <li> <Link to="/product">Products</Link></li>
              <li><Link to="./about">About</Link></li>

              <li> <Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="flex items-center gap-2 md:gap-5">
            <img src="https://i.ibb.co.com/pPGfmzx/kfruit.png" className=" w-16" />
            <Link className=" md:text-5xl font-serif font-bold md:block hidden" to="/home">K-Fruit</Link>
          </div>

        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li> <Link to="/home">Home</Link></li>
            <li> <Link to="/workers">Workers</Link></li>
            <li> <Link to="/product">Products</Link></li>
            <li> <Link to="./about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-circle btn-ghost"><img src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png" className="w-5 md:w-10" /></a>
        </div>
      </div>
    </div>
  );
};

export default Nav;