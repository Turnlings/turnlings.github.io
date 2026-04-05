import { Center, Stack, Text, Timeline, TimelineItem } from "@mantine/core";

const items: {
  position: string;
  company: string;
  date: string;
  description?: string;
  lineVariant?: "dashed" | "solid" | "dotted";
}[] = [
  {
    position: "Graduate Software Engineer",
    company: "Lockheed Martin",
    date: "2026 -",
    lineVariant: "dashed"
  },
  {
    position: "BSc Computer Science",
    company: "The University of Sheffield",
    date: "2023 - 2026"
  },
  {
    position: "A Levels",
    company: "Sir Isaac Newton Sixth Form",
    description:"Maths, Physics and Computer Science",
    date: "2021 - 2023"
  },
]

export default function Career() {
  return (
    <Stack>
      <Timeline active={1} reverseActive bulletSize={25}>
        {items.map((i) => (
          <TimelineItem title={i.position} {...(i.lineVariant && { lineVariant: i.lineVariant })}>
            <Text>{i.company}</Text>
            {i.description &&
              <Text c="dimmed">{i.description}</Text>
            }
            <Text c="dimmed" size="sm">{i.date}</Text>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  )
}