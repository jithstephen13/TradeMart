import {
  Box,
  Flex,
  Text,
  TableContainer,
  Table,
  Td,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import React from "react";
import { Get_Cart_item } from "../../redux/Carts/Cart.action";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const { Cart } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  function getCurrentDate(separator = "-") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  const addWeeksToDate = (dateObj, numberOfWeeks) => {
    dateObj.setDate(dateObj.getDate() + numberOfWeeks * 7);
    return dateObj;
  };

  React.useEffect(() => {
     dispatch(Get_Cart_item());
  }, []);




                                      // ----- Admin Dashboard with graphs and all 
                                      //  we are just jusing 3 types of graph that showing the oroduct cout 
                                      //  and we are  making product price range also -------
  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
        <Text textStyle="DashboardHead">Dashboard</Text>

        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Text color={"red"}>Dashboard</Text>
        </Box>

        <Box w="100%" mt={6} p={3}>
          <Flex justifyContent="space-around">
            <Box w="20%" h="100px" bgColor="#9181d9" borderRadius="10px">
              <Text p={3} textStyle="DashboardBoxes">
                ORDER PENDING
              </Text>
            </Box>
            <Box w="20%" h="100px" bgColor="#ff2941" borderRadius="10px">
              <Text p={3} textStyle="DashboardBoxes">
                ORDER CANCEL
              </Text>
            </Box>
            <Box w="20%" h="100px" bgColor="#2bbbe3" borderRadius="10px">
              <Text p={3} textStyle="DashboardBoxes">
                ORDER PROCESS
              </Text>
            </Box>
            <Box w="20%" h="100px" bgColor="#59d243" borderRadius="10px">
              <Text p={3} textStyle="DashboardBoxes">
                TODAY'S INCOME
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box mt="60px">
          <Text textStyle="DashboardHead">Order Details</Text>
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>ORDER ID</Th>
                  <Th>NAME</Th>
                  <Th>ORDER DATE</Th>
                  <Th>DELIVERY DATE</Th>
                  <Th>TOTAL</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Cart.map((el) => (
                  <Tr key={el._id}>
                    <Td>{el._id}</Td>
                    <Td>{el.name}</Td>
                    <Td>{el.date}</Td>
                    <Td>{addWeeksToDate(new Date(), 2).toUTCString()}</Td>
                    <Td>₹ {el.price}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
