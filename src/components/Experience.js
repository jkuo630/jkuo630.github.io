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

  const leadersfluent = () => {
    window.open(
      `https://leadersfluent-ca.webnode.page/`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const pipeiq = () => {
    window.open(`https://pipeiq.ai/`, "_blank", "noreferrer,noopener");
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
              src="https://photos.wellfound.com/startups/i/9460842-dafffd63076fdab11f12ff0d23c79bbf-medium_jpg.jpg?buster=1682922433"
              alt="PipeIQ Logo"
            />

            <Stack>
              <CardBody>
                <Heading size="md">
                  Full-Stack Software Engineer @ PipeIQ
                </Heading>
                <Text py="2">June 2023 - Present</Text>
                <Text py="2">
                  Pipeiq.ai is an early-stage startup leveraging Generative AI
                  to accelerate marketing and sales pipelines. Their innovative
                  orchestration engine utilizes Large Language Models to build
                  highly personalized chatbots and email bots, revolutionizing
                  the marketing and sales industry.
                </Text>
              </CardBody>
              <CardFooter>
                <Button onClick={pipeiq} variant="solid" colorScheme="blue">
                  Visit Website
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/89ee6212-c17d-444e-8641-b5b3279d88d2-profile_image-300x300.png"
              alt="UBCEA Logo"
            />

            <Stack>
              <CardBody>
                <Heading size="md">Software Engineer @ UBCEA</Heading>
                <Text py="2">Sept 2022 - Present</Text>
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
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://media.licdn.com/dms/image/C4E0BAQEyI4ApGXG0CQ/company-logo_200_200/0/1607371572626?e=2147483647&v=beta&t=U3ieMq4ZbmcTKe5iddsUx0DCX6OaJBX7e-lLHZP5d_w" //&auto=format&fit=crop&w=800&q=60
              alt="LeadersFluent Logo"
            />

            <Stack>
              <CardBody>
                <Heading size="md">
                  Director of Technology @ LeadersFluent
                </Heading>
                <Text py="2">Sept 2020 - June 2022</Text>
                <Text py="2">
                  Web Development, Content Creation, API Integration in HTML,
                  CSS, JavaScript, MailChimp and Wordpress.
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={leadersfluent}
                  variant="solid"
                  colorScheme="blue"
                >
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
