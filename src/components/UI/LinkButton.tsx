import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({
  href,
  children,
  className = "",
}: LinkButtonProps) {
  const baseClasses =
    "text-sm font-bold hover:underline uppercase tracking-[1px] transition-colors duration-200";

  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
}
