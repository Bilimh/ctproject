//import React from 'react'
import { Flex, Spacer, Box, Text } from "@chakra-ui/react"
import './header.css'
import { Link } from "react-router-dom"
import Info from "../../pages/Info"
import { FaShoppingBasket } from 'react-icons/fa';

interface HeaderProps {
    size: number;
} 

const Header = ({size}: HeaderProps) => {
    return (
        <>
            <Info />
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="#000" className="header">
                <Box ml='2rem'>
                    <Link to="">Élégance Capillaire</Link>
                </Box>
                <Spacer />
                <Flex gap='20' mr='2rem' alignItems='center'>
                <Text bg="#F5AE73" p='10' color={'black'}> Prendre rendez-vous</Text>
                    <Link to="/about">Salon</Link>
                    <Link to="/service">Service</Link>
                    <Link to="">Contact</Link>                    
                    <Box className="panier">
                        <Link to="/panier"> <FaShoppingBasket /><span className="panier_count">{size}</span> </Link>
                    </Box>
                </Flex>
            </Flex>

        </>
    )
}

export default Header