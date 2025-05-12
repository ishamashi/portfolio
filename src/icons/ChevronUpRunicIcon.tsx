// components/icons/ChevronUpRunicIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const ChevronUpRunicIcon: React.FC<RuneIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5" // Konsisten dengan down icon
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Bentuk ^ sederhana dengan garis lurus */}
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

export default ChevronUpRunicIcon;
