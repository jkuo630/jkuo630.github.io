import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "../App.css";

export default function Experience({ color }) {
  const [selected, setSelected] = useState("");

  const ubcea = () => {
    window.open(`https://www.ubcesports.ca/`, "_blank", "noreferrer,noopener");
  };

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 10, md: 10 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text my={5} color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/89ee6212-c17d-444e-8641-b5b3279d88d2-profile_image-300x300.png" //&auto=format&fit=crop&w=800&q=60
              alt="UBCEA Logo"
            />

            <Stack>
              <CardBody>
                <Heading size="md">Software Engineer @ UBCEA</Heading>
                <Text py="2">2022-Present</Text>
                <Text py="2">
                  Web + App Development in React, Next.js and Wordpress
                </Text>
              </CardBody>
              <CardFooter>
                <Button onClick={ubcea} variant="solid" colorScheme="blue">
                  Visit Website
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
