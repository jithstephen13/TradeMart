import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_medicines_item,
  Get_medicines_item,
} from "../../redux/medicines/medicines.action";
import {
  ADD_projector_item,
  Get_projector_item,
} from "../../redux/projector/projector.action";
import {
  ADD_solarpanel_item,
  Get_solarpanel_item,
} from "../../redux/solarpanel/solarpanel.action";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Solarpanel from "./ShopPages/Solarpanel";
import Medicines from "./ShopPages/Medicines";
import Projectors from "./ShopPages/Projectors";

const Shops = () => {
  const [category, SetCategory] = React.useState("");
  const [dealer, SetDealer] = React.useState("");
  const [id, Setid] = React.useState("");
  const [name, SetName] = React.useState("");
  const [image, SetImage] = React.useState("");
  const [price, SetPrice] = React.useState("");
  const [company, SetCompany] = React.useState("");

  const [med, setMed] = React.useState(true);
  const [proj, SetProj] = React.useState(false);
  const [solar, setSolar] = React.useState(false);

  function handleMed() {
    setMed(true);
    setSolar(false);
    SetProj(false);
  }

  function handleProj() {
    setMed(false);
    setSolar(false);
    SetProj(true);
  }
  function handleSolar() {
    setMed(false);
    setSolar(true);
    SetProj(false);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Get_medicines_item("asc",[]));
    dispatch(Get_projector_item("asc",[]));
    dispatch(Get_solarpanel_item("asc",[]));
  }, [dispatch]);

  const newprom = async () => {
    setTimeout(() => {
      dispatch(Get_medicines_item("",[]));
    }, 2000);
  };
  const newpromProj = async () => {
    setTimeout(() => {
      dispatch(Get_projector_item("",[]));
    }, 2000);
  };
  const newpromSolarPanel = async () => {
    setTimeout(() => {
      dispatch(Get_solarpanel_item("",[]));
    }, 2000);
  };

  function handlePost() {
    const ProductObj = {
      category: category,
      delear_name: dealer,
      id: id,
      name: name,
      img_src: image,
      price: price,
      company: company,
    };
    if (ProductObj.category === "medicines") {
      onClose();
      dispatch(ADD_medicines_item(ProductObj));
      dispatch(Get_medicines_item("",[]))
      newprom();
    } else if (ProductObj.category === "projectors") {
      onClose();
      dispatch(ADD_projector_item(ProductObj));
      dispatch(Get_projector_item("",[]))
      newpromProj();
    } else if (ProductObj.category === "solarpanel") {
      onClose();
      dispatch(ADD_solarpanel_item(ProductObj));
      dispatch(Get_solarpanel_item("",[]))
      newpromSolarPanel();
    }
  }

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="auto" p={10} bgColor="#f7f7f7 ">
        <Text textStyle="DashboardHead">PRODUCTS</Text>

        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Flex justifyContent="space-between">
            <Text color={"red"}>
              The data is directly being fetched by the database. Perform
              cautiously.
            </Text>
            <Button
              onClick={onOpen}
              bgColor="#19a598"
              color="white"
              _hover={{ backgroundColor: "#2e3192" }}
            >
              + Add PRODUCT
            </Button>
          </Flex>
        </Box>

        {/* modal to add products */}
        <Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>ADD PRODUCTS</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack spacing={5}>
                  <Select
                    placeholder="Select Category"
                    onChange={(e) => SetCategory(e.target.value)}
                  >
                    <option value="medicines">medicines</option>
                    <option value="projectors">projectors</option>
                    <option value="solarpanel">solarpanel</option>
                  </Select>
                  <Select
                    placeholder="Select Dealer Name"
                    onChange={(e) => SetDealer(e.target.value)}
                  >
                    <option value="christopher_nolan">christopher_nolan</option>
                    <option value="Emma_Thomas">Emma_Thomas</option>
                    <option value="Cillian_Murphy">Cillian_Murphy</option>
                  </Select>
                  <Input
                    placeholder="Add Id"
                    type="string"
                    value={id}
                    onChange={(e) => Setid(e.target.value)}
                  />
                  <Input
                    placeholder="Add Name"
                    type="string"
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                  />
                  <Input
                    placeholder="Add Image"
                    type="string"
                    value={image}
                    onChange={(e) => SetImage(e.target.value)}
                  />
                  <Input
                    placeholder="Add Price"
                    type="string"
                    value={price}
                    onChange={(e) => SetPrice(e.target.value)}
                  />
                  <Input
                    placeholder="Add Company"
                    type="string"
                    value={company}
                    onChange={(e) => SetCompany(e.target.value)}
                  />
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Button
                  bgColor="#19a598"
                  color="white"
                  _hover={{ backgroundColor: "#2e3192" }}
                  mr={3}
                  onClick={handlePost}
                >
                  Add PRODUCT
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>

        {/* filter part */}
        <Box mt="20px">
          <Menu>
            <MenuButton
              as={Button}
              bgColor="#19a598"
              color="white"
              _hover={{ backgroundColor: "#2e3192" }}
              rightIcon={<ChevronDownIcon />}
            >
              FILTER
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleMed}>MEDICINES</MenuItem>
              <MenuItem onClick={handleProj}>PROJECTOR</MenuItem>
              <MenuItem onClick={handleSolar}>SOLAR PANEL</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box>
          {med && <Medicines />}
          {proj && <Projectors />}
          {solar && <Solarpanel />}
        </Box>
      </Box>
    </div>
  );
};

export default Shops;
