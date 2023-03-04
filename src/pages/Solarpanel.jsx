import React, { useEffect, useState } from "react";
import {
  Flex,
  Grid,
  Box,
  Text,
  Button,
  Icon,
  VStack,
  Image,
  Checkbox,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_solarpanel_item,
  sortMysolarpanel,
} from "../redux/solarpanel/solarpanel.action";
import ProductpageLoading from "./ProductpageLoading";
import Product from "./Product";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Solarpanel = () => {
  const [reset, setReset] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [order, setOrder] = useState("");
  const [company, setCompany] = useState( []);
  // const [data,setData] = useState([])


  const { isLoading, solarpanel, isError } = useSelector(
    (store) => store.solarpanel
  );
  const handleClick = (el) => {
    navigate(`/productdetails/${el.id}`);
  };
  const handleChange = (e) => {
    const { value } = e.target;
 
    if (value == "reset") {
      setReset((previous) => !previous);
      return;
    }
    dispatch(sortMysolarpanel(value));
   
  };
  
  



  const handleSort = (e) => {
    setOrder(e.target.value);
}


  useEffect(() => {
  
    dispatch(Get_solarpanel_item(order,company));

  }, [order,company]);

  const handleFilter = ({ currentTarget: input }) => {
    if (input.checked) {
  const state = [...company, input.value];
  setCompany(state);
        
} else {
  const state = company.filter((val) => val !== input.value);
  setCompany(state);
}
}
  
  if (isLoading) return <ProductpageLoading />;


  return (
    <>
      <Navbar />

      <div
        style={{
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "70px",
          
        }}
      >
        <Product />
        <Stack
           mt={4}
          display={{ md: "none" }}
          margin={"auto"}
          padding={"30px 20px"}
          width={"80%"}
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
        >
          <Grid templateColumns={{
              base: "repeat(1 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}><VStack>
          <Text
            marginTop={2}
            color={"teal"}
            id="solarpanele"
            fontSize={35}
            fontWeight={"bold"}
          >
            solarpanel
          </Text>
          
          <div onChange={handleSort}>
            <Text>Sort by Rating</Text>
                    <input
                        type="radio"
                        name="sort_by_rating"
                        value={"asc"}
                        defaultChecked={order === "asc"}
                    />
                    <label>low</label>
                    <br />
                    <input
                        type="radio"
                        name="sort_by_rating"
                        value={"desc"}
                        defaultChecked={order === "desc"}
                    />
                    <label>high</label>
                </div>
                </VStack>
                <Stack align={"center"} mt={16}>
<Text fontWeight={"extrabold"}> Filter Based on Brands</Text>
                <Grid m={"auto"} templateColumns={{
              base: "repeat(2 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(3, 1fr)",
            }} >



{ solarpanel.companys && <div>
             <input
                 type="checkbox"
                 value={solarpanel.companys[0]}
                 onChange={handleFilter}
                 checked={company.includes(solarpanel.companys[0])}
             />
             <label>{solarpanel.companys[0]}</label>
         </div>}
         { solarpanel.companys &&  <div>
             <input
                 type="checkbox"
                 value={solarpanel.companys[1]}
                 onChange={handleFilter}
                 checked={company.includes(solarpanel.companys[1])}
             />
             <label>{solarpanel.companys[1]}</label>
         </div>}
         { solarpanel.companys && <div>
             <input
                 type="checkbox"
                 value={solarpanel.companys[2]}
                 onChange={handleFilter}
                 checked={company.includes(solarpanel.companys[2])}
             />
             <label>{solarpanel.companys[2]}</label>
         </div>}
        { solarpanel.companys &&  <div>
             <input
                 type="checkbox"
                 value={solarpanel.companys[3]}
                 onChange={handleFilter}
                 checked={company.includes(solarpanel.companys[3])}
             />
             <label>{solarpanel.companys[3]}</label>
         </div>}
</Grid></Stack></Grid>
        </Stack>

        <Flex position={"relative"} justify={"center"} gap={2}>
          <VStack
            id="maindiv"
            align={"center"}
            display={{ base: "none", sm: "none", md: "block" }}
            paddingLeft={"5px"}
            textAlign={"center"}
            alignItems={"center"}
            width={"15%"}
            pb={10}
          >
            <Box
              id="filter"
              p={2}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              textAlign={"center"}
              width={"100%"}
            >
              <Text
                marginTop={2}
                color={"teal"}

                id="solarpanele"
                fontSize={35}

                fontWeight={"bold"}
              >
                solarpanel
              </Text>
              <div onChange={handleSort}>
                    <input
                        type="radio"
                        name="sort_by_rating"
                        value={"asc"}
                        defaultChecked={order === "asc"}
                    />
                    <label>low</label>
                    <br />
                    <input
                        type="radio"
                        name="sort_by_rating"
                        value={"desc"}
                        defaultChecked={order === "desc"}
                    />
                    <label>high</label>
                </div>
               
            </Box>

            <VStack
              id="add"
              p={2}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              align={"start"}
              width={"100%"}
              marginLeft={"0px"}
              textAlign={"left"}
              marginTop={"20px"}
            >
              <Text fontWeight={"extrabold"}>Filter Results</Text>
              <HStack>
                <Checkbox /> <Text>Video</Text>
              </HStack>
              <HStack>
                <Checkbox /> <Text>Shop Now</Text>
              </HStack>
            </VStack>
            <VStack
              id="add"
              p={2}
              width={"100%"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              marginLeft={"0px"}
              align={"start"}
              marginTop={"20px"}
            >
              <Text fontWeight={"extrabold"}>Related Category</Text>
              <Text>Medicine Usege</Text>
              <Text>Medical Services</Text>
            </VStack>
            <VStack
              id="add"
              p={2}
              width={"100%"}
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              marginLeft={"0px"}
              align={"start"}
              marginTop={"20px"}
            >
              <Text fontWeight={"extrabold"}> Filter Based on Brands</Text>
              
     { solarpanel.companys && <div>
                    <input
                        type="checkbox"
                        value={solarpanel.companys[0]}
                        onChange={handleFilter}
                        checked={company.includes(solarpanel.companys[0])}
                    />
                    <label>{solarpanel.companys[0]}</label>
                </div>}
                { solarpanel.companys &&  <div>
                    <input
                        type="checkbox"
                        value={solarpanel.companys[1]}
                        onChange={handleFilter}
                        checked={company.includes(solarpanel.companys[1])}
                    />
                    <label>{solarpanel.companys[1]}</label>
                </div>}
                { solarpanel.companys && <div>
                    <input
                        type="checkbox"
                        value={solarpanel.companys[2]}
                        onChange={handleFilter}
                        checked={company.includes(solarpanel.companys[2])}
                    />
                    <label>{solarpanel.companys[2]}</label>
                </div>}
               { solarpanel.companys &&  <div>
                    <input
                        type="checkbox"
                        value={solarpanel.companys[3]}
                        onChange={handleFilter}
                        checked={company.includes(solarpanel.companys[3])}
                    />
                    <label>{solarpanel.companys[3]}</label>
                </div>}
            </VStack>
          </VStack>

          <Grid
            m={"10px"}
            p={"5px"}
            width={"80%"}
            templateColumns={{
              base: "repeat(1 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={6}
          >

            {solarpanel.solarpanel&&solarpanel.solarpanel.map((el) => {

              return (
                <Box id="probox" key={el._id} m="5px">
                  <VStack
                    textAlign={"center"}
                    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                    h="auto"
                    p="5"
                    borderRadius={16}
                  >
                    <Image
                      id="hov"
                      src={el.img_src}
                      h={{ sm: "125px", md: "185px", lg: "225px" }}
                      alt="product-image"
                    />
                    <Text fontSize={17}>{el.name}</Text>
                    <Text fontWeight={"bold"}>₹ {el.price}</Text>
                    <Box m="8px">
                      {Array(5)
                        .fill("")
                        .map((_, i) => {
                          let rating = Math.ceil(Math.random() * 3);

                          return (
                            <Icon
                              as={AiFillStar}
                              key={i}
                              color={i <= rating ? "gold" : "gray.300"}
                            />
                          );
                        })}
                    </Box>
                    <Text color={"teal"} fontSize={14}>
                      Free shipping with $50.00 orders
                    </Text>

                    <Text>Call 08048970527</Text>
                    <Button
                      onClick={() => handleClick(el)}
                      bg={"rgb(6,128,128)"}
                      padding={"10px"}
                      borderRadius={2}
                      width={"90%"}
                    >
                      {"Contact Supplier >"}
                    </Button>
                  </VStack>
                </Box>
              );
            })}
          </Grid>
        </Flex>
      </div>

      <Footer />
    </>
  );
};

export default Solarpanel;
