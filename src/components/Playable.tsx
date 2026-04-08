import { Text } from "@mantine/core";
import type { Play } from "../types/project";
import ExternalLinkButton from "./ExternalLinkButton";

export default function Playable({game}: {game: Play}) {
  return (
    <>
    <div className="mt-4 w-full aspect-video overflow-hidden">
      <div className="w-[200%] h-[200%] scale-[0.5] origin-top-left">
        <iframe 
          frameBorder="0" 
          src={game.src} 
          allowFullScreen 
          width="100%" 
          className="w-full h-full"
        >
          <a href={game.link}>{game.text}</a>
        </iframe>
      </div>
    </div>

    <Text my="sm">Limited compatibility for playing here. If it is not working then visit the itch.io page.</Text>
    <ExternalLinkButton text="Play on itch.io" link_url={game.link}></ExternalLinkButton>
  </>
  )
}