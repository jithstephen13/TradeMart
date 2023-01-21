
import React from 'react'
import {Navigation,EffectFade} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'
import { Image,Box,Text } from '@chakra-ui/react'

export default function Craousel({img}) {
  console.log(img)
  return (
    <div>
      <Swiper 
      modules={[Navigation,EffectFade]}
      spaceBetween={5}
      slidesPerView={7}
      onSlideChange={()=>console.log('slide change')}
      onSwiper ={swiper => console.log(swiper)}
      navigation
      effect

      >
        {
          img.map((el,i) =>(
            <SwiperSlide key={i}>
            <Box boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' h={'100%'} textAlign='center'>
              <Image src={el.img_src}  />
              <Text fontWeight={'bold'} >{el.desc}</Text>
            </Box>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}


