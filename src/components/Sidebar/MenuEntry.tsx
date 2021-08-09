import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

type Props = {
  name: string; // name
  icon: string; // local url
  selected?: boolean;
};
const MenuEntry = ({ name, icon, selected }: Props) => {
  const bgColor = selected ? "none" : "none";
  // const bgColor = selected ? "#0081F0" : "none";
  // const color = selected ? "white" : "gray.500";
  const color = selected ? "gray.500" : "gray.500";
  return (
    <Box
      p={3}
      bgColor={bgColor}
      borderRadius={12}
      _hover={{ cursor: "pointer", bgColor: "gray.200" }}
    >
      <Flex direction="row" gridGap={2}>
        <Image src={icon} aria-label={name} color={color} />
        <Text color={color} fontWeight="bold">
          {name}
        </Text>
      </Flex>
    </Box>
  );
};

export default MenuEntry;
