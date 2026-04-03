import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Stack,
  useColorMode,
  useColorModeValue,
  IconButton,
  useMediaQuery,
  useDisclosure,
  Flex,
  Link,
  Text,
  HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SOCIAL, openExternal } from "../constants";

function scrollToId(id, onDone) {
  document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  onDone?.();
}

export default function Sidebar({ color }) {
  const muted = useColorModeValue("gray.600", "gray.500");
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isWide] = useMediaQuery("(min-width: 62em)");

  const NavLink = ({ id, label, afterClick }) => (
    <Button
      variant="ghost"
      size="sm"
      justifyContent="flex-start"
      h="auto"
      py={1}
      px={0}
      fontWeight="400"
      fontSize="sm"
      color={muted}
      _hover={{ color: `${color}.400`, bg: "transparent" }}
      onClick={() => scrollToId(id, afterClick)}
    >
      {label}
    </Button>
  );

  const socials = (
    <HStack spacing={3} justifyContent="flex-start">
      <IconButton
        aria-label="LinkedIn"
        variant="ghost"
        size="sm"
        p={0}
        minW="auto"
        h="auto"
        _hover={{ bg: "transparent", color: `${color}.400` }}
        icon={<FaLinkedin />}
        onClick={() => openExternal(SOCIAL.linkedin)}
      />
      <IconButton
        aria-label="GitHub"
        variant="ghost"
        size="sm"
        p={0}
        minW="auto"
        h="auto"
        _hover={{ bg: "transparent", color: `${color}.400` }}
        icon={<FaGithub />}
        onClick={() => openExternal(SOCIAL.github)}
      />
      <IconButton
        aria-label="Email"
        variant="ghost"
        size="sm"
        p={0}
        minW="auto"
        h="auto"
        _hover={{ bg: "transparent", color: `${color}.400` }}
        icon={<FaEnvelope />}
        as="a"
        href={SOCIAL.email}
      />
    </HStack>
  );

  const nav = (
    <Stack spacing={0} align="stretch" as="nav">
      <NavLink id="experience" label="Work" />
      <NavLink id="projects" label="Projects" />
    </Stack>
  );

  return (
    <Box
      as="aside"
      flexShrink={0}
      w={{ base: "100%", lg: "280px", xl: "300px" }}
      position={{ base: "relative", lg: "sticky" }}
      top={{ lg: 0 }}
      alignSelf="flex-start"
      h={{ lg: "100vh" }}
      py={{ base: 6, lg: "max(3rem, 12vh)" }}
      pr={{ lg: 8 }}
      display="flex"
      flexDirection="column"
      justifyContent={{ lg: "space-between" }}
    >
      <Box>
        <Flex align="flex-start" justifyContent="space-between" gap={4} mb={{ base: 6, lg: 8 }}>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            _hover={{ opacity: 0.85 }}
          >
            <Text fontWeight="600" letterSpacing="-0.02em" fontSize="lg">
              Jason Kuo
            </Text>
          </Link>
          <HStack spacing={0}>
            <IconButton
              aria-label="Toggle color mode"
              variant="ghost"
              size="sm"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
            {!isWide ? (
              <>
                <IconButton
                  aria-label="Open menu"
                  variant="ghost"
                  size="sm"
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                />
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody py={6}>
                      <Stack spacing={2} align="stretch">
                        <NavLink id="experience" label="Work" afterClick={onClose} />
                        <NavLink id="projects" label="Projects" afterClick={onClose} />
                      </Stack>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            ) : null}
          </HStack>
        </Flex>

        <Text fontSize="sm" color={`${color}.400`} mb={1} fontWeight="500">
          Software engineer
        </Text>
        <Text
          fontSize="sm"
          color={muted}
          lineHeight="short"
          whiteSpace={{ base: "normal", lg: "nowrap" }}
        >
          University of British Columbia
        </Text>
        <Text
          fontSize="sm"
          color={muted}
          lineHeight="short"
          mt={0.5}
          mb={{ base: 6, lg: 10 }}
        >
          CS + Business
        </Text>

        {isWide ? (
          <>
            <Box mb={10}>{nav}</Box>
            {socials}
          </>
        ) : (
          <>
            {nav}
            <Box mt={6}>{socials}</Box>
          </>
        )}
      </Box>
    </Box>
  );
}
