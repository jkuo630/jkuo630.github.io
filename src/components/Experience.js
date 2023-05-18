import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

export default function Experience({ color }) {
  const [selected, setSelected] = useState("");

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
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Card
            style={{
              width: "48rem",
              height: "7rem",
              backgroundColor: "#4a5568",
            }}
          >
            <Card.Body>
              <Card.Title>Software Developer @ UBCEA</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                2022-Present
              </Card.Subtitle>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
              <Card.Link target="blank" href="https://www.ubcesports.ca/">
                Visit Website
              </Card.Link>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
