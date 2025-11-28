import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";

export default function About({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 10, md: 10 }}
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
            Hi! 👋 My name is Jason. I'm currently at the University of British
            Columbia studying Computer Science and Business. I am passionate
            about building sustainable tech for business and empowering hackers
            through hackathons. Currently building ML models for predictive data
            analytics and learning Software Infra.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
