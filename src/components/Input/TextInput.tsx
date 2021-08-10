import React from "react";
import { Text, Input, Box } from "@chakra-ui/react";

type Props = {
  value?: string;
  label: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputBox = ({ value, label, placeholder, onChange }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize={12} mb={1}>
        {label}
      </Text>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        bgColor="gray.200"
        required
      />
    </Box>
  );
};

export default InputBox;
