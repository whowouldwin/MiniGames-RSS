export type CarouselNavigationVariant = "previous" | "next";

export const createNavigationButton = (
  iconSource: string,
  label: string,
  variant: CarouselNavigationVariant,
): HTMLButtonElement => {
  const button: HTMLButtonElement = document.createElement("button");

  button.className = `carousel__navigation-button carousel__navigation-button--${variant}`;

  button.type = "button";
  button.setAttribute("aria-label", label);

  const icon: HTMLImageElement = document.createElement("img");
  icon.className = "carousel__navigation-icon";
  icon.src = iconSource;
  icon.alt = "";

  button.append(icon);

  return button;
};
