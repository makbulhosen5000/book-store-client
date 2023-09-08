import { useContext } from "react";
import { Navigate, useLocation } from "react-router";

import { AuthContext } from "../provider/AuthProvider";
import LoadingMessage from "../components/Loader/LoadingMessage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <p>
        <LoadingMessage/>
      </p>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
