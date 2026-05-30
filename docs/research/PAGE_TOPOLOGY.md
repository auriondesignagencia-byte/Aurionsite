# Page Topology — agenciadigitals.com.br (home)

Built on WordPress + **Oxygen Builder** (`oxygen-is-not-a-theme`, `ct-section` classes).
Page is white-background with black text, EXCEPT the dark hero (image bg) and the dark footer (`rgb(25,25,25)`).
Total height ~7589px @1440. No smooth-scroll library detected (native scroll). No hero video (class `oxy-video-background` present but only a JPG bg is used).

## Layout model
- `#header` — **fixed**, transparent, full width, z-top. Logo (white AGD symbol + "AGENCIA DIGITALS") left, "MENU" hamburger right.
- `#menu-session` — off-canvas full-screen menu overlay (hidden off-screen until hamburger clicked).
- Content flows in normal document order below.

## Sections (top → bottom)
| # | id | Name | bg | Interaction |
|---|----|------|----|-------------|
| 0 | `#header` | **Header / Nav** | transparent → (check scroll) | fixed; hamburger opens menu overlay |
| 1 | `#menu-session` | **Menu overlay** | dark | click hamburger to toggle |
| 2 | `#AGD-hero-home` | **Hero** | `agd-hero-v4.jpg` (dark magenta) + red radial gradient | static |
| 3 | `#section-47-19` `.c-owl-s` | **Client logo carousel** | white | auto-scroll marquee (owl carousel) |
| 4 | `#section-976-19` | **"Não existe beleza sem performance"** intro | white | static |
| 5 | `#section-199-19` | **Two problem cards** (Falta de estratégia / sofisticação) + iPhone mockup | white | static |
| 6 | `#o-que-fazemos` | **Services** (Branding/Performance/Audiovisual/Web Design) + MacBook mockup | white | static (hover on cards) |
| 7 | `#section-114-19` | **"Marcas que não vendem"** value-prop text block + device image | white | static |
| 8 | `#section-151-19` | **Portfolio intro heading** | white | static |
| 9 | `#portfolio-session` | **Portfolio showcase** — single large image `AGD-portfolio-2026-1.png` | white | static |
| 10 | `#section-401-25` | **Footer** | `rgb(25,25,25)` | static; link hovers |

## Component build plan (this clone)
1. `Header` (fixed nav + hamburger) + `MobileMenu` overlay
2. `Hero`
3. `ClientLogos` (marquee)
4. `PerformanceIntro` (#section-976-19 + #section-199-19 problem cards + iPhone)
5. `Services` (#o-que-fazemos)
6. `ValueProp` (#section-114-19)
7. `PortfolioIntro` (#section-151-19) + `PortfolioShowcase` (#portfolio-session)
8. `Footer`
