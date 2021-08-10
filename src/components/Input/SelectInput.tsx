import React from "react";
import { Text, Select, Box } from "@chakra-ui/react";

import { STATUS } from "../../constants/constants";
import { Status } from "../../constants/enums";

type Props = {
  value?: string;
  label: string;
  placeholder?: string;
  onChange: (e: any) => void;
};

const SelectInput = ({ value, label, placeholder, onChange }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize={12} mb={1}>
        {label}
      </Text>
      <Select
        variant="filled"
        bgColor="gray.200"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      >
        {STATUS.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectInput;
