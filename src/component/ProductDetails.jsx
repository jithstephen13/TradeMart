import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { CheckCircleIcon, PhoneIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { Link as ItemLink } from "react-router-dom";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const [relatedData, setRelatedData] = useState([]);
  const { id } = useParams();
  let productType = "";
  // console.log(id);
  // console.log(typeof id);
  // console.log(id.length);
  // console.log(id[0]);

  // Chack and Set the Product Types
  if (id[0] === "m") {
    productType = "medicines";
  } else if (id[0] === "p") {
    productType = "projector";
  } else if (id[0] === "s") {
    productType = "solarpanel";
  }

  console.log(productType);

  // Fetch the Related Products
  const getRelatedProduct = async () => {
    const product = await axios.get(
      `https://trademart-data-2zur.vercel.app/${productType}`
    );
    setRelatedData(product.data);
  };

  const data1 = relatedData.splice(4, relatedData.length); // Show only 4 Related Products

  // Fetch the Particular Product according to id
  const getProduct = async (id) => {
    // console.log(id);
    const product = await axios.get(
      `https://trademart-data-2zur.vercel.app/Allproducts/${id}`
    );
    setData(product.data);
  };
  console.log("Data:", data);

  useEffect(() => {
    getProduct(id);
    getRelatedProduct();
  }, [id]);

  return (
    <>
      {/* Body Part */}
      <div style={{ padding: "10px", backgroundColor: "#f9f8f7" }}>
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
            >
              Get Latest Price
            </Button>
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
              View More Sellers >
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
            {relatedData.map((el, id) => (
              <GridItem margin={"20px"}>
                <Box
                  padding="15px"
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    style={{ width: "80%", margin: "12px" }}
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

                    <Box fontWeight="bold" mt="8px">
                      Price: ₹ {el.price}
                      <Box as="span" color="gray.600" fontSize="sm">
                        / Piece
                      </Box>
                    </Box>

                    <Text m="8px 0px">{el.desc}</Text>

                    <ItemLink to={`/productdetails/${el.id}`}>
                      <Button
                        w="100%"
                        margin="auto"
                        color="white"
                        bgColor="#25766a"
                        _hover={{ backgroundColor: "#1b9a84", color: "white" }}
                      >
                        Add to Cart
                      </Button>
                    </ItemLink>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </div>
    </>
  );
};

export default ProductDetails;
