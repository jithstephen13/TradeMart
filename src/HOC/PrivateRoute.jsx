import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getItem } from "../utility/localStorage";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const toast = useToast();
  let tocken = getItem("userData");

  if (getItem("userData") == null) {
    toast({
      title: "please login ",
      description: "",
      status: "error",
      duration: 2000,
      isClosable: true,
      backgroundColor: "red",
    });
  }

  if (getItem("userData") != null) {
    return children;
  }
  return <Navigate to={"/"} replace />;
};

export default PrivateRoute;
