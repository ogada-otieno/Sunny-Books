import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ user }) => {
  return <>{user ? <Outlet /> : <Navigate to="/" />};</>;
};

export default PrivateRoutes;
