import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const {cart, isPending, error} = useCart();
  console.log(cart);
  if (isPending) {
    return <> Loading ...</>;
  }
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <ul style={{ display: "flex ", gap: "8px" }}>
      <li
        style={{
          // backgroundColor: "yellow ",
          borderRadius: "5px",
          color: "black",
        }}
      >
        <NavLink className={{ backgroundColor: "bg-yellow-300" }} to="/">
          Home
        </NavLink>
      </li>
      <li
        style={{
          // backgroundColor: "yellow ",
          borderRadius: "5px",
          color: "black",
        }}
      ></li>
      {/* <li
        style={{
          backgroundColor: "yellow ",
          borderRadius: "5px",
          color: "black",
        }}
      >
        <NavLink>Dashboard</NavLink>
      </li> */}
      <li
        style={{
          // backgroundColor: "yellow ",
          borderRadius: "5px",
          color: "black",
        }}
      >
        <NavLink className={{ backgroundColor: "bg-yellow-300" }} to="/menu">
          Our Menu
        </NavLink>
      </li>
      <li
        style={{
          // backgroundColor: "yellow ",
          borderRadius: "5px",
          color: "black",
        }}
      >
        <NavLink
          className={{ backgroundColor: "bg-yellow-300" }}
          to="/order-food"
        >
          Order Food
        </NavLink>
      </li>
      <li
        style={{
          // backgroundColor: "yellow ",
          borderRadius: "5px",
          color: "black",
        }}
      >
        <NavLink
          className={{ backgroundColor: "bg-yellow-300" }}
          to="/ordered-food"
        >
          My Order
        </NavLink>
      </li>
      <li
        style={{
          backgroundColor: "yellow ",
          borderRadius: "5px",
          color: "black",
          fontSize: "20px",
        }}
      >
        <NavLink
          to="/dashboard/cart"
          className="btn bg-yellow-400 border rounded-md text-lg text-black"
        >
          <FaShoppingCart className="mr-1"></FaShoppingCart>
          <div className="btn btn-sm bg-yellow-400 border rounded-md text-lg text-black">
            +{cart.length}
          </div>
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-base-100 fixed z-10 opacity-95 max-w-6xl mx-auto text-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link className="btn  bg-yellow-400 text-[#800080] normal-case text-lg hover:bg-yellow-300">
          Elangosteria Bistro
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <Link
            onClick={handleSignOut}
            to="/login"
            className="btn bg-[#F3C522] text-[#800080] hover:bg-yellow-300"
          >
            Sign Out
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#F3C522] text-[#800080] hover:bg-yellow-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
