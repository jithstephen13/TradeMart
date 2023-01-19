import {
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
import React, { useState, useEffect } from "react";

const SearchPageDetails = () => {
  const [data1, setData1] = useState([]);
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
        setData1(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  // useEffect(() => {
  //   fetchData(query)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData1(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", true);
  //     });
  // }, []);

  return (
    <>
      <Heading textAlign="center" textDecoration="underline">
        Search Page
      </Heading>
      <HStack style={{ width: "400px", margin: "auto" }}>
        <Input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch();
          }}
          placeholder="search product name"
        />
        <Button
          onClick={handleSearch}
          style={{ margin: "10px", padding: "10px", border: "1px solid black" }}
        >
          Search
        </Button>
      </HStack>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data1.map((el) => {
          return (
            <GridItem>
              <Image src={el.img_src} alt="image" />
              <Text>Name: {el.name}</Text>
              <Text>Price: {el.price}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default SearchPageDetails;
