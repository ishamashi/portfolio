// components/icons/RuneMannazLinkedinIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneMannazLinkedinIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Struktur utama Mannaz */}
    <path d="M6 4 L6 20" /> {/* Kiri */}
    <path d="M18 4 L18 20" /> {/* Kanan */}
    <path d="M6 12 L18 4" /> {/* Diagonal atas */}
    <path d="M6 12 L18 20" /> {/* Diagonal bawah */}
  </svg>
);

export default RuneMannazLinkedinIcon;
