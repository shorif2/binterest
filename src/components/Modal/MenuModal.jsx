import { NavLink } from "react-router-dom";

const MenuModal = ({ logout }) => {
  return (
    <div className="flex flex-col bg-green-400 text-black rounded-md py-6 w-max">
      <div className="grid grid-cols-1">
        <NavLink
          to="/profile"
          className="border-y w-48 text-start p-2 pl-4 font-medium hover:bg-green-500"
        >
          Profile
        </NavLink>
        <button className="border-b w-48 text-start p-2 pl-4 font-medium hover:bg-green-500">
          Setting
        </button>
        <button
          onClick={logout}
          className="border-b w-48 text-start p-2 pl-4 font-medium hover:bg-green-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
