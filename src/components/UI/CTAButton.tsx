import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "fill-white" | "fill-dark" | "outline-white" | "outline-dark";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "fill-white",
  className = "",
  onClick,
  target,
  rel,
}: CTAButtonProps) {
  const baseClasses =
    "px-8 py-3 rounded-full border-4 transition-colors duration-200 font-medium uppercase text-sm tracking-[1px] text-center flex items-center justify-center gap-2";

  const variantClasses = {
    "fill-white":
      "bg-white text-black border-white hover:bg-gray-200 hover:border-gray-200",
    "fill-dark":
      "bg-[#282828] text-white border-[#282828] hover:bg-gray-700 hover:border-gray-700",
    "outline-white": "border-white text-white hover:bg-white hover:text-black",
    "outline-dark":
      "border-[#282828] text-[#282828] hover:bg-[#282828] hover:text-white",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  ) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses} onClick={onClick}>
      {children}
    </Link>
  );
}
