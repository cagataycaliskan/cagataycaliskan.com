import type { Metadata } from "next";
import "./globals.css";
import LocalSwitcher from "../../components/local-switcher";
import HeaderLi from "../../utils/HeaderLi";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Maven_Pro } from "next/font/google";
import Link from "next/link";
import { useTranslations } from "next-intl";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Çağatay Çalışkan",
  description: "Generated by Çağatay Çalışkan",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const t = useTranslations();

  const translations = {
    homePage: t("homePage"),
    aboutMe: t("aboutMe"),
    contactMe: t("contactMe"),
  };

  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><text y=%2214%22 font-size=%2214%22>💻</text></svg>"
        />
      </head>
      <body className={`${mavenPro.className} min-h-screen flex flex-col`}>
        <header className="w-full flex items-center justify-between p-8">
          <div className="block md:hidden">
            <Sidebar locale={locale} translations={translations} />
          </div>

          <Link href={`/${locale}`} passHref legacyBehavior>
            <a className="hidden md:block text-orange-400 font-medium text-xl sm:text-2xl">
              Çağatay Çalışkan
            </a>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-10 mr-2 sm:mr-6">
              <HeaderLi href={`/${locale}/about`}>{t("aboutMe")}</HeaderLi>
              <HeaderLi href={`/${locale}/contact`}>{t("contactMe")}</HeaderLi>
              <LocalSwitcher />
              </ul>
          </nav>
        </header>
        <div className="flex flex-1 w-full">
          <main className="flex-grow p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
