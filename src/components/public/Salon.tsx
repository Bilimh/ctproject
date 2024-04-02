import { Box, Flex, Heading, Image, Text, Grid } from "@chakra-ui/react"

import './salon.css'
import {descriptionSalon} from '../../constant/Description'
const Salon = () => {
    return (
        <Flex
            mt={500}
            direction={'column'}
            bg='#FFEFD6'
            pl={'2rem'}
            pr={'2rem'}
            pb={'2rem'}
            className="salon"
        >
            <Heading as='h1' textAlign='center' className="titre">
                Salon
            </Heading>
            <Grid templateColumns='repeat(2, 1fr)' gap={23} className="salonItem">
             
                <Flex direction={'column'} >
                    <Box className="box">
                        <Image src="/IMG2.jpg" className="box_image" />
                    </Box>
                </Flex>
                <Flex direction={'column'} justifyContent={'center'} className="description">
                 
                    <Text className="desciption_salon">
                        {descriptionSalon[0].description}
                    </Text>
                </Flex>
                <Flex direction={'column'}>
                    <Box className="box">
                        <Image src="/IMG5.jpg" className="box_image" />
                    </Box>
                </Flex>
                <Flex direction={'column'}>
                    <Box className="box">
                        <Image src="/IMG9.jpg" className="box_image"/>
                    </Box>
                </Flex>
            </Grid>
        </Flex>
    )
}

export default Salon