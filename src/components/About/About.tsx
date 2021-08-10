import React from "react";
import { Flex, Box, Text, Container } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
// Local Imports
import WorkingAnimation from "../../assets/working.json";

const About = () => {
  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      alignItems="center"
      justifyContent="center"
      alignContent="center"
    >
      <Box textAlign="center">
        <Lottie
          loop
          play
          animationData={WorkingAnimation}
          style={{ width: 360 }}
        />
      </Box>
      <Box>
        <Container>
          <Text fontWeight="bold" fontSize={24}>
            About this Project
          </Text>
          <Text fontSize={12}>
            This project is made using ReactJS (with Typescript)
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default About;
