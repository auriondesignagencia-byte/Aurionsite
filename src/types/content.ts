export interface NavLink {
  label: string;
  href: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
  /** optional per-logo height tuning in px */
  height?: number;
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface OfficeAddress {
  city: string;
  lines: string;
}
