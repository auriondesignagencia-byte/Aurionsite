# BEHAVIORS — agenciadigitals.com.br

## Global
- **No smooth-scroll library** (native scroll). `scroll-behavior` normal.
- Fonts: **Open Sans** (300/400/600/700) for everything; **Qwigley** (cursive script, 400) for decorative accents. One **green** accent `#266348`.
- Body bg **white** `rgb(255,255,255)`, default text **black**. Hero + footer are dark.

## Header (`#header`) — fixed
- Position: `fixed`, height ~95px, `background: transparent`, no shadow, no backdrop.
- **Stays transparent even when scrolled** over white sections; logo (white AGD symbol) and "MENU" label remain **white** at all scroll positions. (Verified at scrollY 0 and 1200 — no change.) Clone keeps it transparent throughout.
- "MENU" (right) opens the full-screen overlay menu (`#menu-session`). Hamburger/label click → toggle.

## Menu overlay (`#menu-session`)
- Full-screen dark overlay with large nav links. Toggled by MENU click; close via X.
- Links: Home(`#`), Sobre nós, O que fazemos(`#o-que-fazemos`), Nossos cases(`#portfolio-session`), contato(`#contato`), Conteúdos, Treinamentos, Vagas.

## Hero (`#AGD-hero-home`) — static
- Full-bleed dark magenta image (`agd-hero-v4.jpg`) + red radial gradient overlay `radial-gradient(at -100px 100px, rgba(255,0,0,0.13) -100px, rgba(255,255,255,0) 1200px)`.
- H1 60px/66px Open Sans 700 white: "Transformando marcas\nem **Objeto de Desejo**" — last phrase in **Qwigley 90px**.
- Subhead Open Sans 300 20px/30px white.
- CTA: outline **pill** button — transparent bg, `1px solid white`, padding `20px 40px`, radius `50px`, Open Sans 600 16px white. Label "Quero ser uma marca desejada" → `#contato`.

## Client logos (`#section-47-19 .c-owl-s`) — auto marquee
- Owl-carousel auto-scroll of white client logos on white bg. Label "Marcas que confiam no nosso trabalho".
- Logos: Danone, AJUSTE_RETORNA, Gerdau, Intel, Chicralla, Servier, 1prix, logo_branco, VoIPms, canaloff, logo-vertical. (white/mono versions)
- Clone: infinite CSS marquee.

## Sections 4–8 — static, white bg
- Section H2: Open Sans 700 **40px** black, with **Qwigley 65px** script accents ("sem performance", "não resistem ao tempo") and one green span ("impacta os seus resultados", `#266348`).
- `#section-976-19`: intro "Não existe beleza sem performance" + lead paragraph.
- `#section-199-19`: two problem cards (H3 "Falta de estratégia" / "Falta de sofisticação") + iPhone mockup (`iphone-13-phiocare_frente_v2`).
- `#o-que-fazemos`: services — 4 items (Branding, Performance, Audiovisual, Web Design) each H3 + description; MacBook mockup (`MacBook-Pro-2021-Mockup`, 2000×1114). Card hover likely subtle.
- `#section-114-19`: value-prop paragraphs + device image (`iPhone-11-Mockup-03-2`).
- `#section-151-19`: portfolio intro heading + lead.

## Portfolio (`#portfolio-session`) — static
- A **single large image** `AGD-portfolio-2026-1.png` (full showcase). No carousel logic needed.

## Footer (`#section-401-25`) — dark `rgb(25,25,25)`
- White footer logo `logotipo-v2-branco.svg`.
- RIO DE JANEIRO: Av. das Américas, 3434 - Cond. Mario Henrique Simonsen Bloco 4, Sala 409 Barra da Tijuca, Rio de Janeiro - RJ
- SÃO PAULO: Av. Brigadeiro Faria Lima, 1811, Sala 1119 Jardim Paulistano, São Paulo - SP
- contato@agenciadigitals.com.br · +55 21 99573-7570
- CTA "Quero ser uma marca desejada" → `#contato`.

## Responsive
- Desktop 1440 / tablet 768 / mobile 390. Multi-column sections (problem cards, services) stack to single column on mobile; hero font scales down.
