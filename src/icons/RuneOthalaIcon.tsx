// components/icons/RuneOthalaIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneOthalaIcon: React.FC<RuneIconProps> = (props) => (
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
    {...props}
  >
    <path d="M12 2 L18 8 L12 14 L6 8 Z" />
    <path d="M12 13 L6 20" />
    <path d="M12 13 L18 20" /> 
  </svg>
);

// Alternatif path jika ingin kaki lebih lurus dari titik bawah wajik
// const RuneOthalaIcon: React.FC<RuneIconProps> = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     {/* Wajik */}
//     <path d="M12 2 L19 9 L12 16 L5 9 Z" />
//     {/* Kaki */}
//     <line x1="8.5" y1="12.5" x2="5" y2="22" /> {/* Dari sisi wajik ke bawah */}
//     <line x1="15.5" y1="12.5" x2="19" y2="22" /> {/* Dari sisi wajik ke bawah */}
//   </svg>
// );

export default RuneOthalaIcon;
