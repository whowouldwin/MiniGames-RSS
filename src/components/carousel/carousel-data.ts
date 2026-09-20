import gamePreview1 from "../../assets/images/games/game-preview-1.jpg";
import gamePreview2 from "../../assets/images/games/game-preview-2.jpg";
import gamePreview3 from "../../assets/images/games/game-preview-3.jpg";
import gamePreview4 from "../../assets/images/games/game-preview-4.jpg";
import gamePreview5 from "../../assets/images/games/game-preview-5.jpg";

import type { GameCardData } from "../game-card";

export const games: readonly GameCardData[] = [
  {
    title: "Candy Crush",
    image: gamePreview1,
    rating: "",
    likes: "",
  },
  {
    title: "ISLANDERS: New Shores",
    image: gamePreview3,
    rating: "4.9",
    likes: "54.2K",
  },
  {
    title: "Vacation Cafe Simulator",
    image: gamePreview4,
    rating: "4.8",
    likes: "28.7K",
  },
  {
    title: "Winter Burrow",
    image: gamePreview5,
    rating: "4.9",
    likes: "32.4K",
  },
  {
    title: "Bubble Shooter",
    image: gamePreview2,
    rating: "4.4",
    likes: "15.8K",
  },
];
