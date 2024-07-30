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
    <li className="flex items-center justify-center " style={{ height: 35 }}>
      <Link href={href} passHref legacyBehavior>
        <a
          className={`text-orange-400 hover:text-orange-400 font-medium ${
            pathname == href ? "active-link" : ""
          }`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}

export default HeaderLi;
