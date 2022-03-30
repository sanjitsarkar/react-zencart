import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, isLoggedIn } = useAuth();

  return isLoggedIn === true ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;