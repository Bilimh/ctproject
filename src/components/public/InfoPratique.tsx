//import React from 'react'

import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import { TimeIcon, InfoOutlineIcon } from "@chakra-ui/icons"
import { FaMapMarker } from 'react-icons/fa';
import './infoPratique.css'
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
                            <Text> Du <strong>Lundi</strong> au <strong>Samedi</strong></Text>
                            <Text>10h-21h30</Text>
                        </Text>
                        <span className="hr"></span>
                        <Text m={'0'} display={'flex'} justifyContent={'space-around'}>
                            <Text> Le <strong>Dimanche</strong></Text>
                            <Text>11h-20h30</Text>
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
                            <p>Élégance Capillaire</p>
                            <Text>
                                <Text>31 Rue John Doe</Text>
                                <Text mt={'-20'}>94200, Ivry-Sur-Seine</Text>
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
                            Contact
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
                            Notre salon est idéalement situé au cœur du quartier Petit Ivry.
                        </Text>
                        <Text m={'-20'} display={'flex'} justifyContent={'space-around'}>
                            <Text>Métro 7: </Text>
                            <Text>Pierre et Marie Curie</Text>
                        </Text>
                        <Text m={'-20'} display={'flex'} justifyContent={'space-around'}>
                            <Text>Tram T9: </Text>
                            <Text>Cimitière Parisien</Text>
                        </Text>
                    </Text>
                </Flex>
            </Grid>
        </Flex>

    )
}

export default InfoPratique