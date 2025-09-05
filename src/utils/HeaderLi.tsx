"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderLiProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  sidebar?: boolean;
}

function HeaderLi({ href, children, className, sidebar = false }: HeaderLiProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (sidebar) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a className={cn("sidebar-nav-item", { "active": isActive }, className)}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className={cn(
          "relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          "hover:bg-gray-100 dark:hover:bg-gray-800/50",
          {
            "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20": isActive,
          },
          className
        )}
      >
        {children}
        {isActive && (
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-primary rounded-full" />
        )}
      </a>
    </Link>
  );
}

export default HeaderLi;
