import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();
  if (isLoading || isAdminLoading) {
    return <p>Loading ...</p>;
  }
  if (isAdmin && user.email) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
