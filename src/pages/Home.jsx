import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import MegaMenu from "../component/MegaMenu";
import { BsCheckLg } from "react-icons/bs";
import banner1 from "../assets/homepage-banner1.jpg";
import c1 from "../assets/homepage-assets/city1.jpg";
import c2 from "../assets/homepage-assets/city2.jpg";
import c3 from "../assets/homepage-assets/city3.jpg";
import c4 from "../assets/homepage-assets/city4.jpg";
import c5 from "../assets/homepage-assets/city5.jpg";
import c6 from "../assets/homepage-assets/city6.jpg";
import c7 from "../assets/homepage-assets/city7.jpg";
import c8 from "../assets/homepage-assets/city8.jpg";
import c9 from "../assets/homepage-assets/city9.jpg";
import c10 from "../assets/homepage-assets/city10.jpg";
import company1 from "../assets/homepage-assets/comp1.png";
import company2 from "../assets/homepage-assets/comp2.png";
import company3 from "../assets/homepage-assets/comp3.webp";
import company4 from "../assets/homepage-assets/comp4.webp";
import company5 from "../assets/homepage-assets/comp5.webp";
import company6 from "../assets/homepage-assets/comp6.webp";
import company7 from "../assets/homepage-assets/comp7.webp";
import company8 from "../assets/homepage-assets/comp8.png";
import company9 from "../assets/homepage-assets/comp9.webp";
import company10 from "../assets/homepage-assets/comp10.webp";
import company11 from "../assets/homepage-assets/comp11.png";
import company12 from "../assets/homepage-assets/comp12.png";
import carousel1 from "../assets/homepage-assets/carousel1.jpg";
import carousel2 from "../assets/homepage-assets/carousel2.jpg";
import carousel3 from "../assets/homepage-assets/carousel3.jpg";
import software1 from "../assets/homepage-assets/software1.png";
import software2 from "../assets/homepage-assets/software2.png";
import app1 from "../assets/homepage-assets/app1.png";
import app2 from "../assets/homepage-assets/app2.PNG";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import SearchPageDetails from "../component/SearchPageDetails";

const Home = () => {
  let [Carousel, setCarousel] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCarousel(!Carousel);
    }, 3000);
  }, [Carousel]);

  let sec1 = [
    {
      img: "https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg",
      title: "Brick Making Machines",
      d1: "Fly Ash Brick Making Machine",
      d2: "Cement Brick Making Machine",
      d3: "Clay Brick Making Machine",
    },
    {
      img: "https://3.imimg.com/data3/OI/XL/GLADMIN-34562/passenger-lifts-125x125.jpg",
      title: "Passenger Lifts",
      d1: "Residential Elevator",
      d2: "Kone Passenger lift",
      d3: "Stair Lift",
    },
    {
      img: "https://3.imimg.com/data3/KS/JQ/GLADMIN-2475/tmt-bars-125x125.jpg",
      title: "TMT Bars",
      d1: "TATA TMT Bars",
      d2: "Kamdhenu TMT Bars",
      d3: "",
    },
    {
      img: "https://5.imimg.com/data5/QO/YD/GLADMIN-2/plywoods-125x125.jpg",
      title: "Plywoods",
      d1: "Shuttering Plywood",
      d2: "Laminated Plywood",
      d3: "Waterproof Plywood",
    },
    {
      img: "https://3.imimg.com/data3/JE/DA/MY-2/hydraulic-excavator-500x500-125x125.jpg",
      title: "Excavator",
      d1: "Hitachi Excavator",
      d2: "Hyundai Excavator",
      d3: "Komatsu Excavator",
    },
    {
      img: "https://3.imimg.com/data3/VG/QG/GLADMIN-27799/emulsion-paints-125x125.jpg",
      title: "Emulsion Paints",
      d1: "Asian Emulsion Paints",
      d2: "Berger Emulsion Paints",
      d3: "Nerolac Emulsion Paints",
    },
  ];
  let hide1 = [
    {
      img: "https://3.imimg.com/data3/UT/PB/GLADMIN-12558/wood-door-125x125.jpg",
      title: "Wooden Door",
      d1: "Designer Wooden Door",
      d2: "Plywood Door",
      d3: "Wooden Flush Doors",
    },
    {
      img: "https://3.imimg.com/data3/VN/LA/GLADMIN-2047/pvc-pipes-125x125.jpg",
      title: "PVC Pipes",
      d1: "Finolex Pipes",
      d2: "Rigid PVC Pipes",
      d3: "Flexible PVC Pipes",
    },
    {
      img: "https://3.imimg.com/data3/YD/WE/GLADMIN-23639/building-brick-125x125.jpg",
      title: "Building Brick",
      d1: "Red Brick",
      d2: "Fly Ash Bricks",
      d3: "Cement Brick",
    },
  ];
  let sec2 = [
    {
      img: "https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg",
      title: "Office Automation Products",
      d1: "Multifunction Printer",
      d2: "Xerox Machines",
      d3: "Fingerprint Scanners",
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg",
      title: "Sensors & Transducers",
      d1: "Level Sensors",
      d2: "Proximity Sensor",
      d3: "Sensor for Home & Office Load Cell",
    },
    {
      img: "https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg",
      title: "Process Controllers",
      d1: "Process Controllers",
      d2: "Level Controllers",
      d3: "Motor & Temperature Controllers",
    },
    {
      img: "https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg",
      title: "Control & Automation",
      d1: "VFD",
      d2: "PLC",
      d3: "HMI",
    },
    {
      img: "https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg",
      title: "Diodes & Active Devices",
      d1: "Integrated Circuits",
      d2: "Thyristors",
      d3: "Light Emitting Diode",
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg",
      title: "Wires & Cables",
      d1: "House Wire",
      d2: "Armoured Cable",
      d3: "Power Cable",
    },
  ];
  let hide2 = [
    {
      img: "https://5.imimg.com/data5/VB/IL/GLADMIN-2/street-light-125x125.jpg",
      title: "Commercial Lights",
      d1: "Flood Lights",
      d2: "Street Lights",
      d3: "Panel Light",
    },
    {
      img: "https://5.imimg.com/data5/LX/YW/GLADMIN-2/inverter-batteries-125x125.png",
      title: "Battries",
      d1: "Lithium Battery",
      d2: "Inverter Batteries",
      d3: "Electric Vehicle Battery",
    },
    {
      img: "https://3.imimg.com/data3/EX/HO/GLADMIN-37340/solar-power-systems-125x125.jpg",
      title: "Solar & Renewable Energy",
      d1: "Solar Panels",
      d2: "Solar Inverter",
      d3: "Solar Pumps",
    },
  ];
  let sec3 = [
    {
      img: "https://5.imimg.com/data5/KT/MJ/MY-16675294/pharmaceutical-drug-125x125.jpg",
      title: "Pharmaceutical Drug",
      d1: "Anticoagulant and Antiplatelet Drugs",
      d2: "Antiparasitic Drug",
      d3: "Antibiotic Tablets, Capsule & Syrup",
      d4: "Antifungal Injection, Tablet & Syrup",
    },
    {
      img: "https://3.imimg.com/data3/JR/DH/GLADMIN-7427/nutritional-supplements-125x125.jpg",
      title: "Nutraceuticals",
      d1: "Vitamin Tablets & Capsules",
      d2: "Weight Loss Supplement",
      d3: "Dietary Supplements",
      d4: "Mineral Supplement",
    },
    {
      img: "https://5.imimg.com/data5/PQ/HW/MY-7191707/thinq-mass-gainer-282-lbs-29-125x125.png",
      title: "Fitness Supplements",
      d1: "Weight Gain Nutrition",
      d2: "Weight Gain Capsule",
      d3: "Pre workout Supplements",
      d4: "Immune Booster",
    },
    {
      img: "https://3.imimg.com/data3/BA/YT/MY-2018319/multidisciplinary-care-125x125.jpg",
      title: "Medical Treatment Services",
      d1: "Dental Treatment Services",
      d2: "Medical Surgery Services",
      d3: "Eye Treatment",
      d4: "Plastic Surgery Services",
    },
    {
      img: "https://5.imimg.com/data5/JM/MB/MY-4222986/8-125x125.jpg",
      title: "Medical Test Services",
      d1: "CT Scan Services",
      d2: "Ultrasound Services",
      d3: "ECHO Cardiography",
      d4: "Blood Testing",
    },
    {
      img: "https://5.imimg.com/data5/YC/QB/MY-3773531/allopathic-pcd-pharma-franchise-125x125.jpg",
      title: "PCD Pharma Franchise",
      d1: "Pharma Franchise",
      d2: "Allopathic",
      d3: "Ayurvedic",
      d4: "Veterinary",
    },
  ];
  let sec4 = [
    {
      img: "https://3.imimg.com/data3/WE/MN/MY-2/food-processing-machine-125x125.jpg",
      title: "Food Processing Machine",
      d1: "Flour Mill",
      d2: "Spice Processing Machines",
      d3: "Rice Mill Machinery",
    },
    {
      img: "https://3.imimg.com/data3/SF/NU/MY-2/high-speed-automatic-t-shirt-bag-making-machine-two-line--125x125.jpg",
      title: "Bag Making Machine",
      d1: "Non Woven Bag Making Machine",
      d2: "Proximity Sensor",
      d3: "Sensor for Home & Office Load Cell",
    },
    {
      img: "https://5.imimg.com/data5/NG/VV/GLADMIN-2/nop300-125x125.png",
      title: "Snack Machine",
      d1: "Namkeen Making Machines",
      d2: "Popcorn Machines",
      d3: "Motor & Temperature Controllers",
    },
    {
      img: "https://3.imimg.com/data3/UK/HT/MY-2/deck-125x125.jpg",
      title: "Bakery & Dairy Machinery",
      d1: "Bakery Machinery",
      d2: "Bakery Oven",
      d3: "Sweets Making Machine",
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/6/MW/VE/VZ/87939/cnc-lathe-machine-125x125.png",
      title: "CNC Machines & Lathe Machine",
      d1: "Integrated Circuits",
      d2: "Thyristors",
      d3: "Light Emitting Diode",
    },
    {
      img: "https://3.imimg.com/data3/TU/LV/GLADMIN-2070/flexographic-printing-machine-125x125.jpg",
      title: "Printing Machine",
      d1: "House Wire",
      d2: "Armoured Cable",
      d3: "Power Cable",
    },
  ];
  let hide4 = [
    {
      img: "https://3.imimg.com/data3/GF/WP/GLADMIN-45894/industrial-compressor-125x125.jpg",
      title: "Air Compressors",
      d1: "Flood Lights",
      d2: "Street Lights",
      d3: "Panel Light",
    },
    {
      img: "https://5.imimg.com/data5/PA/NP/GLADMIN-2/seawaterfiltrationsystem-125x125.jpg",
      title: "Water Purification Plants",
      d1: "Lithium Battery",
      d2: "Inverter Batteries",
      d3: "Electric Vehicle Battery",
    },
    {
      img: "https://3.imimg.com/data3/YN/LI/MY-2/dsc_2766-125x125.jpg",
      title: "Food Processing Plants",
      d1: "Oil Free Air Compressor",
      d2: "Reciprocating Compressors",
      d3: "Refrigeration Compressors",
    },
  ];
  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar />
      <Box backgroundColor="#F3F3F3" align="center" marginTop="50px">
        {/* --------------------------------Banner & Search---------------------------------- */}
        <Box
          backgroundImage={banner1}
          backgroundPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          backgroundSize="cover"
          minHeight={{ base: "120px", sm: "220px" }}
        >
          <Box position="absolute" w={["90%", "85%", "75%", "65%", "60%"]}>
            <Text
              textAlign="center"
              outline="0"
              margin="0"
              padding="10px"
              border="0"
              font="inherit"
              verticalAlign="baseline"
              color="#f9f9f9"
              fontSize={{ base: "12px", sm: "17", md: "22px" }}
            >
              Search for products & find verified sellers near you
            </Text>
            <Flex>
              <Select
                fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                backgroundColor="#ececec"
                color="#333"
                width={{ sm: "20%", md: "30%" }}
                height={{ base: "20px", sm: "30px", md: "50px" }}
                display={{ base: "none", sm: "flex" }}
                borderRadius="0px"
                placeholder="All India"
              >
                {state?.map((el) => (
                  <option key={Math.random()} style={{ fontSize: "12px" }} value="option2">

                    {el}
                  </option>
                ))}
              </Select>
              <Input
                onChange={(e) => {
                  setQuery(e.target.value)}
                }
                paddingLeft="10px"
                fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                variant="unstyled"
                placeholder=" Enter product/service name"
                bg="white"
                height={{ base: "20px", sm: "30px", md: "50px" }}
                borderRadius="0px"
              />
              {/* <Link to= { `/searchProduct/${query}` }> */}
                <Button
                  fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                  borderRadius="0px"
                  fontFamily="arial"
                  background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                  colorScheme="#fff"
                  p="5px 22px"
                  border="none"
                  margin="0"
                  height={{ base: "20px", sm: "30px", md: "50px" }}
                  position="relative"
                  left="-4px"
                  top="0"
                  cursor="pointer"
                  width="142px"
                  fontWeight="700"
                  text-indent="30px"
                >
                  Search
                </Button>
              {/* </Link> */}
            </Flex>
          </Box>
        </Box>
       {
          query !== "" ? <SearchPageDetails name={query}/> : 
       <Box>
        {/* -------------------------------MegaMenu--------------------------------------- */}
        <Box backgroundColor="white">
          <MegaMenu />
        </Box>
        <hr />
        {/* -------------------------------Carousel------------------------------------------ */}
        <Box backgroundColor="white">
          <Flex>
            <Box
              w={{ base: "0%", md: "35%" }}
              display={{ base: "none", md: "flex" }}
              flexDirection="column"
            >
              <Heading
                align="left"
                p={{ base: "5px 5px 5px 5px", md: "40px 20px 10px 20px" }}
                fontSize={{ base: "15px", sm: "18px", md: "22px", lg: "30px" }}
                fontFamily="Arial"
                color="#333"
              >
                We connect
              </Heading>
              <Heading
                align="left"
                p={{ base: "0px 10px", md: "0px 20px" }}
                fontSize={{ base: "18px", sm: "20px", md: "25px", lg: "35px" }}
                fontFamily="Arial"
                color="#333"
              >
                Buyers & Sellers
              </Heading>
              <Text
                align="left"
                p="20px"
                fontSize={{ base: "12px", sm: "13px", md: "15px", lg: "20px" }}
              >
                IndiaMART is India's largest online B2B marketplace, connecting
                buyers with suppliers.
              </Text>
              <Image
                p={{
                  base: "0px",
                  md: "10px 20px 10px 20px",
                  xl: "30px 20px 10px 20px",
                }}
                w={{ md: "100%", lg: "80%" }}
                src={carousel3}
              />
            </Box>
            <Box
              w={{ base: "100%", md: "65%" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box w="100%" p="20px">
                {Carousel ? (
                  <Image src={carousel1} />
                ) : (
                  <Box position="relative">
                    <Image src={carousel2} />
                    <Box
                      border="1px solid gray"
                      left="50%"
                      top="20%"
                      p="15px"
                      w="50%"
                      position="absolute"
                    >
                      <Flex>
                        <Select
                          fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                          backgroundColor="#ececec"
                          color="#333"
                          width={{ sm: "20%", md: "30%" }}
                          h={{ base: "20px", md: "30px" }}
                          display={{ base: "none", sm: "flex" }}
                          borderRadius="0px"
                          placeholder="All India"
                        >
                          {state?.map((el) => (
                            <option
                            key={Math.random()}
                              style={{ fontSize: "12px" }}
                              value="option2"
                            >
                              {el}
                            </option>
                          ))}
                        </Select>
                        <Input
                          fontSize={{ base: "11px", sm: "12px", md: "13px" }}
                          variant="unstyled"
                          placeholder=" Enter product/service name"
                          bg="white"
                          h={{
                            base: "15px",
                            sm: "15px",
                            md: "20px",
                            xl: "25px",
                          }}
                          p="10px"
                          borderRadius="0px"
                        />
                      </Flex>
                      <Input
                        fontSize={{ base: "11px", sm: "12px", md: "13px" }}
                        variant="unstyled"
                        placeholder="Mobile No."
                        bg="white"
                        h={{ base: "15px", sm: "15px", md: "20px", xl: "25px" }}
                        m="5px 0px"
                        borderRadius="0px"
                        p="10px"
                      />
                      <Input
                        display={{ base: "none", sm: "flex" }}
                        fontSize={{ base: "11px", sm: "12px", md: "13px" }}
                        variant="unstyled"
                        placeholder=" Enter Your Name"
                        bg="white"
                        h={{ base: "15px", sm: "15px", md: "20px", xl: "25px" }}
                        p="10px"
                        m="5px 0px"
                        borderRadius="0px"
                      />
                      <Button
                        fontSize={{ base: "11px", sm: "12px", md: "13px" }}
                        borderRadius="0px"
                        fontFamily="arial"
                        background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                        colorScheme="#fff"
                        border="none"
                        margin="0"
                        h={{ base: "15px", sm: "25px", md: "30px", xl: "40px" }}
                        position="relative"
                        left="-4px"
                        top="0"
                        cursor="pointer"
                        width="142px"
                        fontWeight="700"
                        text-indent="30px"
                      >
                        Search
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
        {/* ------------------------------Construction------------------------------------ */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "28px" }}
            fontFamily="Arial"
            color="#333"
          >
            Building Construction Material & Equipment
          </Heading>
          <Flex height="100%" w="95%" m="auto" p="10px 0px">
            <Box
              w={{ base: "0%", xl: "28%" }}
              visibility={{ base: "hidden", xl: "visible" }}
            >
              <Box
                position="relative"
                backgroundImage="https://hm.imimg.com/imhome_gifs/building-construction.jpg"
              >
                <a href="/">
                  <Button
                    top="400px"
                    right="30%"
                    position="absolute"
                    fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                    borderRadius="0px"
                    fontFamily="arial"
                    background="teal"
                    colorScheme="white"
                    p="5px 22px"
                    border="none"
                    margin="0"
                    height={{ base: "20px", sm: "30px", md: "50px" }}
                    cursor="pointer"
                    width="142px"
                    fontWeight="700"
                    text-indent="30px"
                  >
                    View All
                  </Button>
                </a>
              </Box>
              <Image
                height="100%"
                p="0px 20px 0px 0px"
                objectFit="cover"
                src="https://hm.imimg.com/imhome_gifs/building-construction.jpg"
              />
            </Box>
            <SimpleGrid
              height="100%"
              w={{ base: "100%", xl: "72%" }}
              columns={{ base: 2, md: 3 }}
              spacing={5}
            >
              {sec1.map((el,i) => (
                <Flex
                key={Math.random()}

                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                    >
                      {el.title}
                    </Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
              {hide1.map((el,i) => (
                <Flex
                 key={Math.random()}
                     display={{ base: "none", md: "flex" }}
                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                    >
                      {el.title}
                    </Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* ------------------------------Electronics------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "28px" }}
            fontFamily="Arial"
            color="#333"
          >
            Electronics & Electrical Goods & Supplies
          </Heading>
          <Flex height="100%" w="95%" m="auto" p="10px 0px">
            <Box
              w={{ base: "0%", xl: "28%" }}
              visibility={{ base: "hidden", xl: "visible" }}
            >
              <Box
                position="relative"
                backgroundImage="https://hm.imimg.com/imhome_gifs/electronics-electrical-goods.jpg"
              >
                <a href="/Projector">
                  <Button
                    top="360px"
                    right="30%"
                    position="absolute"
                    fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                    borderRadius="0px"
                    fontFamily="arial"
                    background="teal"
                    colorScheme="white"
                    p="5px 22px"
                    border="none"
                    margin="0"
                    height={{ base: "20px", sm: "30px", md: "50px" }}
                    cursor="pointer"
                    width="142px"
                    fontWeight="700"
                    text-indent="30px"
                  >
                    View All
                  </Button>
                </a>
              </Box>
              <Image
                height="100%"
                p="0px 20px 0px 0px"
                objectFit="cover"
                src="https://hm.imimg.com/imhome_gifs/electronics-electrical-goods.jpg"
              />
            </Box>
            <SimpleGrid
              height="100%"
              w={{ base: "100%", xl: "72%" }}
              columns={{ base: 2, md: 3 }}
              spacing={5} 
            >
              {sec2.map((el,i) => (
                <Flex
                 key={Math.random()}
                     p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                    >
                      {el.title}
                    </Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
               {hide2.map((el) => (
                <a key={Math.random()} href="/solar">
                   <Flex
                    display={{ base: "none", md: "flex" }}
                    p="10px"
                    flexDirection={{ base: "column", sm: "row" }}
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                  >
                    <Box w="50%">
                      <Image src={el.img} />
                    </Box>
                    <Box p="0px 10px" align="start">
                      <Text
                        fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                        pb="5px"
                        fontWeight="700"
                      >
                        {el.title}
                      </Text>
                      <Text fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d1}
                      </Text>
                      <Text fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d2}
                      </Text>
                      <Text fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d3}
                      </Text>
                    </Box>
                  </Flex>
                </a>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* -------------------------------Cities------------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "30px" }}
            fontFamily="Arial"
            color="#333"
          >
            Find Suppliers from Top Cities
          </Heading>
          <Flex justifyContent="space-around">
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c1}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Delhi
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c2}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Bengaluru
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c3}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Chennai
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c4}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Mumbai
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c5}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Ahmedabad
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-around">
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c6}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Kolkata
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c7}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Pune
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c8}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Surat
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c9}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Jaipur
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={c10}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Hyderabad
              </Text>
            </Box>
          </Flex>
        </Box>
        {/* -------------------------------Medicine------------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px 0px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "28px" }}
            fontFamily="Arial"
            color="#333"
          >
            Pharmaceutical Drug, Medicine, Medical Care & Consultation
          </Heading>
          <Flex w="95%" m="auto" p="10px 0px 0px 0px">
            <Box
              w={{ base: "0%", xl: "28%" }}
              visibility={{ base: "hidden", xl: "visible" }}
            >
              <Box
                position="relative"
                backgroundImage="https://hm.imimg.com/imhome_gifs/bigBn06.jpg"
              >
                <a href="/Medicines">
                  <Button
                    top="350px"
                    right="30%"
                    position="absolute"
                    fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                    borderRadius="0px"
                    fontFamily="arial"
                    background="teal"
                    colorScheme="white"
                    p="5px 22px"
                    border="none"
                    margin="0"
                    height={{ base: "20px", sm: "30px", md: "50px" }}
                    cursor="pointer"
                    width="142px"
                    fontWeight="700"
                    text-indent="30px"
                  >
                    View All
                  </Button>
                </a>
              </Box>
              <Image
                height="90%"
                objectFit="cover"
                src="https://hm.imimg.com/imhome_gifs/bigBn06.jpg"
              />
            </Box>
            <SimpleGrid
              w={{ base: "100%", xl: "72%" }}
              height="100%"
              columns={{ base: 2, md: 3 }}
              spacing={5}
            >
              {sec3.map((el) => (
                <a key={Math.random()} href="/Medicines">

                  <Flex
                    p="10px"
                    flexDirection={{ base: "column", sm: "row" }}
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                  >
                    <Box w="50%">
                      <Image src={el.img} />
                    </Box>
                    <Box p="0px 10px" align="start">
                      <Text
                        fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                        pb="5px"
                        fontWeight="700"
                      >
                        {el.title}
                      </Text>
                      <Text fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d1}
                      </Text>
                      <Text fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d2}
                      </Text>
                      <Text fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d3}
                      </Text>
                      <Text fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d4}
                      </Text>
                    </Box>
                  </Flex>
                </a>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* --------------------------------Brands------------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "30px" }}
            fontFamily="Arial"
            color="#333"
          >
            Explore products from Premium Brands
          </Heading>
          <Flex justifyContent="space-around">
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company1} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company2} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company3} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company4} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company5} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company6} />
            </Box>
          </Flex>
          <Flex justifyContent="space-around">
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company7} />
            </Box>
            <Box
              w="12%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company8} />
            </Box>
            <Box
              w="12%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company9} />
            </Box>
            <Box
              w="12%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company10} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company12} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={company11} />
            </Box>
          </Flex>
        </Box>
        {/* -------------------------------Industrial---------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "28px" }}
            fontFamily="Arial"
            color="#333"
          >
            Industrial Plants, Machinery & Equipment
          </Heading>
          <Flex height="100%" w="95%" m="auto" p="10px 0px">
            <Box
              w={{ base: "0%", xl: "28%" }}
              visibility={{ base: "hidden", xl: "visible" }}
            >
              <Box
                position="relative"
                backgroundImage="https://hm.imimg.com/imhome_gifs/industrial-plants-machinery.jpg"
              >
                <a href="/">
                  <Button
                    top="400px"
                    right="30%"
                    position="absolute"
                    fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                    borderRadius="0px"
                    fontFamily="arial"
                    background="teal"
                    colorScheme="white"
                    p="5px 22px"
                    border="none"
                    margin="0"
                    height={{ base: "20px", sm: "30px", md: "50px" }}
                    cursor="pointer"
                    width="142px"
                    fontWeight="700"
                    text-indent="30px"
                  >
                    View All
                  </Button>
                </a>
              </Box>
              <Image
                height="100%"
                p="0px 20px 0px 0px"
                objectFit="cover"
                src="https://hm.imimg.com/imhome_gifs/industrial-plants-machinery.jpg"
              />
            </Box>
            <SimpleGrid
              height="100%"
              w={{ base: "100%", xl: "72%" }}
              columns={{ base: 2, md: 3 }}
              spacing={5}
            >
              {sec4.map((el) => (
                <Flex
                key={Math.random()}
                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                    >
                      {el.title}
                    </Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
              {hide4.map((el) => (
                <Flex
                  key={Math.random()}
                  display={{ base: "none", md: "flex" }}
                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                    >
                      {el.title}
                    </Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* -------------------------------Software---------------------------------- */}
        <Flex
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Box p={{ base: "10px", md: "50px" }} align="start">
            <Image w={{ base: "20%", md: "50%" }} src={software1} />
            <Heading
              p={{ base: "10px 0px 0px 0px", md: "20px 0px 0px 0px" }}
              fontSize={{ base: "18px", sm: "20px", md: "30px" }}
              fontFamily="Arial"
              color="#333"
            >
              Accounting Software
            </Heading>
            <Text
              p={{ base: "0px 0px 10px 0px", md: "0px 0px 20px 0px" }}
              fontSize={{ base: "12px", sm: "13px", md: "20px" }}
            >
              Trusted by 3,60,000+ Small Businesses across different domains
            </Text>
            <Flex gap={5}>
              <Box pt="5px">
                <BsCheckLg
                  color="blue"
                  fontSize={{ base: "15px", md: "20px" }}
                />
              </Box>
              <Text fontSize={{ base: "12px", sm: "13px", md: "18px" }}>
                GST Accounting Software
              </Text>
            </Flex>
            <Flex gap={5}>
              <Box pt="5px">
                <BsCheckLg
                  color="blue"
                  fontSize={{ base: "15px", md: "20px" }}
                />
              </Box>
              <Text fontSize={{ base: "12px", sm: "13px", md: "18px" }}>
                e-Invoice Software
              </Text>
            </Flex>
            <Flex gap={5}>
              <Box pt="5px">
                <BsCheckLg
                  color="blue"
                  fontSize={{ base: "15px", md: "20px" }}
                />
              </Box>
              <Text fontSize={{ base: "12px", sm: "13px", md: "18px" }}>
                Inventory Management Software
              </Text>
            </Flex>
            <Flex gap={5}>
              <Box pt="5px">
                <BsCheckLg
                  color="blue"
                  fontSize={{ base: "15px", md: "20px" }}
                />
              </Box>
              <Text fontSize={{ base: "12px", sm: "13px", md: "18px" }}>
                e-Way Billing Software
              </Text>
            </Flex>
          </Box>
          <Box p={{ base: "10px", md: "50px 0px 0px 0px" }}>
            <Image
              display={{ base: "none", lg: "flex" }}
              w="50%"
              src={software2}
            />
          </Box>
        </Flex>
        {/* -------------------------------Mobile App--------------------------------- */}
        <Flex
          borderTop="3px solid purple"
          backgroundColor="white"
          justifyContent="space-evenly"
          margin="20px"
          w="96%"
        >
          <Box p={{ base: "10px", md: "50px 0px 0px 0px" }}>
            <Image w="70%" src={app1} />
          </Box>
          <Box p={{ base: "10px", md: "100px 0px 50px 0px" }} align="start">
            <Heading
              p={{ base: "10px 0px 0px 0px", md: "20px 0px 0px 0px" }}
              fontSize={{ base: "18px", sm: "20px", md: "30px" }}
              fontFamily="Arial"
              color="#333"
            >
              Get IndiaMART App
            </Heading>
            <Text
              p={{ base: "0px 0px 10px 0px", md: "0px 0px 20px 0px" }}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            >
              Search for products/services and connect with verified sellers on
              the go!
            </Text>
            <Flex>
              <Input
                fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                variant="outline"
                placeholder=" Enter Mobile No."
                bg="white"
                height={{ base: "15px", sm: "20px", md: "30px" }}
                borderRadius="0px"
                margin="10px 0px"
              />
              <Button
                fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                borderRadius="0px"
                fontFamily="arial"
                background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                colorScheme="#fff"
                p="5px 22px"
                border="none"
                margin="10px 0px"
                height={{ base: "15px", sm: "20px", md: "30px" }}
                position="relative"
                left="-4px"
                cursor="pointer"
                width="142px"
                fontWeight="700"
                text-indent="30px"
              >
                Search
              </Button>
            </Flex>
            <Text
              p={{ base: "0px 0px 10px 0px", md: "0px 0px 20px 0px" }}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            >
              We will send you a link, open it on your phone to download the App
            </Text>
            <Image w={{ base: "20%", md: "50%" }} src={app2} />
          </Box>
        </Flex>
        </Box>
        }
        {/* ------------------------------------------------------------------------- */}
      </Box>

      
      <Footer />
      
    </>
  );
};
export default Home;
