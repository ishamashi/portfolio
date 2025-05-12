// components/icons/RuneDagazIcon.tsx
import React from "react";

// Gunakan type alias di sini
type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneDagazIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="1" y1="1" x2="22" y2="22" />
    <line x1="22" y1="1" x2="1" y2="22" />
    <line x1="1" y1="1" x2="1" y2="22" />
    <line x1="22" y1="1" x2="22" y2="22" />
  </svg>
);

export default RuneDagazIcon;
