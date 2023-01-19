import React from 'react';
import { Box, Button, Flex, Input, Select, Text } from '@chakra-ui/react';
import banner1 from "../utility/homepage-banner1.jpg"

const Home = () => {
    let state = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
    return (
        <Box>
            <Box backgroundImage={banner1} backgroundPosition="center" display="flex" justifyContent="center" alignItems="center" position="relative" backgroundSize="cover" minHeight={{base:"120px",sm:"220px"}} >
                <Box position="absolute" w={["90%","85%","75%","65%","60%"]} >
                    <Text textAlign= "center" outline= "0" margin= "0" padding= "10px" border= "0" font= "inherit" verticalAlign= "baseline" color= "#f9f9f9" fontSize= "22px" >Search for products & find verified sellers near you</Text>
                    <Flex>
                        <Select fontSize={{ base:"10px", sm:"12px",md:"13px"}} backgroundColor= "#ececec" color= "#333" width={{sm:"20%", md:"30%"}} height={{ base:"20px", sm:"30px",md:"50px"}} display={{base:"none",sm:"flex"}} borderRadius="0px" placeholder='All India'>
                            {state?.map((el)=><option style={{fontSize:"12px"}} value='option2'>{el}</option>)}
                        </Select>
                        <Input fontSize={{ base:"12px", sm:"13px",md:"15px"}} variant='unstyled' placeholder=' Enter product/service name' bg="white" height={{ base:"20px", sm:"30px",md:"50px"}} borderRadius="0px" />
                        <Button fontSize={{ base:"12px", sm:"13px",md:"15px"}} borderRadius="0px" fontFamily= "arial" background= "-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))" colorScheme= "#fff" p="5px 22px" border= "none" margin= "0" height={{ base:"20px", sm:"30px",md:"50px"}} font-size= "19px"  position= "relative" left= "-4px" top= "0" cursor= "pointer" width= "142px" font-weight= "700" text-indent= "30px" >Search</Button>
                    </Flex>
                </Box>
            </Box>
            <Box border="1px solid red" height="500px" >
            </Box>
            <Box border="1px solid red" height="500px" >
            </Box>
            <Box border="1px solid red" height="500px" >
            </Box>
            <Box border="1px solid red" height="500px" >
            </Box>
        </Box>
    );
};
// background-color= "#ececec" color= "#333"
export default Home;