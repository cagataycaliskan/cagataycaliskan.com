"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function HeaderLi({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        <a
          className={`text-orange-400 hover:text-orange-400 font-medium ${
            pathname === href ? "active-link" : ""
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}

export default HeaderLi;
