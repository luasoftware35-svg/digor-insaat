import Image from "next/image";
import Link from "next/link";

const sizes = {
  header: "h-12 w-auto sm:h-[4.35rem]",
  footer: "h-16 w-auto sm:h-[5.25rem]",
};

export function Logo({
  tone = "light",
  size = "header",
  className = "",
}: {
  tone?: "light" | "dark";
  size?: keyof typeof sizes;
  className?: string;
}) {
  const src = tone === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <Link
      href="/"
      aria-label="Digor Group ana sayfa"
      className={`inline-flex items-center transition duration-300 hover:opacity-80 ${className}`}
    >
      <Image
        src={src}
        alt="Digor Group"
        width={686}
        height={618}
        priority
        className={`${sizes[size]} object-contain object-left`}
      />
    </Link>
  );
}
