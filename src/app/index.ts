import { createHeader } from "../components/header";
import { createHero } from "../components/hero";
import { createCarousel } from "../components/carousel";
import { createLeaderboard } from "../components/leaderboard";
import { createGameDevelopment } from "../components/game-dev";
import { createFooter } from "../components/footer";
import { createAuthDialog } from "../components/auth-dialog";

export const createApp = (): HTMLDivElement => {
  const app: HTMLDivElement = document.createElement("div");
  app.className = "app";
  const auth: ReturnType<typeof createAuthDialog> = createAuthDialog();
  const main: HTMLElement = document.createElement("main");
  main.append(
    createHero(),
    createCarousel(),
    createLeaderboard(),
    createGameDevelopment(),
  );
  app.append(createHeader(auth.open), main, createFooter(), auth.element);
  return app;
};
