import {
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUser, LoginUser, LogOUT } from "../redux/Auth/auth.action";
import { getItem } from "../utility/localStorage";
                                            //  Component Model for Login Pop Up 
const Login = () => {
  const [Registarion, setRegistarion] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cred, setCred] = useState({});
  const [conform, setConform] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handlechenge = (e) => {
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
    });
  };
  const { isLoading, isError, userData, isAuth, userlist } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(AddUser(cred));
  };

  const handleLogin = async () => {
    dispatch(LoginUser(cred));
  };
  let tocken = getItem("userData");
  useEffect(() => {
    if (tocken !== null) {
      toast({
        title: "successfully sign in ",
        description: "",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      navigate("/cart");
    }
  }, [tocken, dispatch]);


  const handleLogout = () => {
    dispatch(LogOUT());
  };

  return (
    <>
      {tocken === null ? (
        <Button onClick={onOpen}>Login/siginup</Button>
      ) : (
        <Button onClick={handleLogout}>Logout</Button>
      )}

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody textAlign={"center"} pb={6}>
            {!Registarion && (
              <Flex mt={20} flexDirection={"column"} gap={2}>
                <Heading color={"blueviolet"}>Login</Heading>
                <Input
                  placeholder="User name..."
                  name="email"
                  onChange={handlechenge}
                ></Input>
                <Input
                  placeholder="Password..."
                  type={"password"}
                  name="password"
                  onChange={handlechenge}
                ></Input>
                <Button onClick={handleLogin} colorScheme="blue" mr={3}>
                  {isLoading ? <Spinner /> : "Login"}
                </Button>
                <Link onClick={() => setRegistarion(true)}>
                  Don't have an account?{" "}
                  <span style={{ color: "blue" }}>Create your new account</span>
                </Link>
              </Flex>
            )}

            {Registarion && (
              <Flex flexDirection={"column"} gap={2}>
                <Heading color={"blueviolet"}>Registration</Heading>
                <Input
                  placeholder="First name..."
                  name="firstname"
                  onChange={handlechenge}
                ></Input>
                <Input
                  placeholder="Lastst name..."
                  name="laststname"
                  onChange={handlechenge}
                ></Input>
                <Input
                  placeholder="Email..."
                  name="email"
                  onChange={handlechenge}
                ></Input>
                <Input
                  placeholder="Password..."
                  name="password"
                  type={"password"}
                  onChange={handlechenge}
                ></Input>

                <Input
                  placeholder="conform Password..."
                  type={"password"}
                  onChange={(e) => setConform(e.target.value)}
                ></Input>
                <p style={{ color: "red" }}>
                  {cred.password !== undefined && conform !== cred.password
                    ? "password is not matching"
                    : ""}
                </p>
                <Button onClick={handleClick} colorScheme="blue" mr={3}>
                  {isLoading ? <Spinner /> : "Sign Up"}
                </Button>
                <Link onClick={() => setRegistarion(!Registarion)}>
                  {" "}
                  already have an account
                </Link>
              </Flex>
            )}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
