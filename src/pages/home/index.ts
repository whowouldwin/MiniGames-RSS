import { createCarousel } from "../../components/carousel";
import { createGameDevelopment } from "../../components/game-dev";
import { createHero } from "../../components/hero";
import { createLeaderboard } from "../../components/leaderboard";

export const createHomePage = (): HTMLElement => {
  const main: HTMLElement = document.createElement("main");

  main.append(
    createHero(),
    createCarousel(),
    createLeaderboard(),
    createGameDevelopment(),
  );

  return main;
};
