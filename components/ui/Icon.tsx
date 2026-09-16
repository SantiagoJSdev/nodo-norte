import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "arrow-down"
  | "check-circle"
  | "verified"
  | "search"
  | "terminal"
  | "schema"
  | "headset"
  | "server"
  | "layout"
  | "smartphone"
  | "sparkles"
  | "shield-check"
  | "chat"
  | "phone"
  | "mail"
  | "menu"
  | "close"
  | "globe";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const paths: Record<IconName, ReactNode> = {
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  "arrow-down": (
    <>
      <path d="M12 5v14" />
      <path d="m6 11 6 6 6-6" />
    </>
  ),
  "check-circle": (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </>
  ),
  verified: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  terminal: (
    <>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </>
  ),
  schema: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
      <path d="M6 8.5v7M8.5 6h7a2.5 2.5 0 0 1 0 5h-7M8.5 18h7a2.5 2.5 0 0 0 0-5h-.5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2" y="14" width="4" height="6" rx="1.5" />
      <rect x="18" y="14" width="4" height="6" rx="1.5" />
      <path d="M20 19.5a4 4 0 0 1-4 3.5h-3" />
    </>
  ),
  server: (
    <>
      <rect x="2.5" y="3.5" width="19" height="6.5" rx="2" />
      <rect x="2.5" y="14" width="19" height="6.5" rx="2" />
      <path d="M6.5 6.75h.01M6.5 17.25h.01" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M3 9h18M9 9v12" />
    </>
  ),
  smartphone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8Z" />
      <path d="M19 15.5 20 18l2.5 1-2.5 1-1 2.5-1-2.5L15.5 19l2.5-1Z" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 3 4.5 6v5c0 4.5 3.2 8 7.5 9 4.3-1 7.5-4.5 7.5-9V6Z" />
      <path d="m9 11.5 2 2 4-4" />
    </>
  ),
  chat: (
    <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z" />
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.22a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18M6 6l12 12" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
