import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import './imageSlide.css'
import Salon from "./Salon";
import Service from "./Service";
//import Produit from "./Produit";
import Stylist from "./Stylist";
import Avis from "./Avis";
import InfoPratique from "./InfoPratique";
//import Header from "./Header";

//import { ProduitCapillaire } from "../../constant/Description";

export interface produitType {
    id: number;
    src: string;
    alt: string;
    descriptionHeader: string;
    descriptionText: string;
}


interface ImageSliderProps {
    imageToSlige: produitType[];
}
const ImageSlide: React.FC<ImageSliderProps> = ({ imageToSlige }) => {
    //const [cart, setCart] = useState<ProduitCapillaire[]>([])

    const numberImg: number = imageToSlige.length

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const updateInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % numberImg)
        }, 6000)
        return () => clearInterval(updateInterval);
    }, [numberImg])

    /*const handleAddCard = (item: ProduitCapillaire) => {
      
        let isPresent = false

        cart.forEach((produit) =>{
            if (item.id === produit.id) {
                isPresent = true
            }
        })
        if(isPresent){
            alert('Produit à nouveau ajouté dans le panier')
            return;
        }
        setCart([...cart, item])
        
    }*/


    return (
        <Flex direction={'column'}  pl={'1rem'} pr={'1rem'}>
            {
                imageToSlige.map((image, index) => (
                    <Flex 
                        id="imageHide" 
                        className={index === currentImageIndex ? 'active' : ''}
                        justifyContent='space-between'
                    >
                      
                        <Flex
                            width={'49%'}
                            direction={'column'}
                            alignItems='center'
                            justifyContent='center'
                           
                        >
                            <Box>
                                <Heading as={'h1'}  mb={0} color='#F5AE73'>
                                    {image.descriptionHeader}
                                </Heading>
                            </Box>
                            <Box>
                                <Text color={'white'} lineHeight={'1.75rem'}>
                                    {image.descriptionText}
                                </Text>
                            </Box>
                        </Flex>
                        <Box 
                            width={'49%'}
                            pr={'1rem'}
                        >
                            <Image
                                src={image.src}
                                key={image.id}
                                alt={image.alt}
                                width={'97%'}
                               
                            />
                        </Box>
                    </Flex>
                ))
            }
            {/*<Header size={cart.length}/>*/}
            <Salon />
            <Service/>
            <Stylist />
          {  /*<Produit handleAddCard={handleAddCard}/>*/}
            <Avis/>
            <InfoPratique />
        </Flex>
    )
}

export default ImageSlide