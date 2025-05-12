// components/icons/RuneForgingsIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneForgingsIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Kepala Palu */}
    <path d="M4 10 L10 4 L14 8 L8 14 Z" />
    <path d="M4 10 L14 20 L20 14 L10 4" />
    {/* Gagang Palu */}
    <line x1="10" y1="14" x2="16" y2="20" />
    <line x1="13" y1="17" x2="14" y2="16" />
  </svg>
);
// Representasi palu geometris

export default RuneForgingsIcon;
