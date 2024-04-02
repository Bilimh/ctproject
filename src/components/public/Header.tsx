//header.tsx

import { Flex, Spacer, Box, Text } from "@chakra-ui/react"
import './header.css'
import { Link } from "react-router-dom"
import Info from "../../pages/Info"
import { FaShoppingBasket } from 'react-icons/fa';
import './panier.css'
interface HeaderProps {
    size: number;
    showPanier: boolean;
    setShowPanier: (showPanier: boolean) => void;
} 
const Header = ({ size, showPanier, setShowPanier }: HeaderProps) => {
    const togglePanier = () => {
        setShowPanier(!showPanier);
    };

    return (
        <>
            <Info />
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="#000" className="header">
                <Box ml='2rem'>
                    <Link to="">Aluna Beauty Salon</Link>
                </Box>
                <Spacer />
                <Flex gap='20' mr='2rem' alignItems='center'>
                <Text bg="#F5AE73" p='10' color={'black'}> <Link className="accueil_reservation" to ="/reservation">Prendre rendez-vous</Link></Text>
                   
                    <Link to="/contact">Contact</Link>                    
                    <Box className="panier" onClick={togglePanier}>
                    {/*<Link to="/panier">*/} <FaShoppingBasket /><span className="panier_count">{size}</span> {/*</Link>*/}
                    </Box>
                </Flex>
            </Flex>

        </>
    )
}

export default Header