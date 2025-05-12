// components/icons/RuneKenazIcon.tsx
import React from "react";

interface RuneIconProps extends React.SVGProps<SVGSVGElement> {}

const RuneKenazIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 4L14 12L6 20" />
    {/* <path d="M10 12H18"/> Tambahan jika ingin lebih mirip obor */}
  </svg>
);
// Representasi sederhana Kenaz (ᚲ)
export default RuneKenazIcon;
