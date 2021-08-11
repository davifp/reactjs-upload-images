import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent
        h="auto"
        w="auto"
        maxW={["300px", "600px", "900px"]}
        maxH={["200px", "400px", "600px"]}
      >
        <ModalBody p="0" bgColor="pGray.900" color="white">
          <Image
            src={imgUrl}
            maxW={["300px", "600px", "900px"]}
            maxH={["200px", "400px", "600px"]}
          />
        </ModalBody>
        <ModalFooter d="flex" justifyContent="start" bgColor="pGray.900">
          <Link textAlign="start" href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

