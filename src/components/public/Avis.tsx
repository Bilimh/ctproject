import React, { useRef, useEffect, useState } from 'react';
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import { ArrowRightIcon, StarIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import { commentairesSalon } from '../../constant/Description';
import './avis.css'
const Avis: React.FC = () => {
  const contenairAvisRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const avis = contenairAvisRef.current?.querySelectorAll('.avis_grid');
    //const widthAvis = avis?.[0]?.offsetWidth || 0;
    //const longueurAvis = avis?.length || 0;
    const avisElement = avis?.[0] as HTMLElement; // Conversion de type en HTMLElement
    const widthAvis = avisElement?.offsetWidth || 0;

    const updateSlid = (transformX: number) => {
      const contenairAvis = contenairAvisRef.current;

      if (contenairAvis) {
        contenairAvis.style.transform = `translateX(${transformX}px)`;
        contenairAvis.style.transition = "transform 1s";
      }
    };

    updateSlid(-2 * currentIndex * widthAvis);
  }, [currentIndex]);

  const voirPlus = () => {
    const avis = contenairAvisRef.current?.querySelectorAll('.avis_grid');
    const longueurAvis = avis?.length || 0;

    if (currentIndex < longueurAvis - 4) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const voirMoins = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <Flex position={'relative'} bg='#FFF7ED'>
      <Button 
        border={'1px solid #582D1D'} 
        borderRadius={'100%'} bg={'white'} onClick={voirMoins} width={'50px'} height={'50'} position={'absolute'} top={'50%'} zIndex={2}>
        <ArrowLeftIcon />
      </Button>
      <Flex 
          p='46' pb='10'
          display='flex' position={'relative'} className='contenair_avis' ref={contenairAvisRef}>
        {commentairesSalon.map((avis, index) => (
          <Box className="avis_grid" borderRadius={'10'} p='23' key={index}>
            <Box className="avis" display={'flex'} flexDirection={'column'}>
              <Text>{avis.prenomClient}</Text>
              <Text>{avis.contenu}</Text>
              <Text><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> </Text>
            </Box>
          </Box>
        ))}
      </Flex>
      <Button border={'1px solid #582D1D'} className="boutton" borderRadius={'100%'} bg={'white'} onClick={voirPlus} width={'50px'} height={'50'} top={'50%'} position={'absolute'} right={'0'} disabled={currentIndex === 4}>
        <ArrowRightIcon /> 
      </Button>
    </Flex>
  );
}

export default Avis;
