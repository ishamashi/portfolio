// components/icons/RuneAnsuzIcon.tsx
import React from "react";

type RuneIconProps = React.SVGProps<SVGSVGElement>;

const RuneAnsuzIcon: React.FC<RuneIconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16" // Default width, bisa di-override oleh props
      height="16" // Default height, bisa di-override oleh props
      viewBox="0 0 24 24"
      fill="none" // Penting: fill="none" agar bisa diwarnai via CSS `fill` jika path SVG punya `fill` sendiri
      stroke="currentColor" // Default stroke ke warna teks saat ini, bisa di-override
      strokeWidth="2" // Default stroke-width, bisa di-override
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Sebarkan props lainnya (seperti className, onClick, dll.)
    >
      {/* Path utama yang menyerupai Ansuz atau bentuk tombak/panah */}
      <path d="M12 2L8 6v12l4 4 4-4V6z" />
      {/* 'Sayap' atau elemen tambahan di kiri */}
      <path d="M8 6l-4 4 4 4" />
      {/* 'Sayap' atau elemen tambahan di kanan */}
      <path d="M16 6l4 4-4 4" />
    </svg>
  );
};

export default RuneAnsuzIcon;
