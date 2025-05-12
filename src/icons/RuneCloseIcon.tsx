// components/icons/RuneCloseIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneCloseIcon: React.FC<RuneIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5" // Sedikit lebih tebal
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
    {/* Tambahkan 'serif' kecil di ujung jika ingin lebih gaya runic? */}
    {/* <path d="M5 7 L6 6 L7 5"/> <path d="M17 5 L18 6 L19 7"/> 
    <path d="M5 17 L6 18 L7 19"/> <path d="M17 19 L18 18 L19 17"/> */}
  </svg>
);
// Representasi X dengan gaya runic

export default RuneCloseIcon;
