import {
  Button,
  Flex,
  Heading,
  Input,
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
import { GetAllAdmin } from "../redux/Auth/auth.action";
import { getItem } from "../utility/localStorage";

const AdninLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cred, setCred] = useState({});
  const toast = useToast();

  const navigate = useNavigate();

  const handlechenge = (e) => {
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
    });
  };
  const { isLoading, isError, userData, isAuth, userlist, adminlist } =
    useSelector((store) => store.auth);
  const dispatch = useDispatch();

                                        //  This is the component that we are using for the Admin login         

  const handleLogin = () => {
    adminlist.forEach((element) => {
      if (element.email === cred.email && element.password === cred.password) {
        toast({
          title: "successfully sign in ",
          description: "",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        navigate("/alogin");
      }
    });
  };
  let tocken = getItem("userData");
  useEffect(() => {
    dispatch(GetAllAdmin());
  }, []);

  return (
    <>
      <Button onClick={onOpen}>Login </Button>:
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody textAlign={"center"} pb={6}>
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
            </Flex>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AdninLogin;
