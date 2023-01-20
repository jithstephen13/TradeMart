import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getItem } from "../utility/localStorage";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  let tocken=getItem("userData")
  console.log(isAuth);
  if (isAuth||tocken!=null) {
    return children;
  }
  return <Navigate to={"/"} replace />;
};

export default PrivateRoute;