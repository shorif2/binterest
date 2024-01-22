import { Link, NavLink } from "react-router-dom";
import avatar from "../../../public/binterest.png";
import useAuth from "../../hooks/useAuth";
import Login from "../Register/Login";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navLinks = (
    <>
      <li>
        {" "}
        <Link className="bg-[#0A2540] text-white px-7 rounded-[50px]" to="/">
          Home
        </Link>{" "}
      </li>
      <button className="bg-[#DBD9FF] px-7 rounded-[50px]">Create</button>
    </>
  );
  return (
    <div className="bg-[#635BFF0D]">
      <div className="container mx-auto navbar gap-2 ">
        <div className="navbar-start">
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink>
            <div className="flex justify-center items-center gap-2">
              <img
                className="w-10 h-10"
                src="https://i.ibb.co/yqjZhy0/pinterest-logo-png-2004.png"
                alt=""
              />
              <p className="normal-case text-xl font-medium">BINTEREST</p>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-6">{navLinks}</ul>
        </div>
        <input
          className="border rounded-3xl px-6 py-2 text-sm w-2/3"
          type="text"
          name=""
          placeholder="Search..."
          id=""
        />

        {/* <div className="navbar-end">
                {
                    user ? <div className="flex gap-4">
                        <Link to='/dashboard' className="btn btn-ghost">Dashboard</Link>
                        
                    </div>
                        :
                        <div className="flex gap-4">
                            <Link to='/login'><button className="btn">Login</button></Link>
                            <Link to='/register'><button className="btn">Register</button></Link>
                        </div>
                }
            </div> */}

        {user ? (
          <>
            <div className="navbar-end">
              <button className="border px-7 py-1.5 rounded-[50px]">
                {user
                  ? user?.displayName
                    ? user?.displayName
                    : user?.email?.toUpperCase().slice(0, 1)
                  : ""}
              </button>
              <button onClick={() => logout()} className="btn">
                Logout
              </button>
              <div className="w-16">
                <img className="" src={avatar} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="navbar-end">
            {" "}
            <Login></Login>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
