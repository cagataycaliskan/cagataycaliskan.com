"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function ActiveLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={`text-white hover:text-orange-400 font-medium ${
          pathname === href ? "active-link" : ""
        }`}
      >
        {children}
      </a>
    </Link>
  );
}

export default ActiveLink;
