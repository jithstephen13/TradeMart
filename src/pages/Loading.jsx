import { Box, Flex, Grid, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
    return (
        <Flex>
             <Box w={"20%"} padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
   
    
  <Skeleton height='50px'  mb={"10px"} margin="auto"/>
  
  <Skeleton height='20px'  mb={"10px"}/>
  <Skeleton height='50px'  mb={"10px"} margin="auto"/>


  <Skeleton height='20px' mt={"50px"} mb={"10px"}/>
  <Skeleton height='20px' mt={"50px "}  mb={"10px"}/>
  <Skeleton height='20px' mt={"50px"} mb={"10px"}/>
  <Skeleton height='20px' mt={"50px "}  mb={"10px"}/>
  <Skeleton height='20px' mb={"10px"}/>
  <Skeleton height='20px'  mb={"10px"}/>
</Box>
               
            
        <Grid mt={"30px"} marginLeft={"40px"} paddingLeft={"15px"} width={"80%"} templateColumns='repeat(3, 1fr)' gap={6}>
      
        <Box height={"auto"} >
               
               <Skeleton height='250px ' mb={"10px"}/>
               
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
    
              <Skeleton height='50px'  w={"50%"} mb={"10px"} margin="auto"/>
              <Skeleton height='20px' mt={"10px"}   mb={"10px"}/>
    
           
              </Box>
             

              <Box height={"auto"} >
               
               <Skeleton height='250px ' mb={"10px"}/>
               
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
    
              <Skeleton height='50px'  w={"50%"} mb={"10px"} margin="auto"/>
              <Skeleton height='20px' mt={"10px"}  mb={"10px"}/>
    
           
              </Box>

              <Box height={"auto"} >
               
               <Skeleton height='250px ' mb={"10px"}/>
               
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
    
              <Skeleton height='50px'  w={"50%"} mb={"10px"} margin="auto"/>
              <Skeleton height='20px' mt={"10px"}  mb={"10px"}/>
    
           
              </Box>

              <Box height={"auto"} >
               
               <Skeleton height='250px ' mb={"10px"}/>
               
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
    
              <Skeleton height='50px'  w={"50%"} mb={"10px"} margin="auto"/>
              <Skeleton height='20px' mt={"10px"}   mb={"10px"}/>
    
           
              </Box>
              <Box height={"auto"} >
               
               <Skeleton height='250px ' mb={"10px"}/>
               
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
    
              <Skeleton height='50px'  w={"50%"} mb={"10px"} margin="auto"/>
              <Skeleton height='20px' mt={"10px"}   mb={"10px"}/>
    
           
              </Box>

              <Box height={"auto"} >
               
               <Skeleton height='250px ' mb={"10px"}/>
               
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
              <Skeleton height='20px'  mb={"10px"}/>
    
              <Skeleton height='50px'  w={"50%"} mb={"10px"} margin="auto"/>
              <Skeleton height='20px' mt={"10px"}  mb={"10px"}/>
    
           
              </Box>

      
        </Grid>
        </Flex>
    );
};

export default Loading;