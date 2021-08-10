import React from "react";
import { Text, Box } from "@chakra-ui/react";

import DatePicker from "./DatePicker";

type Props = {
  label: string;
  placeholder?: string;
  onChange: (d: any) => void;
  selectedDate: Date;
};
const DateInput = ({ label, placeholder, onChange, selectedDate }: Props) => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize={12} mb={1}>
        {label}
      </Text>
      <DatePicker
        placeholderText={placeholder}
        onChange={onChange}
        selected={selectedDate}
      />
    </Box>
  );
};

export default DateInput;
