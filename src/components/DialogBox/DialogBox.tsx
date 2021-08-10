import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  component: any;
};
const DialogBox = ({ isOpen, onClose, component }: Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create appointment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{component}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DialogBox;
