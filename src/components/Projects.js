import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Projects({ color }) {
  const releaf = () => {
    window.open(
      `https://devpost.com/software/re-leaf-iu2cje`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const trojan = () => {
    window.open(`https://devpost.com/software/trojan`, "_blank", "noreferrer,noopener");
  };

  const stockpredictor = () => {
    window.open(
      `https://colab.research.google.com/drive/1nn5VpQz1YawZoNMLNpZB1OF2f0V84nwy?usp=sharing`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const presentify = () => {
    window.open(
      `https://devpost.com/software/presentify`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const timecapsules = () => {
    window.open(
      `https://github.com/jkuo630/timecapsules`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const clarq = () => {
    window.open(
      `https://www.clarq.ca/`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const medi = () => {
    window.open(
      `https://devpost.com/software/medi`,
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
          pb={{ base: 10, md: 10 }}
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
          <Accordion allowToggle>
            <AccordionItem border="none">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="unstyled"
              >
                <Stack width="100%">
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">Trojan</Heading>
                      <Text py="2">nwHacks 2026</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <CardBody>
                      <Text py="2">
                        Platform that orchestrates AI agents to detect and fix security
                        vulnerabilities in code before you ship. Streams actionable findings in
                        real time and helps generate fixes that fit into a normal developer
                        workflow.
                      </Text>
                      <Button onClick={trojan} variant="solid" colorScheme="blue">
                        Visit Devpost
                      </Button>
                    </CardBody>
                  </AccordionPanel>
                </Stack>
              </Card>
            </AccordionItem>

            <AccordionItem border="none">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="unstyled"
              >
                <Stack width="100%">
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">Clarq</Heading>
                      <Text py="2">Sept 2025</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <CardBody>
                      <Text py="2">
                        Inline application that allows users to optimize prompts in real time with
                        a click of a button. Trained off of prompting best practices
                        to help users get better results from AI chats.
                      </Text>
                      <Button onClick={clarq} variant="solid" colorScheme="blue">
                        Visit Website
                      </Button>
                    </CardBody>
                  </AccordionPanel>
                </Stack>
              </Card>
            </AccordionItem>

            <AccordionItem border="none">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="unstyled"
              >
                <Stack width="100%">
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">Medi</Heading>
                      <Text py="2">Hack the Globe x BCG 2025</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <CardBody>
                      <Text py="2">
                        Patient-owned AI-powered passport that securely stores all
                        medical documents and provides a concise overview of a
                        patient's health history.
                      </Text>
                      <Button onClick={medi} variant="solid" colorScheme="blue">
                        Visit Devpost
                      </Button>
                    </CardBody>
                  </AccordionPanel>
                </Stack>
              </Card>
            </AccordionItem>

            <AccordionItem border="none">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="unstyled"
              >
                <Stack width="100%">
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">Presentify</Heading>
                      <Text py="2">StormHacks 2024</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <CardBody>
                      <Text py="2">
                        AI presentation tool that generates visuals and bullet
                        points as you talk, in real time.
                      </Text>
                      <Button
                        onClick={presentify}
                        variant="solid"
                        colorScheme="blue"
                      >
                        Visit Devpost
                      </Button>
                    </CardBody>
                  </AccordionPanel>
                </Stack>
              </Card>
            </AccordionItem>

            <AccordionItem border="none">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="unstyled"
              >
                <Stack width="100%">
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">Stock Predictor and Visualizer</Heading>
                      <Text py="2">April 2024</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <CardBody>
                      <Text py="2">
                        Created a Long Short Term Memory artificial neural network
                        and analyzed past data to predict and visualize future
                        closing stock prices. Leveraged machine learning to train
                        and test the model with a 14.7% root mean squared error for
                        the S{"&"}
                        P500.
                      </Text>
                      <Button
                        onClick={stockpredictor}
                        variant="solid"
                        colorScheme="blue"
                      >
                        Visit Google Collab
                      </Button>
                    </CardBody>
                  </AccordionPanel>
                </Stack>
              </Card>
            </AccordionItem>

            <AccordionItem border="none">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="unstyled"
              >
                <Stack width="100%">
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">Time Capsules</Heading>
                      <Text py="2">nwHacks 2024</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <CardBody>
                      <Text py="2">
                        A full-stack web application to take pictures of pill
                        bottles, interpret text, and create custom SMS reminders.
                        Implemented frontend using ReactJS and handled REST APIs in
                        the back-end using Python and Flask. Leveraged Twilio for
                        SMS features, OpenCV for image parsing and OpenAI for text
                        interpretation and message customization.
                      </Text>
                      <Button
                        onClick={timecapsules}
                        variant="solid"
                        colorScheme="blue"
                      >
                        Visit Github Repo
                      </Button>
                    </CardBody>
                  </AccordionPanel>
                </Stack>
              </Card>
            </AccordionItem>

            <AccordionItem border="none">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="unstyled"
              >
                <Stack width="100%">
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">ReLeaf</Heading>
                      <Text py="2">MetHacks 2023</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <CardBody>
                      <Text py="2">
                        A platform for people to travel sustainably, having the
                        potential to help travellers save their carbon footprint and
                        wallets. Implemented webscrapping, APIs, cloud deployment
                        and user auth. Made using React, Express.js, Node.js,
                        MongoDB, Google APIs, Playwright, Auth0 and Google Cloud.
                      </Text>
                      <Button onClick={releaf} variant="solid" colorScheme="blue">
                        Visit DevPost
                      </Button>
                    </CardBody>
                  </AccordionPanel>
                </Stack>
              </Card>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Container>
    </>
  );
}
