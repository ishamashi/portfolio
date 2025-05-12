// components/about/SkillRuneCard.tsx
import React from "react";

interface SkillRuneCardProps {
  skillName: string;
  // Tambahkan prop lain jika perlu, misal level atau ikon
}

const SkillRuneCard: React.FC<SkillRuneCardProps> = ({ skillName }) => {
  return (
    <div
      className="
        skill-badge-etched /* Menggunakan gaya yang sama dari homepage */
        flex items-center justify-center 
        rounded-lg bg-background px-4 py-2.5 
        text-sm font-medium text-accent shadow-md 
        border border-border/70 
        min-w-[100px] text-center /* Ukuran minimum & text center */
        transition-all duration-300 ease-out /* Transisi lebih lengkap */
        hover:shadow-accent/20 /* Shadow lebih jelas saat hover */
      "
      title={skillName} // Tooltip sederhana
    >
      {skillName}
    </div>
  );
};

export default SkillRuneCard;
