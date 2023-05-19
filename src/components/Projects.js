import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Projects({ color }) {
  const [selected, setSelected] = useState("All");

  const handleSelected = (value) => {
    setSelected(value);
  };

  const releaf = () => {
    window.open(
      `https://devpost.com/software/re-leaf-iu2cje`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const rizzify = () => {
    window.open(
      `https://devpost.com/software/bucshackathon`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const googlekeeps = () => {
    window.open(
      `https://github.com/jkuo630/googlekeepclone`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const simon = () => {
    window.open(
      `https://github.com/jkuo630/simongame`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const blog = () => {
    window.open(
      `https://github.com/jkuo630/blog`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text my={5} color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src="https://media.istockphoto.com/id/1340431369/vector/electric-plane-line-icon-aircraft-powered-by-electricity-green-aviation-concept.jpg?s=612x612&w=0&k=20&c=Ps1FaoUWnQYE1m9G2Ym9t8pi0Pc5Pdmf-rop-81fVPQ=" //&auto=format&fit=crop&w=800&q=60
                alt="Releaf Logo"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">ReLeaf</Heading>
                  <Text py="2">Best Sustainability Hack @ MetHacks 2023</Text>
                  <Text py="2">
                    A platform for people to travel sustainably, having the
                    potential to help travellers save their carbon footprint and
                    wallets. Implemented webscrapping, APIs, cloud deployment
                    and user auth. Made using React, Express.js, Node.js,
                    MongoDB, Google APIs, Playwright, Auth0 and Google Cloud.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button onClick={releaf} variant="solid" colorScheme="blue">
                    Visit DevPost
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png" //&auto=format&fit=crop&w=800&q=60
                alt="Rizzify Logo"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Rizzify</Heading>
                  <Text py="2">First Place @ BUCS Hackathon 2023</Text>
                  <Text py="2">
                    An application that allows users to recieve custom pick up
                    lines. Made using HTML, CSS, Bootstrap, JavaScript, ChatGPT
                    API and Speech Synthesis API.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button onClick={rizzify} variant="solid" colorScheme="blue">
                    Visit DevPost
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
                src="https://www.google.com/images/icons/product/keep-512.png" //&auto=format&fit=crop&w=800&q=60
                alt="Google Keeps Logo"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Google Keeps Clone</Heading>
                  <Text py="2">April 2023</Text>
                  <Text py="2">
                    Made to learn React and brush up on EJS, CSS, Express.js and
                    Node.js.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button
                    onClick={googlekeeps}
                    variant="solid"
                    colorScheme="blue"
                  >
                    Visit Github Repo
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
                src="https://www.geekalerts.com/u/Classic-Simon-Game.jpg" //&auto=format&fit=crop&w=800&q=60
                alt="Simon Logo"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Simon Game</Heading>
                  <Text py="2">March 2023</Text>
                  <Text py="2">
                    A web game that challenges users to follow an arbitarily
                    generated pattern of colours. Used to learn Javascript, web
                    development and DOM manipulation.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button onClick={simon} variant="solid" colorScheme="blue">
                    Visit Github Repo
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
                src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png" //&auto=format&fit=crop&w=800&q=60
                alt="Blog Logo"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Blog</Heading>
                  <Text py="2">March 2023</Text>
                  <Text py="2">
                    Simple blog web application that allows users to view and
                    create posts. Used to learn JavaScript and EJS. Also built
                    using Express.js, Node.js, CSS and Bootstrap.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button onClick={blog} variant="solid" colorScheme="blue">
                    Visit Github Repo
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
