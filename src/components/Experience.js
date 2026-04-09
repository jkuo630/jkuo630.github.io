import { Stack, Text, Box, Link, useColorModeValue } from "@chakra-ui/react";

const roles = [
  {
    company: "Meta",
    url: "https://www.meta.com/about/company-info/",
    title: "Software Engineer Intern",
    period: "May 2025 – Aug 2025 · New York City",
    summary:
      "Internal AI tooling, large-scale infrastructure for performance analytics.",
  },
  {
    company: "Boeing",
    url: "https://www.boeing.com/",
    title: "Software Engineer Intern",
    period: "Jan 2024 – Aug 2024 · Vancouver",
    summary:
      "ML predictive maintenance tooling, data pipeline monitoring, event detection algorithms.",
  },
  {
    company: "PipeIQ",
    url: "https://pipeiq.ai/",
    title: "Software & Data Engineering Intern",
    period: "May 2023 – Aug 2023 · Palo Alto",
    summary: "ELT pipelines, high-volume visualization dashboards, data validation.",
  },
  {
    company: "Smarttwigs",
    url: "https://www.smarttwigs.com/",
    title: "Software Engineering Intern",
    period: "Jan 2023 – May 2023 · Jersey City",
    summary: "ML content moderation, CI/CD pipelines w/ AWS and Kubernetes.",
  },
];

export default function Experience({ color }) {
  const muted = useColorModeValue("gray.600", "gray.400");
  const heading = useColorModeValue("gray.800", "gray.100");

  return (
    <Box id="experience" pb={{ base: 14, md: 16 }}>
      <Text
        fontSize="xs"
        color={`${color}.400`}
        fontWeight="600"
        letterSpacing="0.06em"
        textTransform="uppercase"
        mb={8}
      >
        Work
      </Text>
      <Stack spacing={10}>
        {roles.map((r) => (
          <Box key={r.company}>
            <Box fontSize="sm" fontWeight="600" color={heading} lineHeight="snug">
              <Link href={r.url} isExternal fontWeight="600">
                {r.company}
              </Link>
              <Text as="span" fontWeight="400" color={muted}>
                {" "}
                · {r.title}
              </Text>
            </Box>
            <Text fontSize="xs" color={muted} mt={1}>
              {r.period}
            </Text>
            <Text fontSize="sm" color={muted} mt={3} lineHeight="tall">
              {r.summary}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
