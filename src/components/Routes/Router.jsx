import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OrderFood from "../pages/Order/OrderFood";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyOrder from "../pages/Myorder/MyOrder";
import Cart from "../pages/Dashborad/Cart/Cart";
import DashBoard from "../Layout/DashBoard";
import AllUsers from "../pages/Dashborad/AllUsers/AllUsers";
import AddItems from "../pages/Dashborad/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/Dashborad/Payment/Payment";
import AdminHome from "../pages/Dashborad/AdminHome/AdminHome";
import UserHome from "../pages/Dashborad/UserHome/UserHome";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order-food",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "order-food/:category",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "ordered-food",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      // users routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },

      // admin routes
      {
        path: "Users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
