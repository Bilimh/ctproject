'use client'
import { Flex, Text,  Spacer } from "@chakra-ui/react"
import './info.css'
import { PhoneIcon } from '@chakra-ui/icons'
import { FaInstagram, FaTwitter, FaFacebook, FaMapMarker} from 'react-icons/fa';

const Info = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' className="info">
            <Flex gap='25' ml='1rem' alignItems='center'>
                <Text> <FaInstagram size={25} /></Text>
                <Text><FaTwitter size={25} /></Text>
                <Text><FaFacebook size={25} /></Text>
                <Text> <PhoneIcon boxSize={16} /> 01.68.32.58.16</Text>
            </Flex>
           < Spacer />
           <Flex gap='10' mr='1rem' alignItems='center'>
            <Text> <FaMapMarker size={16} /> 31 Rue Jonh Doe 94200, Ivry-Sur-Seine</Text>
            </Flex>
        </Flex>
    )
}

export default Info