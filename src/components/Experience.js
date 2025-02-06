import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import "../App.css";

export default function Experience({ color }) {
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
                <Heading size="md">Meta</Heading>
                <Text py="2">
                  Incoming Software Engineer Intern, Summer 2025
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
                <Heading size="md">Boeing ✈️</Heading>
                <Text py="2">
                  Software Engineer Intern, Jan 2024 - Aug 2024
                </Text>
                <Text py="2">
                  I joined{" "}
                  <a
                    href="https://www.boeing.com/"
                    style={{ textDecoration: "underline" }}
                  >
                    Boeing
                  </a>{" "}
                  this winter in Vancouver and got to meet some amazing people.
                  I was on the Flight and Safety Data Analytics team, building
                  algorithms for the backend of a flight data analytics tool and
                  an internal client-facing web application. I learned a lot
                  about aviation, aerospace and defence.
                </Text>
                <Text>
                  <ul>
                    <li>
                      Assisted with the development of a full-stack predictive
                      maintenance alerting system with data visualization using
                      React and Python for airlines reducing unscheduled
                      maintenance events and minimizing downtime.
                    </li>
                    <li>
                      Created cloud functions for a data pipeline that keep an
                      eye on specific data levels that can be customized by
                      users. When these levels reach a certain point, they send
                      out alerts.
                    </li>
                    <li>
                      Optimized and developed event-detecting algorithms in
                      Python for a Quick Access Recorder flight data analytics
                      and visualization tool, processing millions of flight data
                      points and reducing runtime of existing algorithms.
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
                  Shoutout to them, they know who they are!
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
                  Software and Data Engineering Intern, May 2023 - Aug 2023
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
                    Developed scalable ELT pipelines using SQL, Python, Spark,
                    and Airflow for automated user profile data retrieval.
                  </li>
                  <li>
                    Developed a data visualization dashboard in React,
                    processing data points for comprehensive insights.
                  </li>
                  <li>
                    Created automated data validation scripts in Python to
                    ensure the accuracy andcompleteness of user profile data.
                  </li>
                  <li>
                    Was apart of several cross-functional teams, including
                    business strategies/operations, design, engineering, and
                    ML/AI, to ensure seamless product alignment throughout
                    multiple sprints. Had a unique opportunity to work a lot of
                    Data Engineers as well.
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
                    Prototyped a content moderation system using Python,
                    scikit-learn and AWS, utilizing natural language processing
                    and a supervised machine learning model to detect and flag
                    inappropriate content.
                  </li>
                  <li>
                    Developed a data visualization dashboard in React,
                    processing hundreds of thousands of data points from API
                    endpoints and databases.
                  </li>
                  <li>
                    Enhanced microservices to support new data visualization
                    methods for real-time user profile data using NodeJS.
                  </li>
                  <li>
                    My work was on mobile app backend development and web app
                    development, with a strong focus user data validaton.
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
