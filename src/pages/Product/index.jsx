import React from "react";
import "./style.css";
import { Box, Center, Text, Tabs, TabList, Tab, Input } from "@chakra-ui/react";
import { BsGrid } from "react-icons/bs";
import { TfiViewListAlt } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { AiOutlineAim } from "react-icons/ai";
import axios from "axios";

export default function Product() {
  const getserver = async () => {
    let res = await axios.get(
      "https://trademart-data-2zur.vercel.app/medicines"
    );
    console.log(res.data);
  };

  return (
    <Box
      display={{ base: "none", sm: "none", md: "block" }}
      className="product"
    >
      <Box className="product__heading">
        <Box>
          <Text className="product__heading__text"></Text>
        </Box>
        <Box className="product__heading__view">
          <Box>
            <Text className="gray">View by:</Text>
          </Box>
          <Box>
            <Center>
              <Text className="gray gray_icon">
                <BsGrid />
              </Text>
            </Center>
            <Text className="gray" fontSize={"12px"} fontWeight="bold">
              Grid
            </Text>
          </Box>
          <Box className="gray">
            <Text>|</Text>
          </Box>
          <Box>
            <Center>
              <Text className="gray gray_icon">
                <TfiViewListAlt />
              </Text>
            </Center>
            <Text className="gray" fontSize={"12px"} fontWeight="bold">
              Flex
            </Text>
          </Box>
          <Box>
            <Text className="gray gray_icon">||</Text>
          </Box>
          <Box>
            <Text className="gray">Suppliers</Text>
          </Box>
        </Box>
      </Box>
      <Box className="product_nav">
        <Box className="product_nav_iconPart">
          <Box className="product_nav_location">
            <Text>
              <IoLocationSharp />
            </Text>
          </Box>
          <Box className="product_nav_ltext gray">
            <Text>Location</Text>
          </Box>
          <Box className="product_nav_search">
            <Text>
              <BiSearch />
            </Text>
            <Input variant="unstyled" htmlSize={4} width="auto" />
          </Box>
          <Box className="product_nav_nearMe gray">
            <Center>
              <Text color={"#9FA8DA"} fontSize={"24px"}>
                <AiOutlineAim />
              </Text>
            </Center>
            <Text>Near Me</Text>
          </Box>
        </Box>
        <Tabs className="tab gray">
          <TabList h={"100%"} gap="10px">
            <Tab
              _selected={{
                color: "black",
                fontWeight: "bold",
                bg: "white",
                borderBottom: "1px solid black",
              }}
            >
              All India
            </Tab>
            <Tab
              _selected={{
                color: "black",
                fontWeight: "bold",
                bg: "white",
                borderBottom: "1px solid black",
              }}
            >
              Indore
            </Tab>
            <Tab
              _selected={{
                color: "black",
                fontWeight: "bold",
                bg: "white",
                borderBottom: "1px solid black",
              }}
            >
              Mumbai
            </Tab>
            <Tab
              _selected={{
                color: "black",
                fontWeight: "bold",
                bg: "white",
                borderBottom: "1px solid black",
              }}
            >
              Delhi
            </Tab>
            <Tab
              _selected={{
                color: "black",
                fontWeight: "bold",
                bg: "white",
                borderBottom: "1px solid black",
              }}
            >
              Ahmedabad
            </Tab>
            <Tab
              _selected={{
                color: "black",
                fontWeight: "bold",
                bg: "white",
                borderBottom: "1px solid black",
              }}
            >
              Jaipur
            </Tab>
            <Tab
              _selected={{
                color: "black",
                fontWeight: "bold",
                bg: "white",
                borderBottom: "1px solid black",
              }}
            >
              Pune
            </Tab>
            <Tab
              _selected={{
                color: "black",
                fontWeight: "bold",
                bg: "white",
                borderBottom: "1px solid black",
              }}
            >
              Bengaluru
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Box>
  );
}
