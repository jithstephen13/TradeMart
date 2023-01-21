import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchPageDetails = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = (query) => {
    return axios.get("https://trademart-data-2zur.vercel.app/Allproducts", {
      params: {
        q: query,
      },
    });
  };

  const handleSearch = () => {
    fetchData(query)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  // useEffect(() => {
  //   fetchData(query)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", true);
  //     });
  // }, []);

  return (
    <>
      {/* Search Body Part */}
      <Heading textAlign="center" textDecoration="underline" margin="15px">
        Search Page
      </Heading>
      <HStack w={{ base: "340px", md: "400px" }} m="auto">
        <Input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch();
          }}
          placeholder="Search Product"
        />
        <Button onClick={handleSearch}>Search</Button>
      </HStack>

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

                  <Link to={`/productdetails/${el.id}`}>
                    <Button
                      w="100%"
                      margin="auto"
                      color="white"
                      bgColor="#25766a"
                      _hover={{ backgroundColor: "#1b9a84", color: "white" }}
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
    </>
  );
};

export default SearchPageDetails;
