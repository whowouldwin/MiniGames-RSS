import { createHeader } from "../components/header";
import { createHero } from "../components/hero";
import { createCarousel } from "../components/carousel";

import { createLeaderboard } from "../components/leaderboard";

import { createGameDevelopment } from "../components/game-dev";

export const createApp = (): HTMLDivElement => {
  const app: HTMLDivElement = document.createElement("div");

  app.className = "app";
  app.append(
    createHeader(),
    createHero(),
    createCarousel(),
    createLeaderboard(),
    createGameDevelopment(),
  );
  return app;
};
