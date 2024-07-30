import {
  Icon,
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";
import { DiNodejs } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiReact } from "react-icons/di";

export default function About({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text my={5} color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text scolor={"gray.400"} fontSize={"xl"} px={4}>
            Hi! 👋 My name is Jason. I'm a software engineer, Pokemon
            enthusiant, from Toronto. I'm currently at the University of British
            Columbia studying Computer Science and Business wrapping up an
            internship with Boeing. I am passionate about building sustainable
            tech for business and empowering hackers through hackathons.
            Currently building ML models for predictive data analytics, learning
            Data Engineering, mastering data structures and algorithms and
            building a strong personal stock portfolio. Here are my favourite
            languages to use! 👀
          </Text>
          <HStack justify="center" spacing="50px">
            <Icon as={DiPython} w={10} h={10} />
            <Icon as={DiReact} w={10} h={10} color="blue.500" />
            <Icon as={DiNodejs} w={10} h={10} />
          </HStack>
        </Stack>
      </Container>
    </>
  );
}
