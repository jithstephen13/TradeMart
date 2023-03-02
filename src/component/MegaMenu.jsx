import {
  Box,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import image1 from "../assets/MegaMenu/mm1.png";
import image2 from "../assets/MegaMenu/mm2.png";
import image3 from "../assets/MegaMenu/mm3.png";
import image4 from "../assets/MegaMenu/mm4.png";
import image5 from "../assets/MegaMenu/mm5.png";
import image6 from "../assets/MegaMenu/mm6.png";
const MegaMenu = () => {
  return (
    <Box w={{ base: "100%", lg: "95%" }} margin="auto">
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap="38px"
      >
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <Image
                p="0px 10px 0px 15px"
                w={{ base: "45px", sm: "50px", md: "80px" }}
                src={image1}
                h="100%"
              />
              <Text fontSize={{ base: "12px", sm: "14px", md: "16px" }}>
                Building & Construction
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 15px 0px 17px",
                xl: "0px 30px 0px 35px",
              }}
            >
              <Box>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Wood, Plywood,
                  <br /> Veneer & Laminates
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Plywoods{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Laminate Sheets{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Wood Boards{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Wall Panels{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Hardwood{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Particle Board{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  MDF Board{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Wooden Planks{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  WPC Board{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Wood Veneer{" "}
                </MenuItem>
              </Box>
              <Box>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Steel Bars, Rods, Plates
                  <br /> & Sheets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  TMT Bars{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Steel Plates
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Stainless Steel Sheet{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Steel Rods
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Mild Steel Bars
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Steel Bars{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Steel Round Bars
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Stainless Steel Bars
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Roofing and <br />
                  False ceiling
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Roofing Sheets{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  False Ceiling{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Metal Roofing Sheet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  GI Sheets{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Polycarbonate Sheet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Roof Tiles{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ceiling Panels{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Profile Sheets{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ceiling Accessories
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  PVC, FRP, HDPE & Other
                  <br /> Plastic Pipes
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  PVC Pipes{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Plumbing Pipe{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Borewell Pipes{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Industrial Plastic Pipes
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  CPVC Pipe{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Drainage Pipe{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  UPVC Water Pipes{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Sanitary Pipes{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Drip Irrigation Pipes{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Underground HDPE Pipes{" "}
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Building & <br />
                  Construction Machines{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ceiling Board{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Roofing Sheets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  False Ceiling
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Metal Roofing Sheet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  GI Sheets{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Polycarbonate Sheet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Roof Tiles{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ceiling Panels
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Profile Sheets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ceiling Accessories
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ceiling Board{" "}
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Building Panels &<br /> Cladding Materials{" "}
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Boundary Walls
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Wall & Roof Panels
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Wall Partitions And Door Partitions
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cladding Sheets & Panels
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Gypsum Board
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Building Jali, Screens & Grills
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Building & Electricity Poles
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Water Resistant Membranes
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Building Columns & Pillars
                </MenuItem>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <Image
                p="0px 10px 0px 10px"
                w={{ base: "45px", sm: "50px", md: "80px" }}
                src={image2}
                h="100%"
              />
              <Text fontSize={{ base: "12px", sm: "14px", md: "16px" }}>
                Electronics & Electrical
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 10px 0px 22px",
                xl: "0px 20px 0px 45px",
              }}
            >
              <Box>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Office Automation <br /> Products Devices
                  </MenuItem>
                </Link>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Xerox Machines
                  </MenuItem>
                </Link>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Billing Machines
                  </MenuItem>
                </Link>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Projector
                  </MenuItem>
                </Link>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Computer Printers
                  </MenuItem>
                </Link>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Laser Printer
                  </MenuItem>
                </Link>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Multifunction Printer
                  </MenuItem>
                </Link>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Inkjet Printer
                  </MenuItem>
                </Link>
                <Link to="/Projector">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Counting Machines
                  </MenuItem>
                </Link>
              </Box>
              <Box>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Solar & Renewable
                    <br /> Energy Products
                  </MenuItem>
                </Link>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Solar Panels
                  </MenuItem>
                </Link>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Solar Power Plants
                  </MenuItem>
                </Link>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Solar Lighting
                  </MenuItem>
                </Link>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Solar Water Heater
                  </MenuItem>
                </Link>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Water Pumps
                  </MenuItem>
                </Link>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Water Heater & Geyser
                  </MenuItem>
                </Link>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Solar Inverter
                  </MenuItem>
                </Link>
                <Link to="/solar">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Solar Lamps
                  </MenuItem>
                </Link>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Indoor Lights &<br /> Lighting Accessories
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Light Bulb
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Bulb Raw Material
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  LED Bulb
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tube Light
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Lighting Component
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ceiling Lights
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Lamp Holders
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Panel Light
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Batteries & Charge
                  <br /> Storage Devices
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Inverter Batteries
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Lithium Battery
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Automotive Batteries
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Electric Vehicle Battery
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Battery Chargers
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Two Wheeler Battery
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Car Batteries
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Mobile Charger
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  LED, LCD, Smart TV
                  <br /> and Home Theatre
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  LED TV
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Set Top Box
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Home Theatre
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Smart TV
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  DTH Kit
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  TV Accessories
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  LCD Television
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Satellite TV Receiver
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Home Appliances & Machines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Washing Machine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Juicer Mixer Grinder
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Electric Irons
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Coffee Makers
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Electric Cooktop
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Microwave Oven
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Steam Iron
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Mixer Grinder
                </MenuItem>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <Image
                p="0px 10px 0px 10px"
                w={{ base: "45px", sm: "50px", md: "80px" }}
                src={image3}
              />
              <Text fontSize={{ base: "12px", sm: "14px", md: "16px" }}>
                Drugs & Pharma
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 10px 0px 22px",
                xl: "0px 20px 0px 45px",
              }}
            >
              <Box>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Common Disease <br /> Medicines
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Tablets
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Medicines
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Syrup
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Injectables
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Capsules
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Cough Syrup
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ointments
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Skin Ointment
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Injectable Products
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Eye Drops
                  </MenuItem>
                </Link>
              </Box>
              <Box>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ayurvedic,Herbal Products
                    <br /> & Medicine
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Herbal Syrups
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ayurvedic Medicines
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ayurvedic Tablets
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ayurvedic Medicine
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Herb Capsule
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Herbal Capsules
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Areca Nut
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Betel Nuts
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Herbal Tablets
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Ayurvedic Churna
                  </MenuItem>
                </Link>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Nutraceuticals & <br />
                    Dietary Supplements
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Nutritional Supplements
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Weight Gain Nutrition
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Protein Powder
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Tablet
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Syrup
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Capsules
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Dexorange Syrup
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Coenzyme Q10
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Calcium Tablet
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Whey Protein
                  </MenuItem>
                </Link>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Anti Infective
                    <br />
                    Drugs & Medicines
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Hydroxychloroquine Sulphate
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Chloroquine Phosphate
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Antifungal Cream
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Azithromycin Tablets
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Tenofovir Tablet
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Anti HIV Drugs
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Antiretroviral Drug
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Itraconazole Medicine
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Anti Infective Agent
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Cefixime
                  </MenuItem>
                </Link>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Cardiovascular
                    <br />
                    Drugs & Medication
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Erythropoietin Injection
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Insulin Pen
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Metformin Tablets
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Antidiabetic Medicine
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Enoxaparin Injection
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Darbepoetin Alfa Injection
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Mephentermine Sulphate Injection
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Metformin Hydrochloride
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Alpha Ketoanalogue Tablet
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Lantus
                  </MenuItem>
                </Link>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pain Relief Drugs
                    <br />& Pharmaceuticals
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pain Killers
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Paracetamol Tablets
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pain Reliever
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Aceclofenac Tablets
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Joint Pain Relief Capsule
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pain Relief Drug
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Iodex Pain Reliever Gel
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Paracetamol Syrup
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Etoricoxib Tablet
                  </MenuItem>
                </Link>
                <Link to="/Medicines">
                  <MenuItem
                    fontStyle="Arial,Helvetica,sans-serif"
                    fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                    p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                  >
                    Pain Reliever Gel
                  </MenuItem>
                </Link>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <Image
                p="0px 10px 0px 10px"
                w={{ base: "45px", sm: "50px", md: "80px" }}
                src={image4}
              />
              <Text fontSize={{ base: "12px", sm: "14px", md: "16px" }}>
                Industrial Machinery
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 10px 0px 22px",
                xl: "0px 20px 0px 45px",
              }}
            >
              <Box>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Common Disease <br /> Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Injectables
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cough Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ointments
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Skin Ointment
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Injectable Products
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Eye Drops
                </MenuItem>
              </Box>
              <Box>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic,Herbal Products
                  <br /> & Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Syrups
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herb Capsule
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Areca Nut
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Betel Nuts
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Churna
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Nutraceuticals & <br />
                  Dietary Supplements
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Nutritional Supplements
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Weight Gain Nutrition
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Protein Powder
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Dexorange Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Coenzyme Q10
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Calcium Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Whey Protein
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti Infective
                  <br />
                  Drugs & Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Hydroxychloroquine Sulphate
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Chloroquine Phosphate
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antifungal Cream
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Azithromycin Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tenofovir Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti HIV Drugs
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antiretroviral Drug
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Itraconazole Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti Infective Agent
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cefixime
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cardiovascular
                  <br />
                  Drugs & Medication
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Erythropoietin Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Insulin Pen
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Metformin Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antidiabetic Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Enoxaparin Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Darbepoetin Alfa Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Mephentermine Sulphate Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Metformin Hydrochloride
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Alpha Ketoanalogue Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Lantus
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Relief Drugs
                  <br />& Pharmaceuticals
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Killers
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Paracetamol Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Reliever
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Aceclofenac Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Joint Pain Relief Capsule
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Relief Drug
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Iodex Pain Reliever Gel
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Paracetamol Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Etoricoxib Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Reliever Gel
                </MenuItem>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <Image
                p="0px 10px 0px 10px"
                w={{ base: "45px", sm: "50px", md: "80px" }}
                src={image5}
              />
              <Text fontSize={{ base: "12px", sm: "14px", md: "16px" }}>
                Industrial Supplies
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 10px 0px 22px",
                xl: "0px 20px 0px 45px",
              }}
            >
              <Box>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Common Disease <br /> Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Injectables
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cough Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ointments
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Skin Ointment
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Injectable Products
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Eye Drops
                </MenuItem>
              </Box>
              <Box>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic,Herbal Products
                  <br /> & Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Syrups
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herb Capsule
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Areca Nut
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Betel Nuts
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Churna
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Nutraceuticals & <br />
                  Dietary Supplements
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Nutritional Supplements
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Weight Gain Nutrition
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Protein Powder
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Dexorange Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Coenzyme Q10
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Calcium Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Whey Protein
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti Infective
                  <br />
                  Drugs & Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Hydroxychloroquine Sulphate
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Chloroquine Phosphate
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antifungal Cream
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Azithromycin Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tenofovir Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti HIV Drugs
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antiretroviral Drug
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Itraconazole Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti Infective Agent
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cefixime
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cardiovascular
                  <br />
                  Drugs & Medication
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Erythropoietin Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Insulin Pen
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Metformin Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antidiabetic Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Enoxaparin Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Darbepoetin Alfa Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Mephentermine Sulphate Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Metformin Hydrochloride
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Alpha Ketoanalogue Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Lantus
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Relief Drugs
                  <br />& Pharmaceuticals
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Killers
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Paracetamol Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Reliever
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Aceclofenac Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Joint Pain Relief Capsule
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Relief Drug
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Iodex Pain Reliever Gel
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Paracetamol Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Etoricoxib Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Reliever Gel
                </MenuItem>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="130px"
            >
              <Image
                p="0px 10px 0px 10px"
                w={{ base: "45px", sm: "50px", md: "80px" }}
                src={image6}
              />
              <Text fontSize={{ base: "12px", sm: "14px", md: "16px" }}>
                Food & Agriculture
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(5, 1fr)",
                xl: "repeat(6, 1fr)",
              }}
              p={{
                base: "0px",
                lg: "0px 10px 0px 22px",
                xl: "0px 20px 0px 45px",
              }}
            >
              <Box>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Common Disease <br /> Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Injectables
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cough Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ointments
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Skin Ointment
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Injectable Products
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Eye Drops
                </MenuItem>
              </Box>
              <Box>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic,Herbal Products
                  <br /> & Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Syrups
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herb Capsule
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Areca Nut
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Betel Nuts
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Herbal Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Ayurvedic Churna
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Nutraceuticals & <br />
                  Dietary Supplements
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Nutritional Supplements
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Weight Gain Nutrition
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Protein Powder
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Capsules
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Dexorange Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Coenzyme Q10
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Calcium Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Whey Protein
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti Infective
                  <br />
                  Drugs & Medicines
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Hydroxychloroquine Sulphate
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Chloroquine Phosphate
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antifungal Cream
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Azithromycin Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Tenofovir Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti HIV Drugs
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antiretroviral Drug
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Itraconazole Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Anti Infective Agent
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cefixime
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Cardiovascular
                  <br />
                  Drugs & Medication
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Erythropoietin Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Insulin Pen
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Metformin Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Antidiabetic Medicine
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Enoxaparin Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Darbepoetin Alfa Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Mephentermine Sulphate Injection
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Metformin Hydrochloride
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Alpha Ketoanalogue Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Lantus
                </MenuItem>
              </Box>
              <Box display={{ base: "none", md: "grid" }}>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontWeight="700"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Relief Drugs
                  <br />& Pharmaceuticals
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Killers
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Paracetamol Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Reliever
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Aceclofenac Tablets
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Joint Pain Relief Capsule
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Relief Drug
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Iodex Pain Reliever Gel
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Paracetamol Syrup
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Etoricoxib Tablet
                </MenuItem>
                <MenuItem
                  fontStyle="Arial,Helvetica,sans-serif"
                  fontSize={{ base: "9px", sm: "10px", md: "12px" }}
                  p={{ base: "3px 0px 3px 5px", md: "4px 0px 4px 10px" }}
                >
                  Pain Reliever Gel
                </MenuItem>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
      </Grid>
    </Box>
  );
};

export default MegaMenu;
