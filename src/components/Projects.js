import { Stack, Text, Box, Link, useColorModeValue } from "@chakra-ui/react";

const projects = [
  { name: "Trojan", meta: "winner @ nwHacks 2026", href: "https://devpost.com/software/trojan" },
  { name: "Clarq", meta: "2025 (5+ million impressions)", href: "https://www.clarq.ca/" },
  { name: "Medi", meta: "winner @ Hack the Globe × BCG", href: "https://devpost.com/software/medi" },
  { name: "Presentify", meta: "StormHacks 2024", href: "https://devpost.com/software/presentify" },
  { name: "Time Capsules", meta: "nwHacks 2024", href: "https://github.com/jkuo630/timecapsules" },
  { name: "ReLeaf", meta: "winner @ MetHacks 2023", href: "https://devpost.com/software/re-leaf-iu2cje" },
];

export default function Projects({ color }) {
  const muted = useColorModeValue("gray.600", "gray.400");
  const heading = useColorModeValue("gray.800", "gray.100");

  return (
    <Box id="projects" pb={12}>
      <Text
        fontSize="xs"
        color={`${color}.400`}
        fontWeight="600"
        letterSpacing="0.06em"
        textTransform="uppercase"
        mb={8}
      >
        Projects
      </Text>
      <Stack spacing={{ base: 3, md: 4 }}>
        {projects.map((p) => (
          <Stack
            key={p.name}
            direction={{ base: "column", sm: "row" }}
            justifyContent="space-between"
            align={{ base: "flex-start", sm: "center" }}
            spacing={{ base: 1, sm: 3 }}
          >
            <Box minW={0}>
              <Text fontSize="sm" fontWeight="500" color={heading}>
                {p.name}
              </Text>
              <Text fontSize="xs" color={muted} mt={0.5}>
                {p.meta}
              </Text>
            </Box>
            <Link
              href={p.href}
              isExternal
              fontSize="sm"
              color={`${color}.400`}
              flexShrink={0}
              aria-label={`Open ${p.name}`}
            >
              →
            </Link>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
