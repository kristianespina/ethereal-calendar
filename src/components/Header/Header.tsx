import React from "react";
import { Flex, Image, Text, Button, useDisclosure } from "@chakra-ui/react";

import { AppointmentView } from "../AppointmentView";

import Bunny from "../../assets/bunny.svg";
import { DialogBox } from "../DialogBox";

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

      <DialogBox
        isOpen={isOpen}
        onClose={onClose}
        component={
          <AppointmentView
            showDeleteButton={false}
            actionCaption="Add"
            showHeaders={false}
          />
        }
      />
    </>
  );
};

export default Header;
