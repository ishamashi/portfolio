// components/icons/RavenRuneIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RavenRuneIcon: React.FC<RuneIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" // Ukuran dasar
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5" // Bisa sedikit lebih tipis untuk detail
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Kepala dan Paruh */}
    <path d="M16.5 6.5C16.5 6.5 15 4 13 4C11 4 10 6 10 8C10 10 12 11 12 11" />
    <path d="M13 4L12 2" />
    <path d="M12 11L8 9" />

    {/* Badan dan Sayap (sederhana) */}
    <path d="M12 11C12 11 10 17 7 18" />
    <path d="M12 11C12 11 14 17 17 18" />
    <path d="M7 18C7 18 4 15 3 12" />
    <path d="M17 18C17 18 20 15 21 12" />

    {/* Ekor (opsional, sederhana) */}
    <path d="M7 18L9 22" />
    <path d="M17 18L15 22" />
  </svg>
);
// Ini adalah desain placeholder yang sangat abstrak.
// Anda mungkin ingin mencari atau membuat SVG gagak yang lebih baik
// dengan gaya geometris/runic.
export default RavenRuneIcon;
