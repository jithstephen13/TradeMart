import React,{ useEffect, useState } from "react";
import { Flex, Grid, Box, Text, Button, Icon, VStack, Heading, Image, Checkbox, Stack, HStack } from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { setItem } from '../utility/localStorage'
import "../index.css"
import { useDispatch, useSelector } from "react-redux";
import { Get_medicines_item, sortMymedicines } from "../redux/medicines/medicines.action";
import Loading from "./Loading";
import Product from "./Product";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

// import Loading from "./Loading";
const Medicines = () => {

  const [reset,setReset ]=useState(false)

  const dispatch = useDispatch()

  const navigate = useNavigate();

  // const [data,setData] = useState([])

  const {isLoading,medicines,isError} = useSelector((store) => store.medicines);
  const handleClick = (el) => {
     
    navigate(`/productdetails/${el.id}`)
  }
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value)
    if(value=="reset"){

      setReset((previous)=>!previous)
      return 
    }
    dispatch(sortMymedicines(value))

  }

  useEffect(() => {

    dispatch(Get_medicines_item())
  }, [reset])

  if (isLoading) return <Loading />
  
  return (<><Navbar />

    <div style={{ alignContent:"center" ,display:"flex",flexDirection:"column" }}>
      <Product />
      <VStack display={{ md:"none"}} margin={"auto"} padding={"20px"} width={"80%"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
      <Text marginTop={2} color={"teal"} id="medicinese" fontSize={35}fontWeight={"bold"}>medicines</Text>
            <select  name="" id="" onChange={(e) => handleChange(e)}>
             <option value="reset" >sort-by-price</option>
              <option value="high">High to Low </option>
              <option value="low">Low to High</option>
            </select>
      </VStack>

      <Flex position={"relative"}   justify={"center"} gap={2}>
      
        <VStack id='maindiv' align={"center"} display={{base:"none",sm:"none",md:"block"}} paddingLeft={"5px"} textAlign={"center"} 
        alignItems={"center"} 
         width={"15%"}   pb={10} >
         
           

          <Box id="filter" p={2}  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}  textAlign={"center"} width={"100%"} >
             <Text marginTop={2} color={"teal"} id="medicinese" fontSize={35}fontWeight={"bold"}>medicines</Text>
            <select style={{width:"100%"}}  name="" id="" onChange={(e) => handleChange(e)}>
             <option value="reset" >sort-by-price</option>
              <option value="high">High to Low </option>
              <option value="low">Low to High</option>
            </select>
          </Box>

          < VStack id="add" p={2} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}  align={"start"} width={"100%"} 
           marginLeft={"0px"} textAlign={"left"} marginTop={"20px"}>
            <Text fontWeight={"extrabold"}>Filter Results</Text>
            <HStack>
            <Checkbox/> <Text>Video</Text></HStack>
            <HStack>
            <Checkbox/> <Text>Shop Now</Text></HStack>
  
          </ VStack>
          < VStack id="add" p={2} width={"100%"}  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} marginLeft={"0px"}
           align={"start"} marginTop={"20px"}>
            <Text fontWeight={"extrabold"}>Related Category</Text>
            <Text>Medicine Usege</Text>
            <Text>Medical Services</Text>
            
          </ VStack>
          < VStack id="add"  p={2} width={"100%"}  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} marginLeft={"0px"}
           align={"start"} marginTop={"20px"}>
            <Text fontWeight={"extrabold"}> Related Brands</Text>
            <Text>Waaree  Tablets</Text>
            <Text>TATA  Tablets</Text>
            <Text>Waaree  Tabletss</Text>
            <Text>Vikram  Tablets</Text>
            <Text>Waaree  Tablets</Text>
            <Text>Adani  Tabletss</Text>
            <Text>Waaree  Tablets</Text>
            <Text>Luminous  Tablets</Text>
            <Text>Loom  Tablets</Text>
            <Text>Renewsys  Tablets</Text>
            <Text>Panasonic  Tablets</Text>
            <Text>Canadian  Tablets</Text>
            <Text>Eastman  Tablets</Text>
            
            
          </ VStack>

         





        </VStack>





        <Grid mt={"10px"} ml={{base:"5px",sm:"1px",md:"1px"}} marginRight={"0px"} paddingLeft={"5px"} width={"80%"} 
        templateColumns={{ base: 'repeat(1 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'} } gap={6}>

          {medicines.map((el) => {
            return <Box id='probox' key={el.id}>

              <VStack textAlign={"center"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} maxHeight={"550px"} minHeight={"499px"} padding="5">
                <img id="hov" src={el.img_src} style={{height:"50%"}} alt="" />
                <Text noOfLines={[1]} fontSize={17} >{el.name}</Text>
                 
                <p>{el.category}</p>
                <Text fontWeight={"bold"}>{el.price}</Text>
                <Box mb="15px">
                  {Array(5)
                    .fill("")
                    .map((_, i) => {
                      let rating = Math.ceil(Math.random() * 3);

                      return <Icon
                        as={AiFillStar}
                        key={i}
                        color={i <= rating ? "gold" : "gray.300"}
                      />
                    })}
                </Box>
                <Text color={"teal"} fontSize={14}>Free shipping with $50.00 orders</Text>

                <Text>Call 08048970527</Text>
                <Button  onClick={() => handleClick(el)} bg={"rgb(6,128,128)"} padding={"10px"}  borderRadius={2} width={"90%"} >{"Contact Supplier >"}
</Button>

                


              </VStack>

            </Box>
          })}

        </Grid>
      </Flex>



    </div>

    <Footer /></>

  );




};

export default Medicines;