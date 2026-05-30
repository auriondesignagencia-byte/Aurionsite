import type { SVGProps } from "react";

/** Three-line hamburger used in the header MENU control. */
export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 16" fill="none" aria-hidden="true" {...props}>
      <line x1="0" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="2" />
      <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="2" />
      <line x1="0" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** Close (X) for the full-screen menu overlay. */
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
      <line x1="21" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
