import type { AppPage } from "../../types/app-page";

export interface NavigationItem {
  label: string;
  href: string;
  page?: AppPage;
}

export const navigationItems: readonly NavigationItem[] = [
  {
    label: "Home",
    href: "./",
    page: "home",
  },
  {
    label: "Library",
    href: "./library",
    page: "library",
  },
  {
    label: "Tournaments",
    href: "./",
  },
  {
    label: "Community",
    href: "./",
  },
];
