// components/icons/RuneDagazIcon.tsx
import React from "react";

interface RuneIconProps extends React.SVGProps<SVGSVGElement> {}

const RuneDagazIcon: React.FC<RuneIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props} // Sebarkan props seperti className, dll.
  >
    <path d="M12 2L20 12L12 22L4 12Z" />
    <path d="M4 12H20" />
  </svg>
);
// Ini adalah representasi yang sangat disederhanakan dari Dagaz (ᛞ)
// Anda bisa menggantinya dengan path SVG yang lebih akurat untuk rune Dagaz
export default RuneDagazIcon;
