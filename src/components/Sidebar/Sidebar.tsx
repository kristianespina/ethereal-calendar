import React, { useRef } from "react";
import {
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  //DrawerFooter,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Content from "./Content";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex
      w={["auto", "auto", "388px", "388px"]}
      maxW="388px"
      h="100%"
      p={[0, 0, 4, 4]}
    >
      <IconButton
        aria-label="Open Menu"
        size="lg"
        bgColor="white"
        icon={<HamburgerIcon />}
        display={["flex", "flex", "none", "none"]}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Content />
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
      {/*Profile */}
      <Flex
        direction="column"
        w="100%"
        display={["none", "none", "flex", "flex"]}
      >
        <Content />
      </Flex>
    </Flex>
  );
};

export default React.memo(Sidebar);
