import React from "react";
import {
  Flex,
  Image,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import { AppointmentView } from "../AppointmentView";

import Bunny from "../../assets/bunny.svg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex direction="row" gridGap={4}>
        <Image src={Bunny} aria-label="Bunny" />
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="left"
          alignContent="center"
        >
          <Text fontSize={18} fontWeight="bold" lineHeight={0.5}>
            Welcome
          </Text>
          <Text fontSize={36} fontWeight="bold">
            Kristian Espina
          </Text>
          <Button colorScheme="blue" size="sm" onClick={onOpen}>
            Create appointment
          </Button>
        </Flex>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AppointmentView
              showDeleteButton={false}
              actionCaption="Add"
              showHeaders={false}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
