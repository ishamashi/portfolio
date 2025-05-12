// components/icons/RuneAlgizIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneAlgizIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <path d="M12 12 L18 6" />
    <path d="M12 12 L6 6" />
    {/* Alternatif (lebih mirip Y terbalik):
    <path d="M12 4 L12 16"/>
    <path d="M8 10 L12 16 L16 10"/> 
    */}
  </svg>
);
// Representasi Rune Algiz (ᛉ)

export default RuneAlgizIcon;
