# Story 1 verification

Target deployment verified on 20 September 2026 with Node.js 24.19.0 and Google Chrome 153.0.8010.48.

This prepared implementation was transferred into MiniGames-RSS. The published [target application](https://whowouldwin.github.io/MiniGames-RSS/) was freshly checked on 20 September 2026 after [successful deployment](https://github.com/whowouldwin/MiniGames-RSS/actions/runs/35509770662). Screenshots below were captured from that target deployment. The application source tree is unchanged from the completed source implementation; deployment paths and repository links were adapted.

## Acceptance matrix

| Requirement                                                     | Result | Points | Evidence                                                      |
| --------------------------------------------------------------- | ------ | -----: | ------------------------------------------------------------- |
| RSS-QS-1-1-1: Repository, README, dependencies and ignore rules | Pass   |     10 | Repository files and clean installation in GitHub Actions     |
| RSS-QS-1-1-2: Organized component/style/asset folders           | Pass   |     10 | Source tree review                                            |
| RSS-QS-1-1-3: Official RS PR structure                          | Pass   |      5 | Five required PR fields plus self-check                       |
| RSS-QS-1-2-1: Development and production bundler                | Pass   |     10 | Vite dev, production build and preview                        |
| RSS-QS-1-2-2: Strict TypeScript                                 | Pass   |      5 | Type check; no explicit any                                   |
| RSS-QS-1-2-3: ESLint, Unicorn, noInlineConfig                   | Pass   |      5 | npm run lint; configuration review                            |
| RSS-QS-1-2-4: Prettier configuration                            | Pass   |      5 | npm run format:check                                          |
| RSS-QS-1-2-5: Commit and pre-push hooks                         | Pass   |      8 | Commitlint; failing-lint hook regression                      |
| RSS-QS-1-2-6: Sass tokens and shared utilities                  | Pass   |     10 | Tokens, mixins and component constants                        |
| RSS-QS-1-2-7: SPA with generated content                        | Pass   |     20 | Empty static body except the entry script; generated main     |
| RSS-QS-1-3-1: ESLint script                                     | Pass   |      5 | npm run lint                                                  |
| RSS-QS-1-3-2: Prettier script                                   | Pass   |      5 | npm run format and format:check                               |
| RSS-QS-1-4-1: Guest header                                      | Pass   |     15 | Three reference widths; auth buttons                          |
| RSS-QS-1-4-2: Full-screen mobile menu                           | Pass   |     25 | Open, own close button, Escape, auth transition, no overflow  |
| RSS-QS-1-4-3: Hero                                              | Pass   |     15 | Reference overlays; presentation-only button                  |
| RSS-QS-1-4-4: Static carousel                                   | Pass   |     25 | Three reference widths; 288px threshold at 18 widths          |
| RSS-QS-1-4-5: Leaderboard                                       | Pass   |     15 | Supplied JSON; semantic table; reference column coordinates   |
| RSS-QS-1-4-6: Developer section                                 | Pass   |     15 | Figma image/icon; responsive presentation-only CTA            |
| RSS-QS-1-4-7: Footer                                            | Pass   |     20 | Reference widths; home links, course and GitHub URLs          |
| RSS-QS-1-5-1: Auth triggers and backdrop                        | Pass   |     10 | Desktop and mobile triggers; menu closes                      |
| RSS-QS-1-5-2: Animations and dismissal                          | Pass   |     10 | Both forms; Escape, backdrop and short viewport               |
| RSS-QS-1-5-3: Login/Register switcher                           | Pass   |     10 | Tabs and inline links; no reload; selected states             |
| RSS-QS-1-5-4: Semantic form fields                              | Pass   |     10 | Labels, email/password/text types; no backend                 |
| RSS-QS-1-5-5: Auth responsive states                            | Pass   |     10 | 420px desktop/tablet; mobile and 500px height                 |
| RSS-QS-1-6-1: Global HTML validation                            | Pass   |     12 | W3C: Home, Login, Register, mobile menu: zero errors/warnings |
| Favicon: Page favicon                                           | Pass   |      4 | Bundled logo PNG and icon link                                |

Self-assessment: **294 / 294**. The final score is determined by cross-check reviewers.

## Executed checks

- `npm run check`: TypeScript, ESLint (zero warnings), Prettier and production build pass.
- Clean `npm ci` and verification succeed on GitHub Actions (Linux, Node 24).
- Browser checks use the production build and actual Chrome with device scale 1.
- Widths: 375, 376, 390, 430, 600, 647, 648, 767, 768, 769, 820, 1024, 1025, 1280, 1440, 1920, 1921 and 2560px. No horizontal page overflow; layout caps and centers at 1920px; images load; card overlays follow the exact 288px threshold.
- Both auth variants at 1920×1080, 768×1024, 375×900 and 375×500. Labels, field types, password visibility, tab and inline switching, menu handoff and Escape dismissal pass. Backdrop dismissal passes for both forms.
- Mobile menu: full-screen size, own close button and Escape pass.
- Zero JavaScript page/console errors in the final browser run.
- Production DOM snapshots submitted to the W3C Nu HTML Checker: Home, Login, Register and mobile menu each return an empty messages array. Development-only Vite style injection is not part of the production HTML.
- Reduced-motion and touch-context checks pass: keyboard tab switching, no-reload submission, restored trigger focus and menu focus loop.
- Pre-push regression: a failing ESLint process with a successful following formatter still aborts the hook.

## Visual comparison

Source Figma overlays were reviewed at 375, 768 and 1920px. Fresh target screenshots were compared side by side with the same Figma renders at these widths; the measured target page heights are listed below. Table column coordinates match the reference. Major section boundaries differ by roughly 0–5px; the assignment permits 10px. This describes the inspected layouts, not a claim that every raster pixel is identical. Font rasterization varies by platform.

| Width | Figma page height | Browser page height |
| ----- | ----------------: | ------------------: |
| 375   |              2061 |             2062.73 |
| 768   |              2241 |             2241.73 |
| 1920  |           2759.79 |             2755.14 |

- [Desktop](review/home-1920.png)
- [Tablet](review/home-768.png)
- [Mobile](review/home-375.png)
- [Login](review/auth-login.png)
- [Registration](review/auth-register.png)

## Scope and specification decisions

- The struck-through burger-to-close transformation is not required. A separate close button matches the mobile-menu design.
- The current written card rule overrides older Figma overlays: cards narrower than 288px render images only, including the mobile central card.
- Carousel arrows, Hero and Submit Form buttons are intentionally non-functional in Story 1.
- No backend, actual authentication, Google sign-in, password recovery or form validation is implemented in this stage. Forms do not submit or reload the page.
- All navigation/social links lead to Home. The footer credits use the repository owner's actual GitHub handle.
- The final `story-1` → `main` PR must remain open and unmerged. Submit that PR URL to RS App manually.
