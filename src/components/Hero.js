import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import "../App.css";

export default function Header({ color }) {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const linkedin = () => {
    window.open(
      `https://www.linkedin.com/in/jasonwkuo/`,
      "_blank",
      "noreferrer,noopener"
    );
  };
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Hi, my name is Jason Kuo. <br />
            <Text color={`${color}.400`} className="typewriter">
              I'm a software engineer.
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            Third year computer science and business student @ UBC
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={color}
              bg={`${color}.400`}
              rounded={"full"}
              px={6}
              _hover={{
                bg: `${color}.500`,
              }}
              onClick={linkedin}
            >
              Let's connect!
            </Button>
            <Button
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
            <Box></Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
