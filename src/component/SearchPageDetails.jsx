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
      {/* Body Part */}
      <Heading textAlign="center" textDecoration="underline" margin="15px">
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
          placeholder="Search Product"
        />
        <Button onClick={handleSearch}>Search</Button>
      </HStack>

      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.map((el) => {
          return (
            <GridItem>
              <Image src={el.img_src} alt="image" />
              <Text>Name: {el.name}</Text>
              <Text>Price: {el.price}</Text>
              <Link to={`/productdetails/${el.id}`}>
                <Button>Show</Button>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default SearchPageDetails;
