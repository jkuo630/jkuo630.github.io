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
          pb={{ base: 20, md: 36 }}
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
          <Stack px={4} spacing={4}>
            <div className="chakra-card css-1mp4omr">
              <div className="chakra-card__header">
                Software Developer @ UBCEA
              </div>
              <div className="chakra-card__body">Bye</div>
              <div className="chakra-card__footer">Hello</div>
            </div>
          </Stack>
          <Stack px={4} spacing={4}>
            <div className="chakra-card css-1mp4omr">
              <div className="chakra-card__header">
                Software Developer @ UBCEA
              </div>
              <div className="chakra-card__body">Bye</div>
              <div className="chakra-card__footer">Hello</div>
            </div>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
