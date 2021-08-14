import React from "react";
import { Flex, Image, Text, Button, useDisclosure } from "@chakra-ui/react";

import { AppointmentView } from "../AppointmentView";

import Bunny from "../../assets/bunny.svg";
import { DialogBox } from "../DialogBox";
import { Filter } from "../Filter";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenFilter,
    onOpen: onOpenFilter,
    onClose: onCloseFilter,
  } = useDisclosure();

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
          <Text
            fontSize={18}
            fontWeight="bold"
            lineHeight={0.5}
            color="gray.700"
          >
            Welcome
          </Text>
          <Text fontSize={36} fontWeight="bold" color="gray.700">
            Kristian Espina
          </Text>
          <Flex direction="row" gridGap={4}>
            <Button
              size="sm"
              onClick={onOpen}
              bgColor="blue.800"
              color="white"
              _hover={{ bg: "blue.700" }}
              _active={{ bg: "blue.700", transform: "scale(0.98)" }}
            >
              Create appointment
            </Button>
            <Button
              color="blue.800"
              size="sm"
              variant="link"
              onClick={onOpenFilter}
            >
              Filter
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <DialogBox
        isOpen={isOpen}
        onClose={onClose}
        component={<AppointmentView isUpdate={false} onClose={onClose} />}
      />

      <DialogBox
        isOpen={isOpenFilter}
        onClose={onCloseFilter}
        component={<Filter onClose={onCloseFilter} />}
      />
    </>
  );
};

export default Header;
