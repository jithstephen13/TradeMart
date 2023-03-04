import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { ADD_Cart_item } from "../redux/Carts/Cart.action";
import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { CheckCircleIcon, PhoneIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { Link as ItemLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const [relatedData, setRelatedData] = useState([]);
  const [loading,setLoading] = useState(false)
  const { id } = useParams();
  let productType = "";

  // Chack and Set the Product Types
  if (id[0] === "m") {
    productType = "medicines";
  } else if (id[0] === "p") {
    productType = "projector";
  } else if (id[0] === "s") {
    productType = "solarpanel";
  }


  // Fetch the Related Products
  const getRelatedProduct = async () => {

    const product = await axios.get(
      `https://trademart-data-2zur.vercel.app/${productType}`
    ).then((res) => {
      setLoading(true);
      console.log(loading)
      setRelatedData(res.data)
    }).catch((err) => {
      console.log(err.message);
    })
  };

  

  const data1 = relatedData.splice(4, relatedData.length); // Show only 4 Related Products

  // Fetch the Particular Product according to id
  const getProduct = async (id) => {
     const product = await axios.get(
      `https://trademart-data-2zur.vercel.app/Allproducts/${id}`
    );
    setData(product.data);
  };
 
  useEffect(() => {
    getProduct(id);
    getRelatedProduct();
    
  }, [id]);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [cred, setCred] = useState(data);
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  const handlechenge = (e) => {
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
      date: `${year}${"-"}${
        month < 10 ? `0${month}` : `${month}`
      }${"-"}${date}`,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
 

  const form = useRef();
  const dispatch = useDispatch();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log({...data,date:cred.date,qty:cred.qty,user_email
:cred.user_email,user_name:cred.user_name

    })

    dispatch(ADD_Cart_item({...data,date:cred.date,qty:cred.qty,user_email
      :cred.user_email,user_name:cred.user_name
      
          }));
    emailjs
      .sendForm(
        "service_hakjw5z",
        "template_p2zhnas",
        form.current,
        "pc7y9Dv2GAuWDsXZH"
      )
      .then(
        (result) => {
          console.log(result.text);
          onClose();
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Body Part */}
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f9f8f7",
          marginTop: "70px",
        }}
      >
        <Stack
          w="100%"
          flexDirection={{ base: "column", md: "row" }}
          justifyContext="space-around"
        >
          {/* Product-Image */}
          <Box
            w={{ sm: "90%", md: "30%" }}
            h={{ sm: "180px", md: "300px" }}
            textAlign="center"
            m="auto"
          >
            <Image
              src={data.img_src}
              alt="medicine"
              style={{
                borderRadius: "18px",
                marginTop: "20px",
              }}
            />
          </Box>

          {/* Product-Details */}
          <Box w={{ sm: "90%", md: "40%" }} textAlign="start" m="auto">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              {data.name}
            </p>
            <p style={{ color: "blue", fontWeight: "bold" }}>
              Price: {data.price}
              <span style={{ fontWeight: "lighter" }}>/Pack</span>{" "}
            </p>
            <div style={{ marginTop: "22px" }}>
              <p>
                <span style={{ fontWeight: "bold" }}>Name :</span>
                {data.name}
              </p>
              <hr />
              <p>
                <span style={{ fontWeight: "bold" }}>Description :</span>
                {data.desc}
              </p>
              <hr />
              <p>
                <span style={{ fontWeight: "bold" }}>company :</span> {"   "}
                {data.company}
              </p>
              <hr />
              <p>
                <span style={{ fontWeight: "bold" }}>Rating :</span> {"   "}
                {data.rating}
              </p>
              <hr />
            </div>
            <p style={{ margin: "10px", fontWeight: "bold" }}>
              We offers Bronchodilator & Expectorant {data.name}.
            </p>
            <Button
              w={{ base: "100%", md: "70%" }}
              ml={{ sm: "20px", md: "50px" }}
              p="20px"
              color="white"
              bgColor="#25766a"
              fontWeight="bold"
              borderRadius="10px"
              fontSize="17px"
              _hover={{ backgroundColor: "#1b9a84", color: "white" }}
              onClick={() => {
                onOpen();
              }}
            >
              Buy now
            </Button>

            {/* Sidebar Pop-up */}
            <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton align={"center"} />
                <DrawerHeader> </DrawerHeader>
                <DrawerBody>
                  <Flex gap={4}>
                    <Box
                      w={"50%"}
                      pt={6}
                      boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                      padding={6}
                    >
                      <Image h={{ base: "150px" }} src={data.img_src} />
                      <Text>
                        <span style={{ fontWeight: "bold" }}> Name :-</span>{" "}
                        {data.name}
                      </Text>
                      <Text>
                        <span style={{ fontWeight: "bold" }}> Price :-</span>{" "}
                        {data.price}
                      </Text>
                      <Text>
                        <span style={{ fontWeight: "bold" }}>Rating :-</span>{" "}
                        {data.rating}
                      </Text>
                      <Text>
                        <span style={{ fontWeight: "bold" }}> Discount :-</span>{" "}
                        {data.discount}
                      </Text>
                    </Box>
                    <Box w={"50%"}>
                      <form
                        ref={form}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          border: "1px solid black",
                          padding: "15px",
                        }}
                      >
                        <label>Name</label>
                        <input
                          type="text"
                          style={{ border: "1px solid black", padding: "5px" }}
                          placeholder="Name"
                          name="user_name"
                          onChange={handlechenge}
                        />
                        <label>Email</label>
                        <input
                          type="email"
                          style={{ border: "1px solid black", padding: "5px" }}
                          placeholder="Email ..."
                          name="user_email"
                          onChange={handlechenge}
                        />
                        <label>Quantity</label>
                        <input
                          type="text"
                          style={{ border: "1px solid black", padding: "5px" }}
                          placeholder="Quantity"
                          name="qty"
                          onChange={handlechenge}
                        />
                        <label>Product Name</label>
                        <select
                          name="Product name"
                          style={{ border: "1px solid black" }}
                        >
                          <option>Selectname</option>
                          <option value={data.name}>{data.name}</option>
                        </select>
                        {/* <input type='text'  value={Item.name} name='product name' onChange={handlechenge}   /> */}
                        <label>Price</label>
                        {/* <input type='text'  value={Item.price} name='price' onChange={handlechenge}    /> */}
                        <select
                          name="Price"
                          style={{ border: "1px solid black" }}
                        >
                          <option>Select price</option>
                          <option value={data.price}>{data.price}</option>
                        </select>
                        <label> Message</label>
                        <input
                          type="text"
                          name="message"
                          style={{ border: "1px solid black", padding: "32px" }}
                          placeholder="Type your message here......"
                        />
                        <Button
                          pl={{ base: "10px", md: "20px" }}
                          pr={{ base: "10px", md: "20px" }}
                          color="white"
                          cursor="pointer"
                          bgColor="#25766a"
                          onClick={sendEmail}
                          _hover={{
                            backgroundColor: "#1b9a84",
                            color: "white",
                          }}
                        >
                          {" "}
                          Order Confirm
                        </Button>
                      </form>
                    </Box>
                  </Flex>
                </DrawerBody>
                <Text margin={"auto"} mb="8px" fontWeight={"bold"}>
                  Dealer will contacts you within 3 days
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
            <Text fontWeight="bold" textAlign="center">
              {data.delear_name}
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
              View More Sellers {">"}
            </Link>
          </Stack>
        </Stack>

        {/* Browse Related categories */}
        <Stack mb="25px">
          <Text
            m="5px"
            mt="35px"
            fontSize={{ base: "25", md: "32px" }}
            fontWeight="bold"
            textAlign="center"
            textDecoration="underline"
          >
            Browse Related Categories
          </Text>
          <Grid
            templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(4,1fr)" }}
            gap="6"
            textAlign="center"
            margin="10px"
          >
            { relatedData && relatedData.map((el, id) => (
              <GridItem margin={"10px"}>
                <Box
                  padding="15px"
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    style={{ width: "80%", height: "200px", margin: "12px" }}
                    src={el.img_src}
                    alt={el.name}
                  />

                  <Box>
                    <Box mt="5px" display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                      </Badge>
                    </Box>

                    <Box
                      mt="5px"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                    >
                      {el.name}
                    </Box>

                    <Box fontWeight="bold" m="8px">
                      Price: ₹ {el.price}
                      <Box as="span" color="gray.600" fontSize="sm">
                        / Piece
                      </Box>
                    </Box>

                    {/* <Text m="8px 0px">{el.desc}</Text> */}

                    <ItemLink to={`/productdetails/${el.id}`}>
                      <Button
                        w="100%"
                        margin="auto"
                        color="white"
                        bgColor="#25766a"
                        _hover={{ backgroundColor: "#1b9a84", color: "white" }}
                      >
                        See more details ...
                      </Button>
                    </ItemLink>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProductDetails;
