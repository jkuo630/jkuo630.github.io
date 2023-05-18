import { Divider, Stack, Text, Container, Box, HStack } from "@chakra-ui/react";
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
          <Text color={"gray.400"} fontSize={"xl"} px={4}>
            Hello! My name is Jason and I am a sophomore at UBC studying
            Computer Science and Business. I am a passionate software developer
            with a diverse portfolio of projects containing a variety of
            technical stacks. I also have extensive leadership experience
            through my professional and extracurricular endeavours. When I'm not
            coding, you can find me hitting the gym, playing the newest video
            games, polishing my stock portfolio or catching up with my favourite
            animes! Here is my tech stack:
          </Text>
        </Stack>
      </Container>
    </>
  );
}
