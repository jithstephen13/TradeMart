import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import {Get_Medicine_data} from "../../redux/ADMIN/admin.action"

const Products = () => {
  const {isLoading,isError,data} = useSelector((state)=>state.admin)
  console.log(data)
  const dispatch = useDispatch();

  React.useEffect(()=>{
     dispatch(Get_Medicine_data())
  },[])

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
            <Text textStyle="DashboardHead">Products</Text>

            <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
            <Text color={"red"}>Products Charts</Text>
            </Box>
        </Box>
    </div>
  )
}

export default Products