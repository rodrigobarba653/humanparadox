import Link from "next/link";

export type CTAButtonVariant =
  | "fill-primary"
  | "outline-primary"
  | "fill-white"
  | "fill-dark"
  | "outline-white"
  | "outline-dark";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: CTAButtonVariant;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

const baseClasses =
  "px-8 py-3 rounded-full border-4 transition-colors duration-200 font-medium uppercase text-sm tracking-[1px] text-center flex items-center justify-center gap-2";

const variantClasses: Record<CTAButtonVariant, string> = {
  "fill-primary":
    "bg-button-primary text-almost-black border-button-primary hover:bg-button-primary-hover hover:border-button-primary-hover",
  "outline-primary":
    "border-button-primary text-button-primary hover:bg-button-primary hover:border-button-primary hover:text-almost-black",
  "fill-white":
    "bg-white text-black border-white hover:bg-gray-200 hover:border-gray-200",
  "fill-dark":
    "bg-almost-black text-white border-almost-black hover:bg-gray-700 hover:border-gray-700",
  "outline-white": "border-white text-white hover:bg-white hover:text-black",
  "outline-dark":
    "border-almost-black text-almost-black hover:bg-almost-black hover:text-white",
};

export default function CTAButton({
  href,
  children,
  variant = "fill-primary",
  className = "",
  onClick,
  target,
  rel,
}: CTAButtonProps) {
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
