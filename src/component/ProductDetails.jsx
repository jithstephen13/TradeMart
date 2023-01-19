import React, { useState, useEffect } from "react";
import axios from "axios";
import {
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

const ProductDetails = () => {
  const [data, setData] = useState([]);

  let itemdata = {
    id: "sp47",
    img_src: "https://m.media-amazon.com/images/I/614umzFKhOL._AC_UL320_.jpg",
    name: "UTL Solar 200 Watt 12 Volt Mono PERC Solar Panel 200W-12V (Pack of 2)",
    desc: "consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus   rhoncus pulvinar aliquam. Ut aliquet tristique",
    company: "Luminous ",
    rating: "4.1 out of 5 stars",
    price: "₹19,499",
    delear_name: "Cillian Murphy",
  };

  const data1 = data.splice(4, 29);

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
        w="100%"
        flexDirection={{ base: "column", md: "row" }}
        justifyContext="space-around"
      >
        {/* Product-Image */}
        <Box w={{ sm: "90%", md: "30%" }} textAlign="center" m="auto">
          <img
            src={itemdata.img_src}
            alt="medicine"
            style={{ borderRadius: "18px", height: "350px", margin: "auto" }}
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
            {itemdata.name}
          </p>
          <p style={{ color: "blue", fontWeight: "bold" }}>
            {" "}
            {itemdata.price}
            <span style={{ fontWeight: "lighter" }}>/Pack</span>{" "}
          </p>
          <div style={{ marginTop: "22px" }}>
            <p>
              <span style={{ fontWeight: "bold" }}>Name :</span>
              {itemdata.name}
            </p>
            <hr />
            <p>
              <span style={{ fontWeight: "bold" }}>Description :</span>
              {itemdata.desc}
            </p>
            <hr />
            <p>
              <span style={{ fontWeight: "bold" }}>company :</span> {"   "}
              {itemdata.company}
            </p>
            <hr />
            <p>
              <span style={{ fontWeight: "bold" }}>Rating :</span> {"   "}
              {itemdata.rating}
            </p>
            <hr />
          </div>
          <p style={{ margin: "10px", fontWeight: "bold" }}>
            We offers Bronchodilator & Expectorant {itemdata.name}.
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
            {/* Dwarkesh Pharmaceuticals Private Limited */}
            {itemdata.delear_name}
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
