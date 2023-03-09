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
import ProductpageLoading from "../pages/ProductpageLoading";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

const SearchPageDetails = ({name}) => {

  const [data, setData] = useState([]);
  const query = useParams();
  let final = query.query;
  const [loading,setLoading]=useState(false)



  const fetchData = (name) => {
    setLoading(!loading)
     setTimeout(function(){
       //setData(res.data)
       setLoading(!loading)
   },2000)
    return axios.get("https://trademart-data-2zur.vercel.app/Allproducts", {
      params: {
        q: name,
      },
    }).then((res) => {
      // console.log(res.data);
      setData(res.data)
     
    })
    .catch((err) => {
      console.log("Error: ",err.message);
    });;
  };

  useEffect(() => {

    fetchData(final)
  }, []);

  if (loading){

    <ProductpageLoading/>
  }


  if (!loading&&data.length==0) {
    return (
      <>
        {/* Navbar */}
        {/* <Navbar /> */}

        <Text fontWeight="bold" textAlign="center" margin="70px 7px 7px 7px">
          No results for {name}
        </Text>
        <Text textAlign="center">Try to search something different</Text>
        <Image
          src="https://media.tenor.com/swTDQJ85dDEAAAAC/aaaa.gif"
          alt="gif"
          display="block"
          margin="15px auto"
          height={{ base: "200px", md: "350px" }}
          width={{ base: "70%", md: "50%" }}
        />

        
      </>
    );
  } else {
    return (
      <>
        
        <Grid
          templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(4,1fr)" }}
          gap="6"
          textAlign="center"
          margin="70px 10px 10px 10px"
        >
          { data && data.map((el) => {
            return (
              <GridItem key={Math.random()} margin={"20px"}>
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
                    <Link to={`/productDetails/${el.id}`}>
                      <Button
                        w="100%"
                        margin="auto"
                        color="white"
                        bgColor="#25766A"
                        _hover={{ backgroundColor: "#1B9A84", color: "white" }}
                      >
                        See more details ...
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
  }
};
export default SearchPageDetails;

