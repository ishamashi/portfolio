// components/icons/RuneOthalaIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneOthalaIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L20 7V17L12 22L4 17V7Z" />
    <path d="M12 2L12 12" />
    <path d="M4 7L12 12L20 7" />
    <path d="M8 12L12 16L16 12" />
  </svg>
);

export default RuneOthalaIcon;
