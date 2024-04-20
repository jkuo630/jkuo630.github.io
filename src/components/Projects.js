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
} from "@chakra-ui/react";

export default function Projects({ color }) {
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

  const chromeextension = () => {
    window.open(
      `https://github.com/jkuo630/aichromeextension`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const stockpredictor = () => {
    window.open(`https://github.com/jkuo630/`, "_blank", "noreferrer,noopener");
  };

  const jobsearchapp = () => {
    window.open(
      `https://github.com/jkuo630/reactnativeapp`,
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
          <Stack px={4} spacing={4}>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">
                    ML Project: Predictive Analytics with Financial Assets
                  </Heading>
                  <Text py="2">April 2024</Text>
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
                    Visit Github Repo
                  </Button>
                </CardBody>
              </Stack>
            </Card>

            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">Time Capsules</Heading>
                  <Text py="2">Jan 2024</Text>
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
              </Stack>
            </Card>

            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">Job Search Mobile App</Heading>
                  <Text py="2">June 2023</Text>
                  <Text py="2">
                    A responsive IOS and Android mobile application that
                    simplfies the job searching process. Made using React Native
                    and Indeed API. Note: API key has been hidden and disabled.
                  </Text>
                  <Button
                    onClick={jobsearchapp}
                    variant="solid"
                    colorScheme="blue"
                  >
                    Visit Github Repo
                  </Button>
                </CardBody>
              </Stack>
            </Card>

            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">AI Chrome Extension</Heading>
                  <Text py="2">May 2023</Text>
                  <Text py="2">
                    A Chrome extension that brings ChatGPT's conversational
                    abilities to your browser. Chat effortlessly with an AI
                    assistant for research, discussions, and information. Just
                    click the icon, type your queries, and get human-like
                    responses. Made using HTML, CSS, Javascript, OpenAI API.
                  </Text>
                  <Button
                    onClick={chromeextension}
                    variant="solid"
                    colorScheme="blue"
                  >
                    Visit Github Repo
                  </Button>
                </CardBody>
              </Stack>
            </Card>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
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
                  <Button onClick={releaf} variant="solid" colorScheme="blue">
                    Visit DevPost
                  </Button>
                </CardBody>
              </Stack>
            </Card>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">Rizzify</Heading>
                  <Text py="2">First Place @ BUCS Hackathon 2023</Text>
                  <Text py="2">
                    An application that allows users to recieve custom pick up
                    lines. Made using HTML, CSS, Bootstrap, JavaScript, ChatGPT
                    API and Speech Synthesis API.
                  </Text>
                  <Button onClick={rizzify} variant="solid" colorScheme="blue">
                    Visit DevPost
                  </Button>
                </CardBody>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
