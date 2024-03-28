import { Box, Flex, Heading, Text, Grid, Image } from "@chakra-ui/react"
import './service.css'
const Service = () => {
    return (
        <Flex className="salon" direction='column' bg='#FFF7ED' alignItems='center'>
            <Heading className="titre" textAlign='center' mb='0'>
                Service
            </Heading>
            <Box width={'55%'}>
                <Text className="textService">
                    Découvrez une expérience de coiffure complète et personnalisée chez nous. Notre équipe passionnée vous offre des services de coiffure exceptionnels pour hommes, femmes et enfants. Que vous recherchiez une coupe tendance, une coloration vibrante ou une coiffure spéciale pour votre enfant, notre salon est l'adresse incontournable.
                </Text>
            </Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={23} className="serviceItem" width={'90%'}>
                <Flex direction={'column'}>
                    <Box height={'230'}>
                        <Image src="../../IMG_9657.PNG" width={'100%'} height={'100%'} />
                    </Box>
                    <Text>
                    <span className="titre_coiffure">Coiffure Hommes</span>
                        
                        <Text mt={'10'}>
                        Tendance et précision définissent nos coupes masculines. Offrez-vous un style unique avec nos coiffeurs experts.

                        </Text>
                    </Text>
                </Flex>
                <Flex direction={'column'}>
                    <Box height={'230'}>
                        <Image src="../../IMG_9661.PNG" width={'100%'} height={'100%'} />
                    </Box>
                    <Text>
                    <span className="titre_coiffure">Coiffure Femmes</span>

                        <Text mt={'10'}>
                        Élégance et modernité s'entrelacent dans nos créations capillaires féminines. Sublimez votre beauté avec nous.
                        </Text>
                    </Text>
                </Flex>
                <Flex direction={'column'}>
                    <Box height={'230'}>
                        <Image src="../../IMG_9663.PNG" width={'100%'} height={'100%'} />
                    </Box>
                    <Text>
                        <span className="titre_coiffure">Coiffure Enfants</span>
                        <Text mt={'10'}>
                        Des coupes ludiques et douces pour nos petits clients. Faites de chaque visite une aventure capillaire joyeuse.
                        </Text>
                    </Text>
                </Flex>
                <Flex direction={'column'}>
                    <Box height={'230'}>
                        <Image src="../../IMG_9682.jpg" width={'100%'} height={'100%'} />
                    </Box>
                    <Text>
                        <span className="titre_coiffure">Service à domicile</span>
                        <Text mt={'10'}>
                            Profitez de la coiffure de qualité dans le confort de votre maison. Notre équipe dévouée apporte l'expérience du salon chez vous, pour une beauté sans compromis.
                            </Text>
                    </Text>
                </Flex>
                <Flex direction={'column'}>
                    <Box height={'230'}>
                        <Image src="../../venteP.jpg" width={'100%'} height={'100%'} />
                    </Box>
                    <Text>
                        <span className="titre_coiffure">Vente de Produits</span>
                        <Text mt={'10'}>
                        Découvrez notre sélection exclusive de produits capillaires de première qualité. Prenez soin de vos cheveux avec les meilleurs soins, disponibles chez nous.
                        </Text>
                    </Text>
                </Flex>
                <Flex direction={'column'}>
                    <Box height={'230'}>
                        <Image src="../../formation.jpg" width={'100%'} height={'100%'} />
                    </Box>
                    <Text>
                        <span className="titre_coiffure">Formation Coiffure</span>
                        <Text mt={'10'}>
                        Passez de passionné à professionnel avec nos formations en coiffure. Apprenez les dernières tendances et techniques auprès de nos experts, pour exceller dans l'art de la coiffure.
                        </Text>
                    </Text>
                </Flex>
                
            </Grid>
        </Flex>
    )
}

export default Service