import type { AppPage } from "../../types/app-page";

export interface NavigationItem {
  label: string;
  href: string;
  page: AppPage;
}

const homeItem: NavigationItem = {
  label: "Home",
  href: "./",
  page: "home",
};

const libraryItem: NavigationItem = {
  label: "Library",
  href: "./library",
  page: "library",
};

const createHomeItem = (label: string): NavigationItem => ({
  ...homeItem,
  label,
});

const tournamentsItem: NavigationItem = createHomeItem("Tournaments");

export const navigationItems: readonly NavigationItem[] = [
  homeItem,
  libraryItem,
  tournamentsItem,
  createHomeItem("Community"),
];

export const footerNavigationItems: readonly NavigationItem[] = [
  homeItem,
  libraryItem,
  createHomeItem("Categories"),
  tournamentsItem,
];
