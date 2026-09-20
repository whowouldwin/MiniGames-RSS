import type { AuthMode } from "../auth-dialog";

export const setupMobileMenu = (
  menuToggle: HTMLButtonElement,
  mobileMenu: HTMLElement,
  openAuth: (mode: AuthMode) => void,
): void => {
  mobileMenu.id = "mobile-menu";
  mobileMenu.inert = true;
  menuToggle.setAttribute("aria-controls", mobileMenu.id);
  const closeButton: HTMLButtonElement | null = mobileMenu.querySelector(
    ".mobile-menu__close",
  );
  const setOpen = (isOpen: boolean): void => {
    mobileMenu.classList.toggle("mobile-menu--open", isOpen);
    mobileMenu.inert = !isOpen;
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) closeButton?.focus();
    else menuToggle.focus();
  };
  menuToggle.addEventListener("click", (): void => {
    setOpen(true);
  });
  closeButton?.addEventListener("click", (): void => {
    setOpen(false);
  });
  for (const link of mobileMenu.querySelectorAll<HTMLAnchorElement>("a")) {
    link.addEventListener("click", (event: MouseEvent): void => {
      event.preventDefault();
      setOpen(false);
      globalThis.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  mobileMenu
    .querySelector(".mobile-menu__login-button")
    ?.addEventListener("click", (): void => {
      setOpen(false);
      openAuth("login");
    });
  mobileMenu
    .querySelector(".mobile-menu__signup-button")
    ?.addEventListener("click", (): void => {
      setOpen(false);
      openAuth("register");
    });
  document.addEventListener("keydown", (event: KeyboardEvent): void => {
    if (!mobileMenu.classList.contains("mobile-menu--open")) return;
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }
    if (event.key !== "Tab") return;
    const focusable: HTMLElement[] = [
      ...mobileMenu.querySelectorAll<HTMLElement>("a, button"),
    ];
    const first: HTMLElement | undefined = focusable[0];
    const last: HTMLElement | undefined = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });
  const resizeObserver: ResizeObserver = new ResizeObserver((): void => {
    if (
      getComputedStyle(menuToggle).display === "none" &&
      mobileMenu.classList.contains("mobile-menu--open")
    )
      setOpen(false);
  });
  resizeObserver.observe(menuToggle);
};
