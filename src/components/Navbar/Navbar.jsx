import { Link } from "react-router-dom";
import avatar from "../../../public/binterest.png";

import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import MenuModal from "../Modal/MenuModal";
import Login from "../Register/Login";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [openModal, setOpenModal] = useState(false);
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
      <div className="flex justify-center items-center gap-4 px-10 py-3">
        <div className="flex justify-center items-center">
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
          {/* Dropdown */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              <img
                className="w-10 h-10"
                src="https://i.ibb.co/yqjZhy0/pinterest-logo-png-2004.png"
                alt=""
              />
              {/* <p className="normal-case text-xl font-medium">BINTEREST</p> */}
            </div>
            <ul className="menu menu-horizontal px-1 gap-6">{navLinks}</ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex flex-grow">
          <input
            className="border w-full rounded-3xl px-6 py-2 text-sm "
            type="text"
            name=""
            placeholder="Search..."
            id=""
          />
        </div>

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
            <div className="flex justify-center items-center">
              <button className="border bg-[#0A2540] text-white rounded-[50px] inline-flex justify-center items-center font-medium  gap-4 pl-4">
                Saved
                <span className="bg-red-500 rounded-full p-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    height="24px"
                    width="24px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z"
                        fill="#ffffff"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
              <div className="relative">
                <div className="flex justify-center items-center">
                  <img className="w-16" src={avatar} alt="" />
                  <span onClick={() => setOpenModal(!openModal)}>
                    <svg
                      fill="#000000"
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 330.00 330.00"
                      xmlSpace="preserve"
                      stroke="#000000"
                      strokeWidth="0.0033"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          id="XMLID_102_"
                          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </div>
                {openModal && (
                  <div className="absolute z-10 top-14 right-0">
                    <MenuModal logout={() => logout()} />
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="">
            {" "}
            <Login></Login>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
