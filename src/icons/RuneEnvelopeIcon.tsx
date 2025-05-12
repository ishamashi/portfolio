// components/icons/RuneEnvelopeIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneEnvelopeIcon: React.FC<RuneIconProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Kotak amplop */}
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      {/* Lipatan amplop */}
      <polyline points="3 5 12 13 21 5" />
    </svg>
  );
};

export default RuneEnvelopeIcon;
