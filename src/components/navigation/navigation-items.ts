import type { AppPage } from "../../types/app-page";

export interface NavigationItem {
  label: string;
  href: string;
  page: AppPage;
}

const pageHrefs: Record<AppPage, string> = {
  home: "./",
  library: "./library",
};

const createNavigationItem = (
  label: string,
  page: AppPage,
): NavigationItem => ({
  label,
  href: pageHrefs[page],
  page,
});

const homeItem: NavigationItem = createNavigationItem("Home", "home");
const libraryItem: NavigationItem = createNavigationItem("Library", "library");
const tournamentsItem: NavigationItem = createNavigationItem(
  "Tournaments",
  "home",
);

export const navigationItems: readonly NavigationItem[] = [
  homeItem,
  libraryItem,
  tournamentsItem,
  createNavigationItem("Community", "home"),
];

export const footerNavigationItems: readonly NavigationItem[] = [
  homeItem,
  libraryItem,
  createNavigationItem("Categories", "home"),
  tournamentsItem,
];
