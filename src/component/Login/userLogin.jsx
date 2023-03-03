import React, { useEffect, useState } from 'react';
import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Input, Text, Image, Button, PopoverFooter, PopoverBody, PopoverHeader, PopoverCloseButton, PopoverArrow, PopoverContent, Popover, PopoverTrigger,  Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Spinner, useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItem, setItem } from '../../utility/localStorage';
import { AddUser } from '../../redux/Authentication/auth.action';

const UserLogin = ({handlechenge,Registarion ,handleLogin,setRegistarion,setConform,cred,conform,handleLogout,admin}) => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const { isLoading, isError, userData, isAuth, userlist, adminlist } = useSelector((store) => store.auth);
     let tocken = getItem("userData");



     const [firstname,setFirstname]=useState("")
     const [laststname,setLaststname]=useState("")
     const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")
     const [conpassword,setconPassword]=useState("")
      const dispatch=useDispatch()
      const toast = useToast();



const signin=getItem("signinuser")


      const handleClick=async()=>{
      if(password==conpassword){ 
    
    try {
      dispatch(AddUser({firstname,laststname,email,password}))

    
       

    } catch (error) {
      
    }
    }
 
}

let signuser=getItem("signuserData")
let user=getItem("userData")
useEffect(()=>{

  if(!isLoading&&signuser!=null&&signuser.Message&&signuser.Message=="New User Successfully Registered! Please Logged In"){
    setItem("signuserData",{})
    setRegistarion(!Registarion)
    toast({
     title: "successfully sign in ",
     description: "",
     status: "success",
     duration: 6000,
     isClosable: true,
   });
  
   }

   if(!isLoading&&user!=null&&user.token &&user.Message!=null&&user.Message&& user.Message!="Incorrect Email Address! Please try again"){
   
    setItem("userData",{...user,Message:null})
   
    toast({
     title: "successfully Login in ",
     description: "",
     status: "success",
     duration: 6000,
     isClosable: true,
   });
   
   }

   if(!isLoading&&user!=null&&user.Message!=null && user.Message=="Incorrect Email Address! Please try again"){
    toast({
      title: "Incorrect Email Address! or Passowoed Please try again",
      description: "",
      status: "error",
      duration: 6000,
      isClosable: true,
    });
    setItem("userData",{...user,Message:null})
   }

},[signuser,dispatch])
    
    return (
        <>

{tocken === null ? (
                        <Button
                          onClick={onOpen}
                          fontSize={{ base: "12px", md: "14px" }}
                          fontFamily="arial"
                          background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                          colorScheme="#fff"
                          size="md"
                          p="5px 40px"
                        >
                          Login/siginup
                        </Button>
                      ) : (
                        <Button
                          onClick={handleLogout}
                          fontSize={{ base: "12px", md: "14px" }}
                          fontFamily="arial"
                          background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                          colorScheme="#fff"
                          size="md"
                          p="5px 40px"
                        >
                          Logout
                        </Button>
                      )}
                      {!admin && (

<Modal
closeOnOverlayClick={false}
isOpen={isOpen}
onClose={onClose}
>
<ModalOverlay />
<ModalContent>
  <ModalCloseButton />
  <ModalBody textAlign={"center"} pb={6}>
    {!Registarion && (
      <Flex mt={20} flexDirection={"column"} gap={2}>
        <Heading color={"#333"}>Login</Heading>
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
        <Button
          onClick={handleLogin}
          fontFamily="arial"
          background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
          colorScheme="#fff"
          mr={3}
        >
          {isLoading ? <Spinner /> : "Login"}{" "}
        </Button>
        <Link onClick={() => setRegistarion(true)}>
          Don't have an account?{" "}
          <span style={{ color: "blue" }}>
            Create your new account
          </span>
        </Link>
      </Flex>
    )}

    {Registarion && (
      <Flex flexDirection={"column"} gap={2}>
        <Heading color={"#333"}>Registration</Heading>
        <Input
          placeholder="First name..."
          name="firstname"
          onChange={(e)=>setFirstname(e.target.value)}
        ></Input>
        <p style={{ color: "red" }}>
          {firstname.length < 2 
            ? "please Enter Valid name"
            : ""}
        </p>
        <Input
          placeholder="Lastst name..."
          name="laststname"
          onChange={(e)=>setLaststname(e.target.value)}
        ></Input>
        <Input
          placeholder="Email..."
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
        ></Input>
        <p style={{ color: "red" }}>
          {email&&email.length < 7 
            ? "please Enter Email"
            : ""}
        </p>
        <Input
          placeholder="Password..."
          name="password"
          type={"password"}
          onChange={(e)=>setPassword(e.target.value)}
        ></Input>
           <p style={{ color: "red" }}>
          {password&&password.length <= 3 
            ? "please Enter valid password"
            : ""}
        </p>

        <Input
          placeholder="conform Password..."
          type={"password"}
          onChange={(e)=>setconPassword(e.target.value)}
        ></Input>
        <p style={{ color: "red" }}>
          {conpassword.length !== 0 &&
          conpassword !== password
            ? "password is not matching"
            : ""}
        </p>
        <Button
          onClick={handleClick}
          fontFamily="arial"
          background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
          colorScheme="#fff"
          mr={3}
        >
          {isLoading ? <Spinner /> : "Sign Up"}{" "}
        </Button>
        <Link
          onClick={() => setRegistarion(!Registarion)}
        >
          {" "}
          already have an account
        </Link>
      </Flex>
    )}
  </ModalBody>
</ModalContent>
</Modal>

                      )}
       
        </>
    );
};

export default UserLogin;