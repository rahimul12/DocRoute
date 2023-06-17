import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/authProvider";
import { removeUser } from "../fetures/usersApi/userSlice";

const Navbar = () => {
  const { user, logout } = useContext(UserAuth);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userData);
  console.log(currentUser);

  const menuList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {currentUser?.user?.category === "patient" && (
        <li>
          <Link to="/ditaction">Detection</Link>
        </li>
      )}
      <li>
        <Link to="/doctors">Doctors</Link>
      </li>
    </>
  );

  const handleLogout = () => {
    logout();
    dispatch(removeUser);
    localStorage.clear();
    toast.success("successfully logout");
  };

  return (
    <div className="navbar bg-base-100 border">
      <div className="navbar-start">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuList}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doc Route
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuList}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  {currentUser?.user?.category === "admin" ? (
                    <Link to="/admin-dashboard">Admin Dashboard</Link>
                  ) : (
                    <Link to="/dashboard" className="justify-between">
                      Dashboard
                    </Link>
                  )}
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="py-2 hover:bg-black hover:text-white duration-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 border border-gray-500 hover:bg-black hover:text-white duration-500 transition-colors ease-in-out">
              Login / Register
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
