import './accueil.css'
import ImageSlide from "../components/public/ImageSlide"
import { Image } from "../components/public/ImageSlide"

const Accueil = () => {
    const imageToSlige: Image[] = [
        {
            id: 1, src: '/salon1.jpg', alt: "salon1",
            descriptionHeader: 'Bienvenue chez Salon de Coiffure Chic & Élégant.',
            descriptionText: 'Nous sommes fiers de vous offrir une expérience de coiffure exceptionnelle dans un cadre relaxant et sophistiqué. Notre équipe de coiffeurs talentueux est là pour vous offrir des services personnalisés et des conseils de style.'
        },
        {
            id: 2, src: '/coiffure2.jpg', alt: "coiffure2",
            descriptionHeader: 'Coiffure pour Femmes.',
            descriptionText: 'Découvrez nos dernières tendances en matière de coiffure pour femmes. Que vous recherchiez une coupe moderne, des mèches élégantes ou une coloration vibrante, notre équipe de coiffeurs experts est là pour sublimer votre style.'
        },
        {
            id: 3, src: '/coiffure3.jpg', alt: "coiffure3",
            descriptionHeader: 'Coiffure pour Hommes.',
            descriptionText: 'Découvrez nos coupes de cheveux modernes et tendances pour hommes. Que vous préfériez un look classique ou une coupe audacieuse, nos coiffeurs spécialisés sont là pour vous offrir une expérience de coiffure unique.'
        },
        {
            id: 4, src: '/produit1.jpg', alt: "coiffure4",
            descriptionHeader: 'Produits pour Soin Capillaire.',
            descriptionText: 'Explorez notre gamme de produits de soin capillaire de haute qualité. Des shampooings nourrissants aux masques revitalisants, nous proposons les meilleurs produits pour prendre soin de vos cheveux à la maison.'
        }
    ]

    return (

        <>
            <ImageSlide imageToSlige={imageToSlige} />
        </>
    )
}

export default Accueil