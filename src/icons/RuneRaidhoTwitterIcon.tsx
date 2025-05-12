// components/icons/RuneRaidhoTwitterIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneRaidhoTwitterIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Bentuk dasar gelembung chat geometris */}
    <path d="M6 4 L18 4 L18 14 L13 14 L10 18 L10 14 L6 14 Z" />
    {/* Elemen Raidho di dalam */}
    <path d="M12 7 L12 11" /> {/* Stem */}
    <path d="M12 7 L15 9" /> {/* Loop atas */}
    <path d="M12 11 L15 13" /> {/* Kaki */}
  </svg>
);

export default RuneRaidhoTwitterIcon;
