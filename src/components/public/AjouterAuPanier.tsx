import { Button } from "@chakra-ui/react"
//import { produitType} from "./ImageSlide"
import { ProduitCapillaire } from "../../constant/Description"

interface itemProps {
    item : ProduitCapillaire
    handleAddCard: (item : ProduitCapillaire) => void
}

const AjouterAuPanier = ({item, handleAddCard}: itemProps) => {

    return (

        <Button
            borderRadius=''
            bg='#FFEFD6'
            color='#582D1D'
            px={4} h={30}
            width={'75%'}
            mt='13'
            variant='outline'
            fontSize={'1.2rem'}
            border={'1px solid #582D1D'}
            onClick={()=> handleAddCard(item)}
        >
            Ajouter au panier
        </Button>
    )
}

export default AjouterAuPanier