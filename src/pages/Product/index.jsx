import React from 'react'
import './style.css'
import {Box,Center,Text,Tabs, TabList, TabPanels, Tab, TabPanel,Input } from '@chakra-ui/react'
import {BsGrid} from 'react-icons/bs'
import {TfiViewListAlt} from 'react-icons/tfi'
import {IoLocationSharp} from 'react-icons/io5'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineAim} from 'react-icons/ai'

export default function Product() {
  return (
   <Box className='product'>
      <Box className='product__heading'>
        <Box>
        <Text className='product__heading__text'>
              Plywoods
        </Text></Box>
        <Box className='product__heading__view'>
           <Box><Text className='gray'>View by:</Text></Box> 
           <Box>
            <Text className='gray'><Center><BsGrid /></Center></Text>
            <Text className='gray' fontSize={'12px'} fontWeight='bold'>Grid</Text>
           </Box>
           <Box className='gray'><Text>|</Text></Box>
           <Box>
            <Text className='gray gray_icon'><Center><TfiViewListAlt /></Center></Text>
            <Text className='gray' fontSize={'12px'} fontWeight='bold'>Flex</Text>
           </Box>
           <Box><Text className='gray gray_icon'>||</Text></Box>
           <Box><Text className='gray'>Suppliers</Text></Box> 
        </Box>
      </Box>
      <Box className='product_nav'>
        <Box className='product_nav_location' >
            <Text><IoLocationSharp /></Text>
        </Box>
        <Box className='product_nav_ltext gray'>
            <Text>Location</Text>
        </Box>
        <Box className='product_nav_search'>
        <Text><BiSearch /></Text>
        <Input variant='unstyled'  htmlSize={4} width='auto' />
        </Box>
        <Box >
            <Text><AiOutlineAim /></Text>
            <Text>Near Me</Text>
        </Box>
      <Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
</Tabs>
      </Box>
   </Box>
  )
}
