import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const color = "teal";

  return (
    <Flex
      maxW="1040px"
      mx="auto"
      px={{ base: 4, md: 8 }}
      align="flex-start"
      direction={{ base: "column", lg: "row" }}
    >
      <Sidebar color={color} />
      <Box flex="1" minW={0} pt={{ base: 0, lg: "max(3rem, 12vh)" }} pb={20}>
        <Experience color={color} />
        <Projects color={color} />
        <Footer />
      </Box>
    </Flex>
  );
}

export default App;
