import React,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import { Button, Box, Flex, Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,Text, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, useDisclosure, useToast } from '@chakra-ui/react';

const ProductPop = () => {
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      
      const [cred,setCred]=useState({})
      const handlechenge=(e)=>{
        const { name, value } = e.target;
        setCred({
          ...cred,
          [name]:value
        })
      }
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState(<OverlayOne />)
      const Item={
        id: "p1",
        img_src : "https://m.media-amazon.com/images/I/61bAqLX2lRL._AC_UY218_.jpg",
        name: "ZEBRONICS Zeb-PIXAPLAY 15 Android Smart LED Projector with WiFi/BT v5.1, FHD 1080p, Apps, Miracast DLNA/Airplay Support, 3400 Lumen, 30000H lifespan, HDMI, 2X USB Speaker and Remote Control",
        rating: "3.9 out of 5 stars",
        price: "₹14,449",
        original: "₹42,999",
        discount: "Save ₹28,550 (66%)",
        delear_name:"christopher nolan",
        service_id:"service_hakjw5z",
        template_id:"template_p2zhnas",
        key_ref:"pc7y9Dv2GAuWDsXZH"

        }

        const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(cred)
    emailjs.sendForm('service_hakjw5z', 'template_p2zhnas', form.current, 'pc7y9Dv2GAuWDsXZH')
      .then((result) => {
          console.log(result.text);
          onClose()
      }, (error) => {
          console.log(error.text);
      });

     form.current.reset()
  };
    
      return (
        <>
          <Button
            onClick={() => {
              
              onOpen()
            }}
          >
            Use Overlay one
          </Button>
           
          <Drawer  onClose={onClose} isOpen={isOpen} size={'lg'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  align={"center"}/>
          <DrawerHeader> </DrawerHeader>
          <DrawerBody>
                 <Flex gap={4}>
                     <Box w={"50%"}  pt={6}>
                        <Image  src={Item.img_src}/>
                         <Text>Name :- {Item.name}</Text>
                         <Text>Price :- {Item.price}</Text>
                         <Text>Rating :- {Item.rating}</Text>
                         <Text>Discount :- {Item.discount}</Text>
                     </Box>
                     <Box  w={"50%"}>
                     <form  ref={form} style={{display:"flex", flexDirection:"column" , gap:"10px", border:"1px solid black", padding:"15px"}} >
      <label>Name</label>
      <input type='text'  style={{border:"1px solid black"}} placeholder='enter name' name='user_name' onChange={handlechenge}   />
      <label>Email</label>
      <input type='email' style={{border:"1px solid black"}} placeholder='email ...'  name='user_email' onChange={handlechenge}  />
      <label>Quantity</label>
      <input type='text' style={{border:"1px solid black"}}  placeholder='quantity' name='qty' onChange={handlechenge}    />
      <label>Product Name</label>
      <select name='product name' style={{border:"1px solid black"}} onChange={handlechenge}>
        <option>selectname</option>
        <option value={Item.name}>{Item.name}</option>
      </select>
      {/* <input type='text'  value={Item.name} name='product name' onChange={handlechenge}   /> */}
      <label>Price</label>
      {/* <input type='text'  value={Item.price} name='price' onChange={handlechenge}    /> */}
      <select name='price' style={{border:"1px solid black"}} onChange={handlechenge}>
        <option>select price</option>
        <option value={Item.price}>{Item.price}</option>
      </select>
      <label> Message</label>
      <input type='text' name='message' style={{border:"1px solid black"}}  h={32} onChange={handlechenge} />
      <label> </label>
      <Button pl={20} pr={20}  bg="blue" onClick={sendEmail}    > Sent</Button>
      
    
        
       
      
    </form>
                     </Box>
                 </Flex>
               
                 </DrawerBody>
                   <Text margin={"auto"} fontWeight={"bold"}> 

           Deler will contacte you with in 3 days
            </Text>
        </DrawerContent>
      </Drawer>
        </>
      )
};

export default ProductPop;