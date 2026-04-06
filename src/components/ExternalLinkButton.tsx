import { Button } from "@mantine/core";

interface ExternalLinkButtonProps {
  text: string;
  link_url: string;
}

export default function ExternalLinkButton({text, link_url}: ExternalLinkButtonProps) {
  return (
    <Button
      component="a"
      href={link_url}
      target="_blank"
      rel="noopener noreferrer"
      variant="default"
    >
      {text}
    </Button>
  )
}