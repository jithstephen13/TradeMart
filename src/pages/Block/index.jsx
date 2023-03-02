import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import "./style.css";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
export default function Block() {
  return (
    <>
      <Navbar />
      <Box width={"85%"} margin="auto" gap={"10px"} display="grid">
        <Flex>
          <Text
            fontSize={"25px"}
            fontWeight={"bold"}
            borderBottom={"2px solid black"}
          >
            Plywood
          </Text>
          <Text fontSize={"25px"} fontWeight={"bold"}>
            , Particle Board, Timber Logs, Planks, Bamboo, Veneers & Laminates
          </Text>
        </Flex>
        <Flex flexDirection={"column"} gap="10px">
          <Flex
            height={"250px"}
            border="1px solid #BDBDBD"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <Box padding={"2%"} background={"#E8EAEB"} width="15%">
              <Box padding={"6%"} height={"60%"}>
                <Image
                  width={"100%"}
                  height="100%"
                  src="https://5.imimg.com/data5/GLADMIN/Default/2022/7/DG/UU/HW/92368/plywoods-125x125.jpeg"
                  alt="plywwod"
                />
              </Box>
              <Box>
                <Text
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Plywood
                </Text>
              </Box>
            </Box>
            <Flex flexDirection={"column"} justifyContent="space-between">
              <Flex height={"90%"} padding="1%">
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://5.imimg.com/data5/GLADMIN/Default/2022/7/SY/HS/XL/92368/shuttering-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Shuttering Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
              </Flex>
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text
                  fontSize={"14px"}
                  height="20px"
                  width={"180px"}
                  bg={"#2E3192"}
                  textAlign="center"
                  color="white"
                >
                  View More
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex
            height={"250px"}
            border="1px solid #BDBDBD"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <Box padding={"2%"} background={"#E8EAEB"} width="15%">
              <Box padding={"6%"} height={"60%"}>
                <Image
                  width={"100%"}
                  height="100%"
                  src="https://5.imimg.com/data5/GLADMIN/Default/2022/7/DG/UU/HW/92368/plywoods-125x125.jpeg"
                  alt="plywwod"
                />
              </Box>
              <Box>
                <Text
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Plywood
                </Text>
              </Box>
            </Box>
            <Flex flexDirection={"column"} justifyContent="space-between">
              <Flex height={"90%"} padding="1%">
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://5.imimg.com/data5/GLADMIN/Default/2022/7/SY/HS/XL/92368/shuttering-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Shuttering Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
              </Flex>
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text
                  fontSize={"14px"}
                  height="20px"
                  width={"180px"}
                  bg={"#2E3192"}
                  textAlign="center"
                  color="white"
                >
                  View More
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex
            height={"250px"}
            border="1px solid #BDBDBD"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <Box padding={"2%"} background={"#E8EAEB"} width="15%">
              <Box padding={"6%"} height={"60%"}>
                <Image
                  width={"100%"}
                  height="100%"
                  src="https://5.imimg.com/data5/GLADMIN/Default/2022/7/DG/UU/HW/92368/plywoods-125x125.jpeg"
                  alt="plywwod"
                />
              </Box>
              <Box>
                <Text
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Plywood
                </Text>
              </Box>
            </Box>
            <Flex flexDirection={"column"} justifyContent="space-between">
              <Flex height={"90%"} padding="1%">
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://5.imimg.com/data5/GLADMIN/Default/2022/7/SY/HS/XL/92368/shuttering-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Shuttering Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
                <Box padding={"2%"} className={"productDetail"}>
                  <Box padding={"6%"} height={"60%"}>
                    <Image
                      width={"100%"}
                      height="100%"
                      src="https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg"
                      alt="plywwod"
                    />
                  </Box>
                  <Box>
                    <Text
                      textAlign={"center"}
                      fontSize={"16px"}
                      fontWeight={"bold"}
                    >
                      Waterproof Plywood
                    </Text>
                  </Box>
                </Box>
              </Flex>
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text
                  fontSize={"14px"}
                  height="20px"
                  width={"180px"}
                  bg={"#2E3192"}
                  textAlign="center"
                  color="white"
                >
                  View More
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
