import React, { useEffect } from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  TableContainer,
  Th,
  Tr,
  Td,
  Tbody,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Input,
  VStack,
} from "@chakra-ui/react";
import {
  Get_projector_item,
  UPDATE_projector_item,
  REMOVE_projector_item,
} from "../../../redux/projector/projector.action";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
                        //  Admin page Projector componets
 
                    
const Projectors = () => {
  const [id, SetId] = React.useState("");
  const [price, SetPrice] = React.useState("");
  const { projector  } = useSelector((state) => state.projector);
 
  
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(Get_projector_item("",[]));
    
  }, [dispatch]);
  const newprom = async () => {
    setTimeout(() => {
      dispatch(Get_projector_item("",[]));
    }, 2000);
  };

        //  update functionality

  function handleUpdate() {
    const changes = {
      price: price,
    };
    dispatch(UPDATE_projector_item(id, changes));
    dispatch(Get_projector_item("",[]))
    newprom();
    onClose();
  }

  // ---------------------delete function  ----------

  function handleRemove(id) {
    dispatch(REMOVE_projector_item(id));
    dispatch(Get_projector_item("",[]))
    newprom();
  }
  return (
    <div>
      <Box w="100%" h="auto" mt={10} bgColor="#f7f7f7 ">
        <Box>
          <Text textStyle="DashboardHead">PROJECTORS</Text>
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>ORDER ID</Th>
                  <Th>NAME</Th>
                  <Th>PRICE</Th>
                  <Th>IMAGE</Th>
                  <Th>UPDATE</Th>
                  <Th>REMOVE</Th>
                </Tr>
              </Thead>
              <Tbody>

                      {/* Product mapping */}
                {projector.projector&&projector.projector.map((el) => (
                  <Tr key={el._id}>
                    <Td>{el.id}</Td>
                    <Td>{el.name}</Td>
                    <Td>₹{el.price}</Td>
                    <Td>
                      <Image src={el.img_src} alt={el.id} />
                    </Td>
                    <Td>
                      <Button onClick={()=>{onOpen()
                      SetId(el._id)
                      }}>Update</Button>
                    </Td>
                    <Td onClick={() => handleRemove(el._id)}>
                      <RiDeleteBin5Fill />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={5}>
              
                <Input
                  placeholder="Enter New Price"
                  value={price}
                  onChange={(e) => SetPrice(e.target.value)}
                />
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                Update Product
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default Projectors;
