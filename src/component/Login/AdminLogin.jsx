import React from 'react';
import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Input, Text, Image, Button, PopoverFooter, PopoverBody, PopoverHeader, PopoverCloseButton, PopoverArrow, PopoverContent, Popover, PopoverTrigger,  Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Spinner, useToast,
} from "@chakra-ui/react";
import { useSelector } from 'react-redux';

const AdminLogin = ({setAdmin,admin,handlechenge,handleAdminLogin}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isLoading, isError, userData, isAuth, userlist, adminlist } =
    useSelector((store) => store.auth);
    return (
        <div>
         <Button
                        onClick={() => {
                          setAdmin(!admin);
                          onOpen();
                        }}
                        m="5px 0px"
                        fontSize={{ base: "12px", md: "14px" }}
                        fontFamily="arial"
                        background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                        colorScheme="#fff"
                        size="sm"
                      >
                        Admin Login
                      </Button>
                      {admin && (
                        <Modal
                          closeOnOverlayClick={false}
                          isOpen={isOpen}
                          onClose={onClose}
                        >
                          <ModalOverlay />
                          <ModalContent>
                            <ModalCloseButton />
                            <ModalBody textAlign={"center"} pb={6}>
                              <Flex mt={20} flexDirection={"column"} gap={2}>
                                <Heading color={"#333"}>Login</Heading>
                                <Input
                                  placeholder="User name  : admin@admin.com"
                                  name="email"
                                  onChange={handlechenge}
                                ></Input>
                                <Input
                                  placeholder="Password :admin@2"
                                  type={"password"}
                                  name="password"
                                  onChange={handlechenge}
                                ></Input>
                                <Button
                                  onClick={handleAdminLogin}
                                  fontFamily="arial"
                                  background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                                  colorScheme="#fff"
                                  mr={3}
                                >
                                  {isLoading ? <Spinner /> : "Login"}
                                </Button>
                              </Flex>
                            </ModalBody>
                          </ModalContent>
                        </Modal>
                      )}
            
        </div>
    );
};

export default AdminLogin;