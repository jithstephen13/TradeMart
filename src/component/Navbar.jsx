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
//-----------***------------------------------------------------------------------
import Logo from "../utility/Logo.png"

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return (
      <>
        <Box  px={4} backgroundColor="#2E3192" >
          <Flex h={14} alignItems={'center'} justifyContent={'space-between'} >
            <HStack spacing={{base:3, md:8}} alignItems={'center'}>
              <Box w={["120px","140px","160px","200px"]} >
                  <Image src={Logo} />
              </Box>
              {/* <Input placeholder='search' display={{base:"none", md:"flex"}} /> */}
            </HStack>
            <Flex alignItems={'center'} w={{md:"75%",md:"40%", lg:"30%"}} >
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
                      <PopoverContent border="none" borderRadius="0px" boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px" >
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>
                              <Box align="center" >
                                  <Button m="5px" fontSize={{base:"12px", md:"14px"}} colorScheme='teal' size='md' p="5px 40px" >
                                    Sign In
                                  </Button>
                                  <Text fontSize={{base:"11px", md:"12px"}} >New to TRADEMART <span style={{color:"blue"}} >Join Now</span></Text>
                              </Box>
                          </PopoverHeader>
                          <PopoverBody>
                              <Box>
                                <Flex m={{base:"5px 0px", md:"10px 0px"}} gap="5px" >
                                    <AiOutlineHome fontSize="20px" color="gray" />         
                                    <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500">Home</Text>
                                </Flex>
                                <Flex m={{base:"5px 0px", md:"10px 0px"}} gap="5px" >
                                    <MdSendToMobile fontSize="20px" color="gray" />        
                                    <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500">Post Your Requirement</Text>
                                </Flex>
                                <Flex m={{base:"5px 0px", md:"10px 0px"}} gap="5px" >
                                    <ImUserCheck fontSize="20px" color="gray" />           
                                    <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500">Verified</Text>
                                </Flex>
                                <Flex m={{base:"5px 0px", md:"10px 0px"}} gap="5px" >
                                    <BiMessageDetail fontSize="20px" color="gray" />       
                                    <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500">My Orders</Text>
                                </Flex>
                                <Flex m={{base:"5px 0px", md:"10px 0px"}} gap="5px" >
                                    <RiCustomerServiceFill fontSize="20px" color="gray" /> 
                                    <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500">Products/Services Directory</Text>
                                </Flex>
                                <Flex m={{base:"5px 0px", md:"10px 0px"}} gap="5px" >
                                    <AiOutlineSetting fontSize="20px" color="gray" />      
                                    <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500">Settings</Text>
                                </Flex>
                                <Flex m={{base:"5px 0px", md:"10px 0px"}} gap="5px" >
                                    <TiThSmall fontSize="20px" color="gray" />             
                                    <Text display="flex" fontSize={{base:"12px", md:"14px"}} cursor="pointer" fontWeight="500" >Recent Activity</Text>
                                </Flex>
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
                                  <Box m="15px 0px" >
                                      <Text fontSize={{base:"12px", md:"14px"}} fontWeight="500" display="flex"><BiMobile fontSize="20px" color="gray" /> Download APP</Text>
                                  </Box>
                                  <hr />
                              </Box>
                              <Box align="center" >
                                <Button m="5px 0px" fontSize={{base:"12px", md:"14px"}} colorScheme='teal' size='sm' >
                                  Admin Login
                                </Button>
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
                backgroundColor="#2E3192"
                color="white"
                fontSize={{base:"20px", sm:"30px"}}
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