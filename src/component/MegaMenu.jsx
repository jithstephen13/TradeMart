import { Box, Flex, Grid, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import image1 from "../assets/MegaMenu/mm1.png"
import image2 from "../assets/MegaMenu/mm2.png"
import image3 from "../assets/MegaMenu/mm3.png"
import image4 from "../assets/MegaMenu/mm4.png"
import image5 from "../assets/MegaMenu/mm5.png"
import image6 from "../assets/MegaMenu/mm6.png"

const MegaMenu = () => {
    return (
        <Box w={{base:"100%",lg:"95%"}} margin="auto" > 
        <Grid templateColumns={{base:"repeat(2, 1fr)", sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(6, 1fr)"}} gap="38px" >
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="130px" >
                    <Image p="0px 0px 0px 10px" w={{base:"40px", sm:"45px", md:"80px"}} src={image1} h="100%" />
                    <Text fontSize={{base:"12px",sm:"15px", md:"18px" }}>Building & Construction</Text>
                </Box>
            </MenuButton>
                <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(6, 1fr)"}} p={{base:"0px",lg:"0px 15px 0px 17px",xl:"0px 30px 0px 35px"}}  >
                    <Box>
                    <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Wood, Plywood,<br /> Veneer & Laminates</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Plywoods        </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Laminate Sheets </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Wood Boards     </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Wall Panels     </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Hardwood        </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Particle Board  </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >MDF Board       </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Wooden Planks   </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >WPC Board       </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Wood Veneer     </MenuItem>
                    </Box>
                    <Box >
                    <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Steel Bars, Rods, Plates<br /> & Sheets</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >TMT Bars  </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Steel Plates</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Stainless Steel Sheet </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Steel Rods</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Mild Steel Bars</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Steel Bars </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Steel Round Bars</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Stainless Steel Bars</MenuItem>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Roofing and <br />False ceiling</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Roofing Sheets     </MenuItem>                                        
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >False Ceiling      </MenuItem>                                       
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Metal Roofing Sheet</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >GI Sheets          </MenuItem>                                   
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Polycarbonate Sheet</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Roof Tiles         </MenuItem>                                    
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Ceiling Panels     </MenuItem>                                        
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Profile Sheets     </MenuItem>                                        
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Ceiling Accessories</MenuItem>                                             
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >PVC, FRP, HDPE & Other<br /> Plastic Pipes</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >PVC Pipes               </MenuItem>                              
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Plumbing Pipe           </MenuItem>                                  
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Borewell Pipes          </MenuItem>                                   
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Industrial Plastic Pipes</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >CPVC Pipe               </MenuItem>                              
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Drainage Pipe           </MenuItem>                                  
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >UPVC Water Pipes        </MenuItem>                                     
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Sanitary Pipes          </MenuItem>                                   
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Drip Irrigation Pipes   </MenuItem>                                          
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Underground HDPE Pipes  </MenuItem>                                           
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Building & <br />Construction Machines </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Ceiling Board      </MenuItem>                                       
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Roofing Sheets</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >False Ceiling</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Metal Roofing Sheet</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >GI Sheets </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Polycarbonate Sheet</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Roof Tiles </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Ceiling Panels</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Profile Sheets</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Ceiling Accessories</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Ceiling Board </MenuItem>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Building Panels &<br /> Cladding Materials </MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Boundary Walls</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Wall & Roof Panels</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Wall Partitions And Door Partitions</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Cladding Sheets & Panels</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Gypsum Board</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Building Jali, Screens & Grills</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Building & Electricity Poles</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Water Resistant Membranes</MenuItem>                                             
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Building Columns & Pillars</MenuItem>                   
                    </Box>
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="130px" >
                    <Image p="0px 0px 0px 10px" w={{base:"40px", sm:"45px", md:"80px"}} src={image2} h="100%" />
                    <Text fontSize={{base:"12px",sm:"15px", md:"18px" }}>Electronics & Electrical</Text>
                </Box>
            </MenuButton>
                <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(6, 1fr)"}} p={{base:"0px",lg:"0px 10px 0px 22px",xl:"0px 20px 0px 45px"}}  >
                    <Box>
                        <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Office Automation <br /> Products Devices</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Xerox Machines</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Billing Machines</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Projector</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Computer Printers</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Laser Printer</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Multifunction Printer</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Inkjet Printer</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Counting Machines</MenuItem>
                    </Box>
                    <Box >
                        <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Solar & Renewable<br /> Energy Products</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Solar Panels</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Solar Power Plants</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Solar Lighting</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Solar Water Heater</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Water Pumps</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Water Heater & Geyser</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Solar Inverter</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Solar Lamps</MenuItem>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                        <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Indoor Lights &<br /> Lighting Accessories</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Light Bulb</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Bulb Raw Material</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >LED Bulb</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Tube Light</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Lighting Component</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Ceiling Lights</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Lamp Holders</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Panel Light</MenuItem>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                        <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Batteries & Charge<br /> Storage Devices</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Inverter Batteries</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Lithium Battery</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Automotive Batteries</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Electric Vehicle Battery</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Battery Chargers</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Two Wheeler Battery</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Car Batteries</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Mobile Charger</MenuItem>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                        <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >LED, LCD, Smart TV<br /> and Home Theatre</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >LED TV</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Set Top Box</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Home Theatre</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Smart TV</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >DTH Kit</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >TV Accessories</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >LCD Television</MenuItem>
                        <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Satellite TV Receiver</MenuItem>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    <MenuItem fontWeight="700" fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Home Appliances & Machines</MenuItem>
                    <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Washing Machine</MenuItem>
                    <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Juicer Mixer Grinder</MenuItem>
                    <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Electric Irons</MenuItem>
                    <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Coffee Makers</MenuItem>
                    <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Electric Cooktop</MenuItem>
                    <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Microwave Oven</MenuItem>
                    <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Steam Iron</MenuItem>
                    <MenuItem fontSize={{base:"9px",sm:"10px",md:"12px"}} p={{base:"2px 0px 2px 5px", md:"2px 0px 2px 10px"}} >Mixer Grinder</MenuItem>
                    </Box>
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="130px" >
                    <Image p="0px 0px 0px 10px" w={{base:"40px", sm:"45px", md:"80px"}} src={image3} />
                    <Text fontSize={{base:"12px",sm:"15px", md:"18px" }}>Drugs & Pharma</Text>
                </Box>
            </MenuButton>
                <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(6, 1fr)"}} p={{base:"0px",lg:"0px 10px 0px 22px",xl:"0px 20px 0px 45px"}}  >
                    <Box>
                    </Box>
                    <Box >
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="130px" >
                    <Image p="0px 0px 0px 10px" w={{base:"40px", sm:"45px", md:"80px"}} src={image4} />
                    <Text fontSize={{base:"12px",sm:"15px", md:"18px" }}>Industrial Machinery</Text>
                </Box>
            </MenuButton>
                <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(6, 1fr)"}} p={{base:"0px",lg:"0px 10px 0px 22px",xl:"0px 20px 0px 45px"}}  >
                    <Box>
                    </Box>
                    <Box >
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="130px" >
                    <Image p="0px 0px 0px 10px" w={{base:"40px", sm:"45px", md:"80px"}} src={image5} />
                    <Text fontSize={{base:"12px",sm:"15px", md:"18px" }}>Industrial Supplies</Text>
                </Box>
            </MenuButton>
                <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(6, 1fr)"}} p={{base:"0px",lg:"0px 10px 0px 22px",xl:"0px 20px 0px 45px"}}  >
                    <Box>
                    </Box>
                    <Box >
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                </Grid>
            </MenuList>
        </Menu>
        <Menu>
            <MenuButton>
                <Box display="flex" justifyContent="center" alignItems="center" w="130px" >
                    <Image p="0px 0px 0px 10px" w={{base:"40px", sm:"45px", md:"80px"}} src={image6} />
                    <Text fontSize={{base:"12px",sm:"15px", md:"18px" }}>Food & Agriculture</Text>
                </Box>
            </MenuButton>
                <MenuList>
                <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(6, 1fr)"}} p={{base:"0px",lg:"0px 10px 0px 22px",xl:"0px 20px 0px 45px"}}  >
                    <Box>
                    </Box>
                    <Box >
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                    <Box display={{base:"none",md:"grid"}}>
                    </Box>
                </Grid>
            </MenuList>
        </Menu>
       
        </Grid>
    </Box>
  )
}

export default MegaMenu
