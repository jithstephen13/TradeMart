import React from 'react'
import {Box, Flex, Text,Image} from "@chakra-ui/react"
import { BellIcon ,DragHandleIcon} from '@chakra-ui/icons'
import logo from "../../assets/logo.png"
import Styles from "./Admin.module.css"
import { getItem } from '../../utility/localStorage'


const Navbar = () => {
    let addmin=getItem("admin")
  return (
    <div className={Styles.Navbar} >
        <Box w="100%" h="50px" bgColor="#2e3192">
            <Flex justifyContent="space-between">
                <Box w="20%" p={3}>
                    <Image w="50%" ml={6} src={logo} alt=""/>
                </Box>
                <Box w="20%" p={3}>
                    <Flex justifyContent="space-around">
                    <Text><BellIcon color={"white"} boxSize={6}/> </Text>
                    <Text><DragHandleIcon color={"white"} boxSize={6} /></Text>
                    <Text textStyle="AdminNav">Hii,swati</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar