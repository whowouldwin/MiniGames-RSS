import { createHeader } from "../components/header";
import { createFooter } from "../components/footer";
import { createAuthDialog } from "../components/auth-dialog";
import { updateNavigationState } from "../components/navigation/create-navigation-list";
import { createHomePage } from "../pages/home";
import { createLibraryPage } from "../pages/library";
import type { AppPage } from "../types/app-page";

const createPage = (page: AppPage): HTMLElement =>
  page === "home" ? createHomePage() : createLibraryPage();

export const createApp = (): HTMLDivElement => {
  const app: HTMLDivElement = document.createElement("div");
  app.className = "app";

  const auth: ReturnType<typeof createAuthDialog> = createAuthDialog();
  const pageOutlet: HTMLDivElement = document.createElement("div");
  pageOutlet.className = "app__page";
  pageOutlet.append(createHomePage());

  const navigateTo = (page: AppPage): void => {
    pageOutlet.replaceChildren(createPage(page));
    updateNavigationState(header, page);
  };

  const header: HTMLElement = createHeader(auth.open, "home", navigateTo);
  app.append(header, pageOutlet, createFooter(), auth.element);

  return app;
};
