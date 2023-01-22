import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SearchPageDetails = () => {
  const [data, setData] = useState([]);
  const query = useParams();
  let final = query.query;
  // console.log('final:', final)

  const fetchData = (final) => {
    return axios.get("https://trademart-data-2zur.vercel.app/Allproducts", {
      params: {
        q: final,
      },
    });
  };

  useEffect(() => {
    fetchData(final)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error: ", true);
      });
  }, []);

  return (
    <>
      <Navbar />
      {/* Products */}
      <Grid
        templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(4,1fr)" }}
        gap="6"
        textAlign="center"
        margin="10px"
      >
        {data.map((el) => {
          return (
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
                  <Link to={`/productDetails/${el.id}`}>
                    <Button
                      w="100%"
                      margin="auto"
                      color="white"
                      bgColor="#25766A"
                      _hover={{ backgroundColor: "#1B9A84", color: "white" }}
                    >
                      Add to Cart
                    </Button>
                  </Link>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
      <Footer />
    </>
  );
};
export default SearchPageDetails;
