// components/icons/RuneFehuGithubIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneFehuGithubIcon: React.FC<RuneIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Kurung sudut kiri */}
    <path d="M8 4 L3 9 L3 15 L8 20" />
    {/* Kurung sudut kanan */}
    <path d="M16 4 L21 9 L21 15 L16 20" />
    {/* Elemen Fehu di tengah */}
    <path d="M12 6 L12 18" /> {/* Stem */}
    <path d="M12 9 L15 12" /> {/* Ranting atas */}
    <path d="M12 13 L15 16" /> {/* Ranting bawah */}
  </svg>
);

export default RuneFehuGithubIcon;
