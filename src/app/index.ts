import { createHeader } from "../components/header";
import { createFooter } from "../components/footer";
import { createAuthDialog } from "../components/auth-dialog";
import { createHomePage } from "../pages/home";

export const createApp = (): HTMLDivElement => {
  const app: HTMLDivElement = document.createElement("div");
  app.className = "app";
  const auth: ReturnType<typeof createAuthDialog> = createAuthDialog();
  app.append(createHeader(auth.open), createHomePage(), createFooter(), auth.element);
  return app;
};
