//import React from 'react'
import './stylist.css'
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react"
import { listeCoiffeurs } from '../../constant/Description'

const Stylist = () => {
   return (
      <Flex mb={'23'} direction={'column'} alignItems={'center'}>
         <Heading as={'h1'} color={'white'} className='titre_coiffeur' mb={'13'}>
            Vos Coiffeurs/Stylistes
         </Heading>
         <Box color={'#F5AE73'} width={'60%'} mb='23' className='styleItem'>
            Nos coiffeurs sont bien plus que de simples stylistes capillaires. Ce sont des artistes dévoués qui transforment chaque rendez-vous en une expérience de beauté unique.
         </Box>
         <Grid templateColumns='repeat(3, 1fr)'
            gap={23}
            width={'98%'}>
            {
               listeCoiffeurs.map((coiffeur, index) => (
                  <Box className='card' height={'430px'} key={index}>
                     <Box className='card-img' height={'100%'} width={'100%'}>
                        <Image src={coiffeur.img} alt="" />
                     </Box>
                     <Box className='card-box box-1 top-left' color={'#fff'}>
                        <Text  className='titre_coiffeur' color={'#fff'}>
                           {coiffeur.nom}
                        </Text>
                     </Box>
                     <Box className='card-box box-4 bottom-right' color={'#fff'}>
                        <Text> {coiffeur.description}</Text>
                     </Box>
                  </Box>
               ))
            }


         </Grid>
      </Flex>
   )
}

export default Stylist