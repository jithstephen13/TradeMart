import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Image,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { ADD_Cart_item } from "../redux/Carts/Cart.action";
const data = {
  id: "sp47",
  img_src: "https://m.media-amazon.com/images/I/614umzFKhOL._AC_UL320_.jpg",
  name: "UTL Solar 200 Watt 12 Volt Mono PERC Solar Panel 200W-12V (Pack of 2)",
  desc: "consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus   rhoncus pulvinar aliquam. Ut aliquet tristique",
  company: "Luminous ",
  rating: "4.1 out of 5 stars",
  price: "₹19,499",
  delear_name: "Cillian_Murphy",
};


  // ============================ Single page Pop up to senting Detaile to Delere throgh Mail ========================


const ProductPop = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [cred, setCred] = useState(data);
  const handlechenge = (e) => {
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const form = useRef();
  const dispatch = useDispatch();

  const sendEmail = (e) => {
    e.preventDefault();

    dispatch(ADD_Cart_item(cred));
    emailjs
      .sendForm(
        "service_hakjw5z",
        "template_p2zhnas",
        form.current,
        "pc7y9Dv2GAuWDsXZH"
      )
      .then(
        (result) => {
         
          onClose();
        },
        (error) => {
         
        }
      );

    form.current.reset();
  };

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
        }}
      >
        Use Overlay one
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton align={"center"} />
          <DrawerHeader> </DrawerHeader>
          <DrawerBody>
            <Flex gap={4}>
              <Box
                w={"50%"}
                pt={6}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                padding={6}
              >
                <Image src={data.img_src} />
                <Text>
                  <span style={{ fontWeight: "bold" }}> Name :-</span>{" "}
                  {data.name}
                </Text>
                <Text>
                  <span style={{ fontWeight: "bold" }}> Price :-</span>{" "}
                  {data.price}
                </Text>
                <Text>
                  <span style={{ fontWeight: "bold" }}>Rating :-</span>{" "}
                  {data.rating}
                </Text>
                <Text>
                  <span style={{ fontWeight: "bold" }}> Discount :-</span>{" "}
                  {data.discount}
                </Text>
              </Box>
              <Box w={"50%"}>
                <form
                  ref={form}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    border: "1px solid black",
                    padding: "15px",
                  }}
                >
                  <label>Name</label>
                  <input
                    type="text"
                    style={{ border: "1px solid black" }}
                    placeholder="enter name"
                    name="user_name"
                    onChange={handlechenge}
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    style={{ border: "1px solid black" }}
                    placeholder="email ..."
                    name="user_email"
                    onChange={handlechenge}
                  />
                  <label>Quantity</label>
                  <input
                    type="text"
                    style={{ border: "1px solid black" }}
                    placeholder="quantity"
                    name="qty"
                    onChange={handlechenge}
                  />
                  <label>Product Name</label>
                  <select
                    name="product name"
                    style={{ border: "1px solid black" }}
                  >
                    <option>selectname</option>
                    <option value={data.name}>{data.name}</option>
                  </select>

                
                  <label>Price</label>

                  <select name="price" style={{ border: "1px solid black" }}>
                    <option>select price</option>
                    <option value={data.price}>{data.price}</option>
                  </select>
                  <label> Message</label>
                  <input
                    type="text"
                    name="message"
                    style={{ border: "1px solid black", padding: "32px" }}
                    placeholder="type your message......"
                  />
                  <label> </label>
                  <Button
                    pl={20}
                    pr={20}
                    bg={"rgb(6,128,128)"}
                    onClick={sendEmail}
                  >
                    {" "}
                    Sent
                  </Button>
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
  );
};

export default ProductPop;
