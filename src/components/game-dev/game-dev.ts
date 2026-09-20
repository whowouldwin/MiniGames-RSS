import illustration from "../../assets/images/game-developer.png";
import uploadIcon from "../../assets/icons/upload.svg";
import { createButton } from "../ui/button";
import "./game-dev.scss";

export const createGameDev = (): HTMLElement => {
  const section: HTMLElement = document.createElement("section");
  section.className = "game-dev";
  section.setAttribute("aria-labelledby", "game-dev-title");
  section.innerHTML = `
    <img class="game-dev__illustration" src="${illustration}" alt="An illustrated game developer workspace" />
    <div class="game-dev__card">
      <h2 id="game-dev-title">Are You a Game Developer?</h2>
      <p class="game-dev__description">Want to see your game on MiniGames? We're always looking for fun,<br class="game-dev__break" /> engaging mini games to add to our platform. Submit your game<br class="game-dev__break" /> and reach thousands of players!</p>
      <p class="game-dev__contact">or contact us at developers@minigames.com</p>
    </div>`;
  const button: HTMLButtonElement = createButton(
    "Submit Form",
    "filled",
    "large",
  );
  button.classList.add("game-dev__button");
  const icon: HTMLImageElement = document.createElement("img");
  icon.src = uploadIcon;
  icon.alt = "";
  button.prepend(icon);
  section.querySelector(".game-dev__contact")?.before(button);
  return section;
};
