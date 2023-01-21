import React from 'react'
import {Box, Button, Image,Text} from '@chakra-ui/react'
import './Detail.css'

export default function Detail() {
  return (
    <Box className='detail'>
     <Box className='detail_imgCon'>
     <Box className='detail_imgCon_img'>
        <Image className='detail_imgCon_img_i' src='https://5.imimg.com/data5/SELLER/Default/2022/9/GG/MP/XX/2183227/garcinia-cambogia-capsule-250x250.png' alt='error' />
     </Box>
     <Box className='detail_imgCon_detail'>
        <Box className='detail_imgCon_detail_heading'>
            <Text>Tablets Garcinia Cambogia Capsule, For Clinical, Packaging Size: 30 Cap</Text></Box>
        <Box className='detail_imgCon_detail_price'>
            <Box className='detail_imgCon_detail_price_text'>
                <Text fontSize={'20px'} fontWeight='bold'>₹ 299/</Text>
                <Text className='gray'>Bottle</Text>
                </Box>
            <Box className='detail_imgCon_detail_price_button'>
                <Button>Get Latest Price</Button></Box>
        </Box>
        <Box></Box>
     </Box>

     </Box>


     <Box></Box>
    </Box>
  )
}
