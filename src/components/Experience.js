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

  const smarttwigs = () => {
    window.open(`https://www.smarttwigs.com/`, "_blank", "noreferrer,noopener");
  };

  const boeing = () => {
    window.open(`https://www.boeing.com/`, "_blank", "noreferrer,noopener");
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
            <Stack>
              <CardBody>
                <Heading size="md">Boeing ✈️</Heading>
                <Text py="2">Software Engineer Intern, Jan 2024 - Present</Text>
                <Text py="2">
                  I joined{" "}
                  <a
                    href="https://www.boeing.com/"
                    style={{ textDecoration: "underline" }}
                  >
                    Boeing
                  </a>{" "}
                  this winter in Vancouver and got to meet some amazing people.
                  I was on the Flight and Safety Data Analytics team, working
                  with the backend and an internal client-facing web
                  application. I learned a lot about the aviation and aerospace
                  industry.
                </Text>
                <Text>
                  <ul>
                    <li>
                      Assisted with the development of a predictive maintenance
                      alerting system for airlines reducing unscheduled
                      maintenance events and minimizing downtime by 33%.
                    </li>
                    <li>
                      Created cloud functions for a data pipeline that keep an
                      eye on specific data levels that can be customized by
                      users. When these levels reach a certain point, they send
                      out alerts.
                    </li>
                    <li>
                      Decreased data analysis runtime by 45% by refining and
                      implementing algorithms that process 1+ million raw flight
                      data points.
                    </li>
                    <li>
                      My work was a unique blend of software and data
                      engineering, data science, and data analytics.
                    </li>
                  </ul>
                </Text>
                <Text>
                  Extremely grateful for the opportunity as it was my first
                  formal introduction to the software industry and most
                  importantly the people I met who remain lifelong friends.
                </Text>
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
                <Heading size="md">PipeIQ 🤖</Heading>
                <Text py="2">
                  Software Engineering Intern, May 2023 - Aug 2023
                </Text>
                <Text py="2">
                  Joined{" "}
                  <a
                    href="https://pipeiq.ai/"
                    style={{ textDecoration: "underline" }}
                  >
                    PipeIQ
                  </a>{" "}
                  , an early-stage startup leveraging Generative AI to
                  accelerate marketing and sales pipelines. Their orchestration
                  engine utilizes Large Language Models to build highly
                  personalized chatbots and email bots, aiming to revolutionize
                  the marketing and sales industry.
                </Text>
                <ul>
                  <li>
                    Increased user click-through-rates and traffic by building
                    several responsive front-end components on the home page
                    using Typescript and React.
                  </li>
                  <li>
                    Built several API integrations within the client, including
                    a Google sign-in feature with Auth0 and a calendly
                    integration.
                  </li>
                  <li>
                    Developed data pipelines using AWS Lambda functions to
                    retrieve and compute user data from the database.
                  </li>
                  <li>
                    Was apart of several cross-functional teams, including
                    business strategies/operations, design, engineering, and
                    ML/AI, to ensure seamless product alignment throughout
                    multiple sprints.
                  </li>
                </ul>
                <Text>
                  Even though I decided not to continue with PipeIQ, I am
                  grateful for the opportunity and extremely proud of how far
                  the startup has gone. Hoping that it continues to grow!
                </Text>
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
                <Heading size="md">Smarttwigs 📱</Heading>
                <Text py="2">
                  Software Engineering Intern, Jan 2023 - May 2023
                </Text>
                <Text py="2">
                  Joined{" "}
                  <a
                    href="https://www.smarttwigs.com/"
                    style={{ textDecoration: "underline" }}
                  >
                    Smarttwigs
                  </a>{" "}
                  , a global software consultancy startup solving complex
                  problems with technology. They connect strategy and execution,
                  helping our clients to strengthen their core technology, scale
                  with flexibility and create seamless digital experiences.
                </Text>
                <ul>
                  <li>
                    Built front-end components in React and React native for the
                    web and app user login page.
                  </li>
                  <li>
                    Increased marketing and sale strategies by $1.5k for clients
                    by delivering data-driven insights with an analytics
                    dashboard.
                  </li>
                  <li>
                    Enhanced security by implementing middleware API and web
                    services for seamless and secure user logins.
                  </li>
                  <li>
                    My work was on mobile app development and web app
                    development, with a strong focus on login implementation.
                  </li>
                </ul>
                <Text>
                  Being my first software engineering role, I'm very grateful
                  for the opportunity I got working here. Met some amazing
                  people and had some great mentors.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
