// components/icons/RuneGeboEmailIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneGeboEmailIcon: React.FC<RuneIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5" // Bisa disesuaikan
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Badan Amplop (Persegi Panjang) */}
    <path d="M4 7 L4 17 L20 17 L20 7" />
    {/* Flap dan struktur 'X' Gebo */}
    <path d="M4 7 L12 13 L20 7" />
    <path d="M10 12 L4 17" /> {/* Diagonal kiri bawah Gebo */}
    <path d="M14 12 L20 17" /> {/* Diagonal kanan bawah Gebo */}
  </svg>
);

export default RuneGeboEmailIcon;
