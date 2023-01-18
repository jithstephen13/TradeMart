import { Box, Flex, Text } from '@chakra-ui/react'
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
        </Box>
    </div>
  )
}

export default Dashboard