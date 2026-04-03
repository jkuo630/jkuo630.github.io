import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const muted = useColorModeValue("gray.500", "gray.600");

  return (
    <Box pt={8}>
      <Text fontSize="xs" color={muted}>
        © {new Date().getFullYear()}
      </Text>
    </Box>
  );
}
