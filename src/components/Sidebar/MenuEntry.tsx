import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  name: string; // name
  icon: any;
  selected?: boolean;
};
const MenuEntry = ({ name, icon, selected }: Props) => {
  const bgColor = selected ? "blue.700" : "none";
  const color = selected ? "white" : "gray.500";

  return (
    <Box
      p={3}
      color={color}
      bgColor={bgColor}
      borderRadius={12}
      _hover={{
        cursor: "pointer",
        bgColor: selected ? "blue.700" : "gray.100",
        color: selected ? "white" : "blue.700",
      }}
    >
      <Flex direction="row" gridGap={2} alignItems="center">
        <FontAwesomeIcon icon={icon} />
        <Text fontWeight="bold">{name}</Text>
      </Flex>
    </Box>
  );
};

export default MenuEntry;
