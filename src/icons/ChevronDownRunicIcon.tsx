// components/icons/ChevronDownRunicIcon.tsx
import React from 'react';

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const ChevronDownRunicIcon: React.FC<RuneIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" // Ukuran dasar
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5" // Sedikit lebih tebal untuk kesan 'ukiran'
    strokeLinecap="round" // Meskipun runcing, 'round' sering terlihat lebih baik di render kecil
    strokeLinejoin="round"
    {...props}
  >
    {/* Bentuk V sederhana dengan garis lurus */}
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default ChevronDownRunicIcon;