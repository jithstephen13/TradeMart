import React from 'react'
import './style.css'
import {Box,Center,Text,Tabs, TabList, Tab, Input,Checkbox } from '@chakra-ui/react'
import {BsGrid} from 'react-icons/bs'
import {TfiViewListAlt} from 'react-icons/tfi'
import {IoLocationSharp} from 'react-icons/io5'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineAim} from 'react-icons/ai'
import axios from 'axios'
import Craousel from './Craousel'


const dataTop = [
  {url:"https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg"},
  {url:"https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg"},
  
]

export default  function Product() {

  const getserver = async() => {
   let res = await axios.get('https://trademart-data-2zur.vercel.app/medicines');
  //  let data =await res.json()
    console.log(res.data)
  }
  getserver()
  return (
   <Box className='product'>
      <Box className='product__heading'>
        <Box>
        <Text className='product__heading__text'>
              Plywoods
        </Text>
        </Box>
         <Box className='product__heading__view'>
           <Box><Text className='gray'>View by:</Text></Box> 
           <Box>
           <Center><Text className='gray gray_icon'><BsGrid /></Text></Center> 
            <Text className='gray' fontSize={'12px'} fontWeight='bold'>Grid</Text>
           </Box>
          <Box className='gray'><Text>|</Text></Box>
           <Box>
            <Center><Text className='gray gray_icon'><TfiViewListAlt /></Text></Center>
            <Text className='gray' fontSize={'12px'} fontWeight='bold'>Flex</Text>
           </Box>
           <Box><Text className='gray gray_icon'>||</Text></Box>
           <Box><Text className='gray'>Suppliers</Text></Box>
        </Box> 
      </Box>
      <Box className='product_nav'>
        <Box className='product_nav_iconPart'>
        <Box className='product_nav_location' >
            <Text><IoLocationSharp /></Text>
        </Box>
        <Box className='product_nav_ltext gray'>
            <Text>Location</Text>
        </Box>
        <Box className='product_nav_search'>
        <Text><BiSearch /></Text>
        <Input variant='unstyled'  htmlSize={4} width='auto'placeholder='Enter City' />
        </Box>
        <Box className='product_nav_nearMe gray' >
            <Center><Text color={'#9FA8DA'} fontSize={'24px'}><AiOutlineAim /></Text></Center>
            <Text>Near Me</Text> 
        </Box>
        </Box>
   <Tabs className='tab gray'>
  <TabList h={'100%'} gap='10px' >
    <Tab _selected={{color:"black", fontWeight:'bold',bg:'white',borderBottom:'1px solid black'}}>All India</Tab>
    <Tab _selected={{color:"black", fontWeight:'bold',bg:'white',borderBottom:'1px solid black'}}>Indore</Tab>
    <Tab _selected={{color:"black", fontWeight:'bold',bg:'white',borderBottom:'1px solid black'}}>Mumbai</Tab>
    <Tab _selected={{color:"black", fontWeight:'bold',bg:'white',borderBottom:'1px solid black'}}>Delhi</Tab>
    <Tab _selected={{color:"black", fontWeight:'bold',bg:'white',borderBottom:'1px solid black'}}>Ahmedabad</Tab>
    <Tab _selected={{color:"black", fontWeight:'bold',bg:'white',borderBottom:'1px solid black'}}>Jaipur</Tab>
    <Tab _selected={{color:"black", fontWeight:'bold',bg:'white',borderBottom:'1px solid black'}}>Pune</Tab>
    <Tab _selected={{color:"black", fontWeight:'bold',bg:'white',borderBottom:'1px solid black'}}>Bengaluru</Tab>
  </TabList>
         </Tabs>
        </Box>

      <Box className='product_detail'>
       <Box className='product_detail_filter'>

        <Box className='product_detail_filter_box1' >
          <Box className='product_detail_filter_box1_1'>
            <Text fontWeight={'bold'}>Filter Results</Text>           
          </Box>
          <Box className='product_detail_filter_box1_2 gray'>
          <Checkbox colorScheme='gray' defaultChecked>Video</Checkbox>
           <Checkbox colorScheme='gray' defaultChecked>Shop Now</Checkbox>
            </Box>
        </Box>
        <Box className='product_detail_filter_box2'>
           <Box className='product_detail_filter_box1_1'>
            <Text fontWeight={'bold'}>Related Category</Text>           
          </Box>
          <Box className='product_detail_filter_box1_2 gray'>
           <Text>Syrup</Text>
           <Text>Tablets</Text>
            </Box>
        </Box>

        <Box className='product_detail_filter_box2'>
           <Box className='product_detail_filter_box1_1'>
            <Text fontWeight={'bold'}>Business Type</Text>           
          </Box>
          <Box className='product_detail_filter_box1_2 gray'>
           <Text>Manufacturer</Text>
           <Text>Exporter</Text>
           <Text>Wholesaler</Text>
           <Text>Retailer</Text>
            </Box>
        </Box>
       </Box>

       <Box className='product_detail_section'>
          <Box className='product_detail_section_head'>
            <Box className='product_detail_section_head_text'><Text>Categories to explore</Text></Box>
            <Box>
              
            </Box>
          </Box>
          <Craousel />
       </Box>
      </Box>
   </Box>
  )
}

