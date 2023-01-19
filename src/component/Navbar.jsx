import React, { useEffect, useState } from 'react';
//-----------Chakra UI Components-------
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Input, Text, Image, Button, PopoverFooter, PopoverBody, PopoverHeader, PopoverCloseButton, PopoverArrow, PopoverContent, Popover, PopoverTrigger,  } from '@chakra-ui/react';
//-----------ICONS----------------------
import { TiThSmall } from "react-icons/ti";
import { ImUserCheck } from "react-icons/im";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsQuestionCircle, BsShop } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MdOutlineMessage, MdSendToMobile } from "react-icons/md";
import { BiMessageDetail, BiMobile, BiUserCircle } from "react-icons/bi";
import { AiOutlineHome, AiOutlineSetting, AiOutlineTag } from "react-icons/ai";
import {   Heading,    Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Spinner, useToast } from '@chakra-ui/react';

//-----------***------------------------------------------------------------------
import Logo from "../utility/Logo.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, LoginUser, LogOUT } from '../redux/Auth/auth.action';
import { getItem } from '../utility/localStorage';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const[Registarion,setRegistarion] =useState(false)       
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const [cred,setCred]=useState({})
    const [conform,setConform]=useState("")
    const navigate = useNavigate()
    const toast = useToast();
  
    const handlechenge=(e)=>{
      const { name, value } = e.target;
      setCred({
        ...cred,
        [name]:value
      })
    }
  const {isLoading ,
    isError ,
    userData,
    isAuth,
    userlist}=useSelector((store)=>store.auth)
  const dispatch=useDispatch()
  
  
    const handleClick=async()=>{
      try {
         dispatch(AddUser(cred))
         toast({
          title: "successfully sign in ",
          description: "",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        onClose()
        navigate("/")
      } catch (error) {
        
      }
    
    }
  
    const handleLogin=async()=>{
      try {
        dispatch(LoginUser(cred))
        toast({
          title: "successfully sign in ",
          description: "",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        onClose()
        navigate("/")

      } catch (error) {
        
      }
    
    }
    let tocken=getItem("userData")
    
  
  const handleLogout=()=>{
    dispatch(LogOUT())
  }
    
    return (
      <>
        <Box  px={4} backgroundColor="#2E3192" >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
            <HStack spacing={{base:3, md:8}} alignItems={'center'}>
              <Box w={["60%","38%","35%","30%"]} >
                  <Image src={Logo} />
              </Box>
              <Input placeholder='search' display={{base:"none", md:"flex"}} />
            </HStack>
            <Flex alignItems={'center'} w={{md:"65%",lg:"30%"}}>
              <Box
                justifyContent="space-around"
                w="100%"
                display={{ base: 'none', md: 'flex' }}>
                  <Box align="center" >
                      <AiOutlineTag fontSize="20px" color="#dbdbdb" cursor="pointer" />
                      <Text cursor="pointer" fontSize="12px" color="white" >Shopping</Text>
                  </Box>
                  <Box align="center" >
                      <BsShop fontSize="20px" color="#dbdbdb" cursor="pointer" />
                      <Text cursor="pointer" fontSize="12px" color="white" >Sell</Text>
                  </Box>
                  <Box align="center" >
                      <BsQuestionCircle fontSize="20px" color="#dbdbdb" cursor="pointer" />
                      <Text cursor="pointer" fontSize="12px" color="white" >Shopping</Text>
                  </Box>
                  <Box align="center" >
                      <MdOutlineMessage fontSize="20px" color="#dbdbdb" cursor="pointer" />
                      <Text cursor="pointer" fontSize="12px" color="white" >Message</Text>
                  </Box>
                  <Popover>
                      <PopoverTrigger>
                          <Box align="center" >
                              <BiUserCircle fontSize="20px" color="#dbdbdb" cursor="pointer" />
                              <Text cursor="pointer" fontSize="12px" color="white" >Sign In</Text>
                          </Box>
                      </PopoverTrigger>
                      <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>
                              <Box align="center" >
                              {tocken===null?<Button onClick={onOpen} fontSize={{base:"12px", md:"14px"}} colorScheme='teal' size='md' p="5px 40px" >
                                  Login/siginup
                                  </Button>:
                                  <Button onClick={handleLogout} fontSize={{base:"12px", md:"14px"}} colorScheme='teal' size='md' p="5px 40px" >
                                  Logout
                                  </Button>}
                                  <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
         
          <ModalCloseButton />
          <ModalBody  textAlign={"center"}  pb={6}>
          {!Registarion&& <Flex mt={20} flexDirection={"column"} gap={2}>
             <Heading  color={"blueviolet"}>Login</Heading>
            <Input placeholder='User name...' name='email' onChange={handlechenge}></Input>
            <Input placeholder='Password...' type={"password"} name='password' onChange={handlechenge}></Input>
            <Button onClick={handleLogin} colorScheme='blue' mr={3}>
             {isLoading? <Spinner/>:"Login"} 
            </Button>
             <Link onClick={()=>setRegistarion(true)}>Don't have an account? <span style={{color:"blue"}}>Create your new account</span></Link>
 
            </Flex>} 

            {Registarion&& <Flex flexDirection={"column"} gap={2}>
            <Heading color={"blueviolet"}>Registration</Heading>
            <Input placeholder='First name...'  name='firstname' onChange={handlechenge}></Input>
            <Input placeholder='Lastst name...'  name='laststname' onChange={handlechenge}></Input>
            <Input placeholder='Email...'  name='email' onChange={handlechenge}></Input>
            <Input placeholder='Password...' name='password' type={"password"} onChange={handlechenge}></Input>

            <Input placeholder='conform Password...'  type={"password"}  onChange={(e)=>setConform(e.target.value)}></Input>
            <p style={{color:'red'}} >{cred.password!==undefined &&conform!==cred.password ? "password is not matching":""   }</p>
            <Button onClick= {handleClick} colorScheme='blue' mr={3}>
            {isLoading? <Spinner/>:"Sign Up"} 
            </Button>
            <Link onClick={()=>setRegistarion(!Registarion)}> already have an account</Link>
                      </Flex>} 
            
         
          </ModalBody>
        
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>

                                  <Text fontSize={{base:"11px", md:"12px"}} >New to TRADEMART <span style={{color:"blue"}} >Join Now</span></Text>
                              </Box>
                          </PopoverHeader>
                          <PopoverBody>
                              <Box>
                                  <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500" m={{base:"5px 0px", md:"10px 0px"}} ><AiOutlineHome fontSize="20px" color="gray" /> Home</Text>
                                  <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500" m={{base:"5px 0px", md:"10px 0px"}} ><MdSendToMobile fontSize="20px" color="gray" /> Post Your Requirement</Text>
                                  <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500" m={{base:"5px 0px", md:"10px 0px"}} ><ImUserCheck fontSize="20px" color="gray" /> Verified</Text>
                                  <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500" m={{base:"5px 0px", md:"10px 0px"}} ><BiMessageDetail fontSize="20px" color="gray" /> My Orders</Text>
                                  <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500" m={{base:"5px 0px", md:"10px 0px"}} ><RiCustomerServiceFill fontSize="20px" color="gray" /> Products/Services Directory</Text>
                                  <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500" m={{base:"5px 0px", md:"10px 0px"}} ><AiOutlineSetting fontSize="20px" color="gray" /> Settings</Text>
                                  <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500" m={{base:"5px 0px", md:"10px 0px"}} ><TiThSmall fontSize="20px" color="gray" /> Recent Activity</Text>
                              </Box>
                          </PopoverBody>
                          <PopoverFooter>
                              <Box>
                                  <Box p="10px 0px" >
                                      <Text fontSize={{base:"12px", md:"14px"}} fontWeight="500" >Pay with TRADEMART</Text>
                                      <Text fontSize={{base:"12px", md:"14px"}} color="gray" >Secure & hassle-free payments</Text>
                                  </Box>
                                  <hr />
                                  <Box p="10px 0px" >
                                      <Text fontSize={{base:"12px", md:"14px"}} fontWeight="500" >Ship with TRADEMART</Text>
                                      <Text fontSize={{base:"12px", md:"14px"}} color="gray" >Easy booking & transport</Text>
                                  </Box>
                                  <hr />
                                  <Box>
                                      <Text fontSize={{base:"12px", md:"14px"}} fontWeight="500" display="flex"><BiMobile /> Download APP</Text>
                                  </Box>
                              </Box>
                          </PopoverFooter>
                      </PopoverContent>
                  </Popover>
              </Box>
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                <Text cursor="pointer" fontSize="12px" color="white" >Sign In</Text>
                <Text cursor="pointer" fontSize="12px" color="white" >Message</Text>
                <Text cursor="pointer" fontSize="12px" color="white" >Shopping</Text>
                <Text cursor="pointer" fontSize="12px" color="white" >Help</Text>
                <Text cursor="pointer" fontSize="12px" color="white" >Sell</Text>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  
  };
  
  export default Navbar;