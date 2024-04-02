//import React from 'react'

import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons"
import { FaMapMarker } from 'react-icons/fa';
import './infoPratique.css'
import { Link } from "react-router-dom";
const InfoPratique = () => {
    return (
        <Flex direction={'column'} 
        pb={'23'}
            bg='#FFF7ED' alignItems={'center'} justifyContent={'center'}>
            <Heading 
                as="h2" color={'#582D1D'} 
                className="titre" textAlign='center' > Informations Pratiques</Heading>
            <Grid templateColumns='repeat(3, 1fr)' gap={23} className="serviceItem" width={'90%'}>
                <Flex direction={'column'} bg={'white'} p={'1rem'} className="border">
                    <Box fontSize={'7rem'} textAlign={'center'}>
                        <TimeIcon />
                    </Box>
                    <Text >
                        <div className="titre_coiffure textTransform">Horaires</div>
                        <Text m={'0'} display={'flex'} justifyContent={'space-around'}>
                            <Text> Du <strong>Lundi</strong> au <strong>Vendredi</strong></Text>
                            <Text>9h - 12h</Text>
                        </Text>
                        <span className="hr"></span>
                        <Text m={'0'} display={'flex'} justifyContent={'space-around'}>
                            <Text> <strong>Après Midi</strong></Text>
                            <Text>13h30 - 17h</Text>
                        </Text>
                    </Text>
                </Flex>
                <Flex direction={'column'} bg={'white'} p={'1rem'} className="border">
                    <Box fontSize={'7rem'} textAlign={'center'}>
                        <FaMapMarker size={'6rem'} />
                    </Box>
                    <Text>
                        <div className="titre_coiffure textTransform">Adresse</div>
                        <Text mt={'10'}>
                            <p>Aluna Beauty Salon</p>
                            <Text>
                                <Text>Brest Place de Siam</Text>
                                <Text mt={'-20'}> 29200, Brest</Text>
                            </Text>
                        </Text>
                    </Text>
                    <Box display='flex' justifyContent={'center'}>
                        <Button  
                            borderRadius='' 
                            bg='#FFEFD6'
                            color='#582D1D' 
                            px={4} h={32} 
                            width={'75%'} 
                            mt='13'
                            variant='outline'
                            fontSize={'1.2rem'}
                            border={'2px solid #582D1D'}
                            >
                            <Link className='link_contact' to='/contact'> Contact</Link>
                        </Button>
                        </Box>
                </Flex>
                <Flex direction={'column'} bg={'white'} p={'1rem'} className="border">
                    <Box fontSize={'7rem'} textAlign={'center'}>
                        <InfoOutlineIcon />
                    </Box>
                    <Text>
                        <div className="titre_coiffure textTransform">à savoir</div>
                        <Text mt={'10'}>
                            Notre salon est idéalement situé dans le quartier Liberté .
                        </Text>
                        <Text m={'-20'} display={'flex'} justifyContent={'space-around'}>
                            <Text>Bus 1: </Text>
                            <Text>Liberté Morvan</Text>
                        </Text>
                        <Text m={'-20'} display={'flex'} justifyContent={'space-around'}>
                            <Text>Tramway: </Text>
                            <Text>Siam</Text>
                        </Text>
                    </Text>
                </Flex>
            </Grid>
        </Flex>

    )
}

export default InfoPratique