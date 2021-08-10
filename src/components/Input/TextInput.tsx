import React from "react";
import { Text, Input, Box } from "@chakra-ui/react";

type Props = {
  label: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputBox = ({ label, placeholder }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize={12} mb={1}>
        {label}
      </Text>
      <Input
        // value={value}
        // onChange={handleChange}
        placeholder={placeholder}
        bgColor="gray.200"
      />
    </Box>
  );
};

export default InputBox;
