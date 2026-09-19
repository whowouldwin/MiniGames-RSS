import arrowBackIcon from "../../assets/icons/arrow-back.svg";
import arrowForwardIcon from "../../assets/icons/arrow-forward.svg";

import { createGameCard } from "../game-card";

import { games } from "./carousel-data";
import { createNavigationButton } from "./create-navigation-button";

import "./carousel.scss";

export const createCarousel = (): HTMLElement => {
  const section: HTMLElement = document.createElement("section");
  section.className = "carousel";

  const header: HTMLDivElement = document.createElement("div");
  header.className = "carousel__header";

  const heading: HTMLDivElement = document.createElement("div");
  heading.className = "carousel__heading";

  const accent: HTMLSpanElement = document.createElement("span");
  accent.className = "carousel__accent";
  accent.setAttribute("aria-hidden", "true");

  const title: HTMLHeadingElement = document.createElement("h2");
  title.className = "carousel__title";
  title.textContent = "New Games";

  heading.append(accent, title);

  const navigation: HTMLDivElement = document.createElement("div");
  navigation.className = "carousel__navigation";

  navigation.append(
    createNavigationButton(arrowBackIcon, "Previous games", "previous"),
    createNavigationButton(arrowForwardIcon, "Next games", "next"),
  );

  const track: HTMLDivElement = document.createElement("div");
  track.className = "carousel__track";

  for (const game of games) {
    track.append(createGameCard(game));
  }

  header.append(heading, navigation);
  section.append(header, track);

  return section;
};
