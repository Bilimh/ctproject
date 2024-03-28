import { Badge, Box, Flex, Heading, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import './produit.css'
import './service.css'
import AjouterAuPanier from './AjouterAuPanier'
import { listeProduitsCapillaires } from '../../constant/Description'
import { ProduitCapillaire } from '../../constant/Description'

export interface itemProps {
    handleAddCard: (item: ProduitCapillaire) => void;
  }

const Produit = ({handleAddCard}: itemProps) => {

    const cinqPremiersProduits = listeProduitsCapillaires.slice(0, 5);
    return (
        <Flex direction='column' bg='white' pb='23px'>
            <Heading as='h3' ml='23' className='titre_produit'>
                Nos produits captivent par leur qualité exceptionnelle.
            </Heading>
            <Flex bg='white'>
                {cinqPremiersProduits.map((produit, index) =>
                    <Box key={index} className='showProduit'>
                        <Box className='produitItem'>
                            <Image src={produit.image} className='produitItemImage' />
                        </Box>
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge color={'white'} borderRadius='10%' px='2' bg={'#D69E2E'} ml='23'>
                                    NEW
                                </Badge>
                            </Box>
                        </Box>
                        <Box
                            mt='1'
                            fontWeight='100'
                            as='h5'
                            lineHeight='tight'
                            noOfLines={1}
                            pl='23'
                            mb={'10'}
                        >
                            {produit.nom}
                        </Box>
                        <Box
                            pl='23'
                        >
                            {produit.prix} €
                        </Box>
                        <Box display='flex' mt='2' alignItems='center' pl='23' pr='5'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < produit.rating ? '#EF5F00' : 'gray'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm' mt={'5'}>
                                {produit.reviewCount} avis
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent={'center'}>

                        <AjouterAuPanier item={produit} handleAddCard={() => handleAddCard(produit)} />
                        </Box>
                    </Box>
                )
                }
            </Flex>
        </Flex>
    )
}

export default Produit