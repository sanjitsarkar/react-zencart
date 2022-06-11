import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  const { setToast } = useToast();
  useEffect(() => {
    if (!isLoggedIn) {
      setToast({
        content: "You must be logged in to view this page",
        type: "error",
        show: true,
      });
    }
  }, [isLoggedIn]);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
