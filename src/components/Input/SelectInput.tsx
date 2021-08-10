import React from "react";
import { Text, Select, Box } from "@chakra-ui/react";

import { Status } from "../../constants/enums";

type Props = {
  label: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SelectInput = ({ label, placeholder }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize={12} mb={1}>
        {label}
      </Text>
      <Select variant="filled" placeholder={placeholder} bgColor="gray.200">
        {Object.values(Status).map((value) => (
          <option value={value}>{value}</option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectInput;
