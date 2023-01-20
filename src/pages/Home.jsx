import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, Image, Input, Select, Text } from '@chakra-ui/react';
import MegaMenu from '../component/MegaMenu';
import { BsCheckLg } from 'react-icons/bs';
import banner1 from "../assets/homepage-banner1.jpg"
import c1 from "../assets/homepage-assets/city1.jpg"
import c2 from "../assets/homepage-assets/city2.jpg"
import c3 from "../assets/homepage-assets/city3.jpg"
import c4 from "../assets/homepage-assets/city4.jpg"
import c5 from "../assets/homepage-assets/city5.jpg"
import c6 from "../assets/homepage-assets/city6.jpg"
import c7 from "../assets/homepage-assets/city7.jpg"
import c8 from "../assets/homepage-assets/city8.jpg"
import c9 from "../assets/homepage-assets/city9.jpg"
import c10 from "../assets/homepage-assets/city10.jpg"
import company1 from "../assets/homepage-assets/comp1.png"
import company2 from "../assets/homepage-assets/comp2.png"
import company3 from "../assets/homepage-assets/comp3.webp"
import company4 from "../assets/homepage-assets/comp4.webp"
import company5 from "../assets/homepage-assets/comp5.webp"
import company6 from "../assets/homepage-assets/comp6.webp"
import company7 from "../assets/homepage-assets/comp7.webp"
import company8 from "../assets/homepage-assets/comp8.png"
import company9 from "../assets/homepage-assets/comp9.webp"
import company10 from "../assets/homepage-assets/comp10.webp"
import company11 from "../assets/homepage-assets/comp11.png"
import company12 from "../assets/homepage-assets/comp12.png"
import carousel1 from "../assets/homepage-assets/carousel1.jpg"
import carousel2 from "../assets/homepage-assets/carousel2.jpg"
import carousel3 from "../assets/homepage-assets/carousel3.jpg"
import software1 from "../assets/homepage-assets/software1.png"
import software2 from "../assets/homepage-assets/software2.png"
import app1 from "../assets/homepage-assets/app1.png"
import app2 from "../assets/homepage-assets/app2.PNG"

const Home = () => {
    let [Carousel, setCarousel] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setCarousel(!Carousel)
        }, 3000)
    },[Carousel])

    let state = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
    return (
        <Box backgroundColor="#F3F3F3" align="center" >
{/* ------------------------Banner & Search---------------------------------- */}
            <Box backgroundImage={banner1} backgroundPosition="center" display="flex" justifyContent="center" alignItems="center" position="relative" backgroundSize="cover" minHeight={{base:"120px",sm:"220px"}} >
                <Box position="absolute" w={["90%","85%","75%","65%","60%"]} >
                    <Text textAlign= "center" outline= "0" margin= "0" padding= "10px" border= "0" font= "inherit" verticalAlign= "baseline" color= "#f9f9f9" fontSize={{base:"12px", sm:"17", md:"22px"}} >Search for products & find verified sellers near you</Text>
                    <Flex>
                        <Select fontSize={{ base:"10px", sm:"12px",md:"13px"}} backgroundColor= "#ececec" color= "#333" width={{sm:"20%", md:"30%"}} height={{ base:"20px", sm:"30px",md:"50px"}} display={{base:"none",sm:"flex"}} borderRadius="0px" placeholder='All India'>
                            {state?.map((el)=><option style={{fontSize:"12px"}} value='option2'>{el}</option>)}
                        </Select>
                        <Input fontSize={{ base:"12px", sm:"13px",md:"15px"}} variant='unstyled' placeholder=' Enter product/service name' bg="white" height={{ base:"20px", sm:"30px",md:"50px"}} borderRadius="0px" />
                        <Button fontSize={{ base:"12px", sm:"13px",md:"15px"}} borderRadius="0px" fontFamily= "arial" background= "-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))" colorScheme= "#fff" p="5px 22px" border= "none" margin= "0" height={{ base:"20px", sm:"30px",md:"50px"}} font-size= "19px"  position= "relative" left= "-4px" top= "0" cursor= "pointer" width= "142px" font-weight= "700" text-indent= "30px" >Search</Button>
                    </Flex>
                </Box>
            </Box>
{/* -----------------------MegaMenu--------------------------------------- */}
            <Box backgroundColor="white" >
                <MegaMenu />
            </Box>
            <hr />
{/* -------------------------Carousel------------------------------------------ */}
            <Box backgroundColor="white">
                <Flex>
                    <Box w={{base:"0%", md:"35%"}} display={{base:"none", md:"flex"}} flexDirection="column" >
                        <Heading align="left" p={{base:"5px 5px 5px 5px", md:"40px 20px 10px 20px"}} fontSize={{base:"15px",sm:"18px", md:"22px", lg:"30px"}} fontFamily ="Arial" color="#333" >We connect</Heading>
                        <Heading align="left" p={{base:"0px 10px", md:"0px 20px"}} fontSize={{base:"18px",sm:"20px", md:"25px", lg:"35px"}} fontFamily ="Arial" color="#333" >Buyers & Sellers</Heading>
                        <Text align="left" p="20px" fontSize={{base:"12px",sm:"13px", md:"15px", lg:"20px"}} >IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.</Text>
                        <Image p={{base:"0px", md:"10px 20px 10px 20px", xl:"30px 20px 10px 20px"}} w={{md:"100%", lg:"80%"}} src={carousel3} />
                    </Box>
                    <Box w={{base:"100%", md:"65%"}} display="flex" justifyContent="center" alignItems="center" >
                        <Box w="100%" p="20px" >
                            {Carousel?
                                <Image src={carousel1} />
                                :
                                <Box position="relative" >
                                    <Image src={carousel2} />
                                    <Box border="1px solid gray" left="50%" top="20%" p="15px" w="50%" position="absolute" >
                                        <Flex>
                                            <Select fontSize={{ base:"10px", sm:"12px",md:"13px"}} backgroundColor= "#ececec" color= "#333" width={{sm:"20%", md:"30%"}} h={{base:"20px",md:"30px"}} display={{base:"none",sm:"flex"}} borderRadius="0px" placeholder='All India'>
                                                {state?.map((el)=><option style={{fontSize:"12px"}} value='option2'>{el}</option>)}
                                            </Select>
                                            <Input fontSize={{base:"11px", sm:"12px",md:"13px"}} variant='unstyled' placeholder=' Enter product/service name' bg="white" h={{base:"15px",sm:"15px",md:"20px",xl:"25px"}} p="10px" borderRadius="0px" />
                                        </Flex>
                                        <Input  fontSize={{ base:"11px", sm:"12px",md:"13px"}} variant='unstyled' placeholder='Mobile No.' bg="white" h={{base:"15px",sm:"15px",md:"20px",xl:"25px"}} m="5px 0px" borderRadius="0px" p="10px" />
                                        <Input display={{base:"none", sm:"flex"}}  fontSize={{ base:"11px", sm:"12px",md:"13px"}} variant='unstyled' placeholder=' Enter Your Name' bg="white" h={{base:"15px",sm:"15px",md:"20px",xl:"25px"}} p="10px" m="5px 0px" borderRadius="0px" />
                                        <Button fontSize={{ base:"11px", sm:"12px",md:"13px"}} borderRadius="0px" fontFamily= "arial" background= "-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))" colorScheme= "#fff" border= "none" margin= "0" h={{base:"15px",sm:"25px",md:"30px",xl:"40px"}} font-size= "19px"  position= "relative" left= "-4px" top= "0" cursor= "pointer" width= "142px" font-weight= "700" text-indent= "30px" >Search</Button>
                                    </Box>
                                </Box>
                            }
                        </Box>
                    </Box>
                </Flex>
            </Box>
{/* ------------------------Cities------------------------------------- */}
            <Box backgroundColor="white" marginTop="20px" w="96%">
                <Heading align="left" p="5px 10px" fontSize={{base:"18px",sm:"22px", md:"30px"}} fontFamily ="Arial" color="#333" >Find Suppliers from Top Cities</Heading>
                <Flex justifyContent="space-around" >
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c1} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Delhi</Text></Box>
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c2} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Bengaluru</Text></Box>
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c3} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Chennai</Text></Box>
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c4} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Mumbai</Text></Box>
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c5} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Ahmedabad</Text></Box>
                </Flex>
                <Flex justifyContent="space-around" >
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c6} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Kolkata</Text></Box>
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c7} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Pune</Text></Box>
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c8} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Surat</Text></Box>
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c9} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Jaipur</Text></Box>
                    <Box display="flex" flexDirection="column" p={{base:"10px 0px",md:"25px 0px"}} cursor="pointer" ><Image src={c10} pb="10px" w={{base:"40px", sm:"60px", md:"80px"}} /><Text fontSize={{base:"12px",sm:"15px", md:"18px" }} textAlign="center">Hyderabad</Text></Box>
                </Flex>
            </Box>
{/* ------------------------Brands------------------------------------- */}
            <Box backgroundColor="white" marginTop="20px" w="96%">
                <Heading align="left" p="5px 10px" fontSize={{base:"18px",sm:"22px", md:"30px"}} fontFamily ="Arial" color="#333" >Explore products from Premium Brands</Heading>
                <Flex justifyContent="space-around" >
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company1}  /></Box>
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company2}  /></Box>
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company3}  /></Box>
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company4}  /></Box>
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company5}  /></Box>
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company6}  /></Box>
                </Flex>
                <Flex justifyContent="space-around" >
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company7}  /></Box>
                    <Box w="12%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company8}  /></Box>
                    <Box w="12%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company9}  /></Box>
                    <Box w="12%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company10} /></Box>
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company12} /></Box>
                    <Box w="20%" display="flex" justifyContent="center" p={{base:"10px", md:"20px 25px" }} alignItems="center" ><Image src={company11} /></Box>
                </Flex>
            </Box>
{/* -------------------------------Software---------------------------------- */}
            <Flex backgroundColor="white" marginTop="20px" w="96%" >
                <Box p={{base:"10px",md:"50px"}} align="start">
                    <Image w={{base:"20%",md:"50%"}}  src={software1} />
                    <Heading p={{base:"10px 0px 0px 0px", md:"20px 0px 0px 0px"}} fontSize={{base:"18px",sm:"20px", md:"30px"}} fontFamily ="Arial" color="#333" >Accounting Software</Heading>
                    <Text p={{base:"0px 0px 10px 0px", md:"0px 0px 20px 0px"}} fontSize={{base:"12px",sm:"13px", md:"20px"}} >Trusted by 3,60,000+ Small Businesses across different domains</Text>
                    <Flex gap={5} >
                        <Box pt="5px" ><BsCheckLg color="blue" fontSize={{base:"15px", md:"20px"}} /></Box>
                        <Text fontSize={{base:"12px",sm:"13px", md:"18px"}} >GST Accounting Software</Text>
                    </Flex>
                    <Flex gap={5} >
                        <Box pt="5px" ><BsCheckLg color="blue" fontSize={{base:"15px", md:"20px"}} /></Box>
                        <Text fontSize={{base:"12px",sm:"13px", md:"18px"}} >e-Invoice Software</Text>
                    </Flex>
                    <Flex gap={5} >
                        <Box pt="5px" ><BsCheckLg color="blue" fontSize={{base:"15px", md:"20px"}} /></Box>
                        <Text fontSize={{base:"12px",sm:"13px", md:"18px"}} >Inventory Management Software</Text>
                    </Flex>
                    <Flex gap={5} >
                        <Box pt="5px" ><BsCheckLg color="blue" fontSize={{base:"15px", md:"20px"}} /></Box>
                        <Text fontSize={{base:"12px",sm:"13px", md:"18px"}} >e-Way Billing Software</Text>
                    </Flex>
                </Box>
                <Box p={{base:"10px",md:"50px 0px 0px 0px"}} >
                    <Image display={{base:"none", lg:"flex"}} w="50%" src={software2} />
                </Box>
                
            </Flex>
{/* -------------------------------Mobile App--------------------------------- */}
            <Flex backgroundColor="white" justifyContent="space-evenly" margin="20px" w="96%" >
                <Box p={{base:"10px",md:"50px 0px 0px 0px"}} >
                    <Image w="70%" src={app1} />
                </Box>
                <Box p={{base:"10px",md:"100px 0px 50px 0px"}} align="start">
                    <Heading p={{base:"10px 0px 0px 0px", md:"20px 0px 0px 0px"}} fontSize={{base:"18px",sm:"20px", md:"30px"}} fontFamily ="Arial" color="#333" >Get IndiaMART App</Heading>
                    <Text p={{base:"0px 0px 10px 0px", md:"0px 0px 20px 0px"}} fontSize={{base:"10px",sm:"13px", md:"15px"}} >Search for products/services and connect with verified sellers on the go!</Text>
                    <Flex>
                        <Input fontSize={{ base:"10px", sm:"13px",md:"15px"}} variant='outline' placeholder=' Enter Mobile No.' bg="white" height={{ base:"15px", sm:"20px",md:"30px"}} borderRadius="0px" margin= "10px 0px" />
                        <Button fontSize={{ base:"10px", sm:"13px",md:"15px"}} borderRadius="0px" fontFamily= "arial" background= "-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))" colorScheme= "#fff" p="5px 22px" border= "none" margin= "10px 0px" height={{ base:"15px", sm:"20px",md:"30px"}} font-size= "19px"  position= "relative" left= "-4px" cursor= "pointer" width= "142px" font-weight= "700" text-indent= "30px" >Search</Button>
                    </Flex>
                    <Text p={{base:"0px 0px 10px 0px", md:"0px 0px 20px 0px"}} fontSize={{base:"10px",sm:"13px", md:"15px"}} >We will send you a link, open it on your phone to download the App</Text>
                    <Image w={{base:"20%",md:"50%"}}  src={app2} />
                </Box>
                
            </Flex>
        
{/* ------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------- */}
        </Box>
    );
};
export default Home;