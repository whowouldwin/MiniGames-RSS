import type { AppPage } from "../../app/app-page";
import { navigationItems } from "./navigation-items";

export const createNavigationList = (
  blockName: string,
  activePage: AppPage,
  navigateTo: (page: AppPage) => void,
): HTMLUListElement => {
  const list: HTMLUListElement = document.createElement("ul");

  list.className = `${blockName}__list`;

  for (const { label, href, page } of navigationItems) {
    const item: HTMLLIElement = document.createElement("li");
    const link: HTMLAnchorElement = document.createElement("a");

    link.className = `${blockName}__link`;
    link.href = href;
    link.textContent = label;
    if (page) link.dataset.page = page;

    if (page === activePage) {
      link.classList.add(`${blockName}__link--active`);
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", (event: MouseEvent): void => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;

      event.preventDefault();
      navigateTo(page ?? "home");
    });

    item.append(link);
    list.append(item);
  }

  return list;
};

export const updateNavigationState = (
  root: ParentNode,
  activePage: AppPage,
): void => {
  for (const link of root.querySelectorAll<HTMLAnchorElement>("a[data-page]")) {
    const navigation: HTMLElement | null = link.closest(
      ".main-navigation, .mobile-menu",
    );
    const blockName: string | undefined = navigation?.classList.contains(
      "mobile-menu",
    )
      ? "mobile-menu"
      : navigation?.classList.contains("main-navigation")
        ? "main-navigation"
        : undefined;

    if (!blockName) continue;

    const isActive: boolean = link.dataset.page === activePage;

    link.classList.toggle(`${blockName}__link--active`, isActive);
    link.toggleAttribute("aria-current", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
  }
};
