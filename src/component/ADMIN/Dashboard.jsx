import { Box, Flex, Text,TableContainer,Table,Td,TableCaption,Thead,Tr,Tfoot,Th,Tbody } from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
            <Text textStyle="DashboardHead">Dashboard</Text>

            <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
            <Text color={"red"}>Dashboard</Text>
            </Box>

            <Box  w="100%"  mt={6} p={3}>
               <Flex justifyContent="space-around">
                <Box w="20%" h="100px" bgColor="#9181d9" borderRadius="10px">
                    <Text p={3} textStyle="DashboardBoxes">ORDER PENDING</Text>
                </Box>
                <Box w="20%" h="100px" bgColor="#ff2941" borderRadius="10px">
                    <Text p={3} textStyle="DashboardBoxes">ORDER CANCEL</Text>
                </Box>
                <Box w="20%" h="100px" bgColor="#2bbbe3" borderRadius="10px">
                    <Text p={3} textStyle="DashboardBoxes">ORDER PROCESS</Text>
                </Box>
                <Box w="20%" h="100px" bgColor="#59d243" borderRadius="10px">
                    <Text p={3} textStyle="DashboardBoxes">TODAY'S INCOME</Text>
                </Box>
               </Flex>
            </Box>

            <Box mt="60px">
            <Text textStyle="DashboardHead">Order Details</Text>
            <TableContainer>
                <Table variant='striped' colorScheme='blue'>   
                <Thead>
                <Tr>
                <Th>ORDER ID</Th>
                <Th>PAYMENT METHOD</Th>
                <Th>ORDER DATE</Th>
                <Th>DELIVERY DATE</Th>
                <Th>STATUS</Th>
                <Th>TOTAL</Th>
                </Tr>
                </Thead>
                <Tbody>
                   <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                    </Tr>
                 
        
                </Tbody>
    
            </Table>
            </TableContainer>
            </Box>
        </Box>
    </div>
  )
}

export default Dashboard