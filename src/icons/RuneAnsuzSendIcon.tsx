// components/icons/RuneAnsuzSendIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneAnsuzSendIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Bentuk dasar pesawat kertas runic */}
    <path d="M3 11 L21 3 L13 21 L11 13 Z" /> {/* Badan utama */}
    {/* Garis internal yang meniru Ansuz */}
    <path d="M11 13 L17 7" />
    <path d="M8 16 L11 13" />
  </svg>
);
export default RuneAnsuzSendIcon;
