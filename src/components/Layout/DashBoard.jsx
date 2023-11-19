import {
  FaBook,
  FaBookOpen,
  FaHome,
  FaSearch,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  // TODO:Admin will come from database
  const isAdmin = true;
  return (
    <div className="flex ">
      {/*content  sidebar  */}
      <div className="flex flex-col gap-2 border-4 p-2 text-center min-h-screen bg-[#D1A054]">
        {isAdmin ? (
          <>
            <li className="btn btn-outline btn-md btn-primary">
              <FaHome></FaHome>
              <NavLink to="/dashboard/adminHome">Admin Home </NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaUtensils></FaUtensils>
              <NavLink to="/dashboard/items">Add Items</NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaBook></FaBook>
              <NavLink to="/dashboard/bookings"> Manage Booking</NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaUser></FaUser>
              <NavLink to="/dashboard/users">All Users</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="btn btn-outline btn-md btn-primary">
              <FaHome></FaHome>
              <NavLink to="/dashboard/cart">User Home </NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaUtensils></FaUtensils>
              <NavLink to="/dashboard/cart">Reservation</NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaBook></FaBook>
              <NavLink to="/dashboard/cart"> My cart ()</NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaUser></FaUser>
              <NavLink to="/dashboard/cart">Add Review</NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaUser></FaUser>
              <NavLink to="/dashboard/cart">My Booking</NavLink>
            </li>
            {/* public routes */}
            <div className="divider "></div>
            <li className="btn btn-outline btn-md btn-primary">
              <FaHome></FaHome>
              <NavLink to="/dashboard/cart">Home </NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaSearch></FaSearch>
              <NavLink to="/dashboard/cart">Menu </NavLink>
            </li>
            <li className="btn btn-outline btn-md btn-primary">
              <FaBookOpen></FaBookOpen>
              <NavLink to="/dashboard/cart">Contact </NavLink>
            </li>
          </>
        )}
        {/* public routes */}
        <div className="divider "></div>
        <li className="btn btn-outline btn-md btn-primary">
          <FaHome></FaHome>
          <NavLink to="/dashboard/cart">Home </NavLink>
        </li>
        <li className="btn btn-outline btn-md btn-primary">
          <FaSearch></FaSearch>
          <NavLink to="/dashboard/cart">Menu </NavLink>
        </li>
        <li className="btn btn-outline btn-md btn-primary">
          <FaBookOpen></FaBookOpen>
          <NavLink to="/dashboard/cart">Contact </NavLink>
        </li>
      </div>

      {/* content  */}
      <div className="flex-grow border-4 p-6 border-green-700">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
