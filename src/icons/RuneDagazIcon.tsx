// components/icons/RuneDagazIcon.tsx
import React from "react";

// Gunakan type alias di sini
type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneDagazIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L20 12L12 22L4 12Z" />
    <path d="M4 12H20" />
  </svg>
);

export default RuneDagazIcon;
