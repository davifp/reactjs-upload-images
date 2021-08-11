import { Modal, SimpleGrid, useDisclosure, useModal } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [image, setImage] = useState('');

  function handleViewImage(imageUrl: string) {
    setImage(imageUrl);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={40}>
        {cards.map(card => (
          <Card data={card} viewImage={handleViewImage} key={card.id} />
        ))}
      </SimpleGrid>
      <ModalViewImage onClose={onClose} isOpen={isOpen} imgUrl={image} />
    </>
  );
}
