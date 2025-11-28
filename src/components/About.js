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
            Hi! 👋 My name is Jason. I'm a fourth year computer science and business student at the University of British
            Columbia. Previously, I was at Meta building a performance metrics platform on the Bloks Infrastructure team, Meta's cross-platform UI framework. 
            I've also worked at Boeing building event-detecting algorithms and software for predicting airplane 
            maintenance needs. Currently building random side projects and learning more about software systems and infrastructure.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
