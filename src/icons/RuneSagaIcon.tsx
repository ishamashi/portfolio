// components/icons/RuneSagaIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneSagaIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Gulungan kiri */}
    <path d="M8 3 H4 C3 3 2 4 2 5 V19 C2 20 3 21 4 21 H8" />
    {/* Gulungan kanan */}
    <path d="M16 3 H20 C21 3 22 4 22 5 V19 C22 20 21 21 20 21 H16" />
    {/* Kertas/Perkamen di tengah */}
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
);
// Representasi gulungan terbuka sederhana

export default RuneSagaIcon;
