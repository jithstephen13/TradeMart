import React, { useState, useEffect ,useRef} from "react";
import axios from "axios";

import { MdLocationOn } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { CheckCircleIcon, PhoneIcon } from "@chakra-ui/icons";


import emailjs from '@emailjs/browser';
import { Button, Box, Flex,  GridItem, HStack,Link,
  Stack,

  VStack,
    Drawer,
    DrawerBody,
    Grid,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,Text, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, useDisclosure, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
 
import { ADD_Cart_item } from '../redux/Carts/Cart.action';

const ProductDetails = () => {
  const [data, setData] = useState([]);

  const data1 = data.splice(4, 29);
  const Item  ={
    id:"sp47",
    img_src: "https://m.media-amazon.com/images/I/614umzFKhOL._AC_UL320_.jpg",
    name: "UTL Solar 200 Watt 12 Volt Mono PERC Solar Panel 200W-12V (Pack of 2)",
    desc:"consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus   rhoncus pulvinar aliquam. Ut aliquet tristique",
    company: "Luminous ",
    rating: "4.1 out of 5 stars",
    price: "₹19,499",
    delear_name:"Cillian_Murphy",
  }

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  
  const [cred,setCred]=useState(Item)
  const handlechenge=(e)=>{
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]:value
    })
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  

    const form = useRef();
    const dispatch = useDispatch()

const sendEmail = (e) => {
e.preventDefault();
 
dispatch(ADD_Cart_item(cred))
emailjs.sendForm('service_hakjw5z', 'template_p2zhnas', form.current, 'pc7y9Dv2GAuWDsXZH')
  .then((result) => {
      console.log(result.text);
      onClose()
  }, (error) => {
      console.log(error.text);
  });

 form.current.reset()
};


  const getProduct = async () => {
    const product = await axios.get(
      `https://trademart-data-2zur.vercel.app/medicines`
    );
    setData(product.data);
  };
  console.log("Data:", data);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div style={{ padding: "10px", backgroundColor: "#f9f8f7" }}>
      <Stack
        flexDirection={{ base: "column", md: "row" }}
        justifyContext="space-around"
      >
        {/* Product-Image */}
        <Box w={{ sm: "90%", md: "30%" }} textAlign="center" m="auto">
          <img
            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ruma122iif8yx1nwhpfe.jpg"
            alt="medicine"
            style={{ borderRadius: "18px", height: "350px", margin: "auto" }}
          />
        </Box>

        {/* Product-Details */}
        <Box w={{ sm: "90%", md: "40%" }} textAlign="center" m="auto">
          <p
            style={{
              margin: "auto",
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            Ascoril LS Syrup
          </p>

          <p style={{ color: "blue", fontWeight: "bold" }}>
            {" "}
            ₹ 70<span style={{ fontWeight: "lighter" }}>/Pack</span>{" "}
          </p>

          <div style={{ marginTop: "22px" }}>
            <p>
              <span
                style={{
                  marginRight: "35%",
                  fontWeight: "light",
                }}
              >
                Usage
              </span>{" "}
              Commercial, Hospital
            </p>
            <hr />

            <p>
              <span
                style={{
                  marginRight: "30%",
                  fontWeight: "light",
                }}
              >
                Product Type
              </span>{" "}
              Finished Product
            </p>
            <hr />

            <p>
              <span
                style={{
                  marginRight: "20%",
                  fontWeight: "light",
                }}
              >
                Dosage Form (If Applicable)
              </span>{" "}
              Syrup
            </p>
            <hr />

            <p>
              <span
                style={{
                  marginRight: "30%",
                  fontWeight: "light",
                }}
              >
                Company
              </span>{" "}
              Alembic Pharmaceuticals Ltd
            </p>
            <hr />
          </div>

          <p style={{ margin: "20px" }}>
            We offers Bronchodilator & Expectorant Syrup.
          </p>

          <Button
            w={{ sm: "200px", md: "250px" }}
            ml={{ sm: "20px", md: "50px" }}
            p="20px"
            color="white"
            bgColor="#25766a"
            fontWeight="bold"
            borderRadius="10px"
            fontSize="17px"

            onClick={() => {
              
              onOpen()
            }}
          >
            Get Latest Price
          </Button>



          <Drawer  onClose={onClose} isOpen={isOpen} size={'lg'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  align={"center"}/>
          <DrawerHeader> </DrawerHeader>
          <DrawerBody>
                 <Flex gap={4}>
                     <Box w={"50%"}  pt={6}>
                        <Image  src={Item.img_src}/>
                         <Text>Name :- {Item.name}</Text>
                         <Text>Price :- {Item.price}</Text>
                         <Text>Rating :- {Item.rating}</Text>
                         <Text>Discount :- {Item.discount}</Text>
                     </Box>
                     <Box  w={"50%"}>
                     <form  ref={form} style={{display:"flex", flexDirection:"column" , gap:"10px", border:"1px solid black", padding:"15px"}} >
      <label>Name</label>
      <input type='text'  style={{border:"1px solid black"}} placeholder='enter name' name='user_name' onChange={handlechenge}   />
      <label>Email</label>
      <input type='email' style={{border:"1px solid black"}} placeholder='email ...'  name='user_email' onChange={handlechenge}  />
      <label>Quantity</label>
      <input type='text' style={{border:"1px solid black"}}  placeholder='quantity' name='qty' onChange={handlechenge}    />
      <label>Product Name</label>
      <select name='product name' style={{border:"1px solid black"}}  >
        <option>selectname</option>
        <option value={Item.name}>{Item.name}</option>
      </select>
      {/* <input type='text'  value={Item.name} name='product name' onChange={handlechenge}   /> */}
      <label>Price</label>
      {/* <input type='text'  value={Item.price} name='price' onChange={handlechenge}    /> */}
      <select name='price' style={{border:"1px solid black"}}  >
        <option>select price</option>
        <option value={Item.price}>{Item.price}</option>
      </select>
      <label> Message</label>
      <input type='text' name='message' style={{border:"1px solid black",padding:"32px"}}  placeholder='type your message......'     />
      <label> </label>
      <Button pl={20} pr={20}  bg="blue" onClick={sendEmail}    > Sent</Button>
      
    
        
       
      
    </form>
                     </Box>
                 </Flex>
               
                 </DrawerBody>
                   <Text margin={"auto"} fontWeight={"bold"}> 

           Deler will contacte you with in 3 days
            </Text>
        </DrawerContent>
      </Drawer>

        </Box>

        {/* Retailer Details */}
        <Stack
          m="auto"
          p="25px"
          w={{ sm: "90%", md: "25%" }}
          border="1px solid #e2ddd9"
          borderRadius="10px"
          box-shadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <Text fontWeight="bold">
            Dwarkesh Pharmaceuticals Private Limited
          </Text>

          <Stack direction={{ md: "row" }}>
            <Image
              src="https://3.imimg.com/data3/GR/HK/MY-2474176/dwarkesh-pharmaceuticals-pvt-ltd-90x90.png"
              alt="image"
              h="80px"
              w="80px"
            />
            <VStack>
              <HStack>
                <MdLocationOn size="22px" />
                <Text>GIDC Vatwa, Ahmedabad, Gujarat</Text>
              </HStack>
              <HStack>
                <CheckCircleIcon />
                <Text ml="5px">GST- 24AAACD6674N1ZA</Text>
              </HStack>
            </VStack>
          </Stack>
          <hr />
          <HStack width="80%">
            <PhoneIcon size="22px" />
            <Text>Call</Text>
            <Text>08048603432</Text>
          </HStack>
          <Text>64% Response Rate</Text>
          <HStack>
            <FaLocationArrow />
            <Link href="" style={{ color: "#1b9a84", fontWeight: "bold" }}>
              Contact Supplier
            </Link>
          </HStack>
          <hr />
          <Link href="" style={{ color: "#1b9a84", fontWeight: "bold" }}>
            View More Sellers 
          </Link>
        </Stack>
      </Stack>

      {/* Browse Related categories */}
      <Stack mb="25px">
        <Text m="15px" fontSize="22px" fontWeight="bold" textAlign="center">
          Browse related categories
        </Text>
        <Grid
          templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(4,1fr)" }}
          gap="6"
          textAlign="center"
          margin="10px"
        >
          {data.map((el, id) => (
            <GridItem>
              <img
                src={el.img_src}
                alt="img"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              />
              <Text fontWeight="bold" mt="15px">
                {el.name}
              </Text>
              <Text fontWeight="bold" color="blue">
                {el.price}
              </Text>
              <Text fontWeight="bold">{el.company}</Text>
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </div>
  );
};

export default ProductDetails;
