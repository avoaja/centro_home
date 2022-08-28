import { React } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useCentroStore from "../../store/useCentroStore";

function PrivateRoute({ children }) {
  const { isLoggedIn } = useCentroStore((state) => state);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}

PrivateRoute.propTypes = {
  //   component: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default PrivateRoute;
