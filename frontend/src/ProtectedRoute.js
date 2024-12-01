import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  if (!token || !userId) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
