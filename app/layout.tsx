import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./styles/globals.css";
import Link from "next/link";
import HeaderLi from "@/utils/HeaderLi";
import Sidebar from "@/components/Sidebar/Sidebar";

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Çağatay Çalışkan",
  description: "Generated by Çağatay Çalışkan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22><text y=%2214%22 font-size=%2214%22>💻</text></svg>"
        />
      </head>
      <body className={`${mavenPro.className} min-h-screen flex flex-col`}>
        {/* Header */}
        <header className="w-full flex items-center justify-between p-8">
          <div className="block md:hidden">
            <Sidebar />
          </div>

          <Link href="/" passHref legacyBehavior>
            <a className="hidden md:block text-orange-400 font-medium text-xl sm:text-2xl">
              Çağatay Çalışkan
            </a>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-10 mr-2 sm:mr-6">
              <HeaderLi href="/about">ABOUT ME</HeaderLi>
              <HeaderLi href="/contact">CONTACT ME</HeaderLi>
            </ul>
          </nav>
        </header>
        <div className="flex flex-1 w-full">
          {/* Sidebar */}
          <aside className="w-64 text-white flex flex-col p-4 space-y-4 fixed h-full justify-end ">
            <div className="mb-48 pl-4 lg:pl-8 xl:pl-16 hidden md:block">
              <a
                href="https://github.com/cagataycaliskan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="35" height="35" viewBox="0 0 24 24" fill="#E6EDF3">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.492.997.107-.776.418-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.382 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23.955-.265 1.98-.398 3-.403 1.02.005 2.045.138 3 .403 2.29-1.552 3.295-1.23 3.295-1.23.65 1.653.24 2.873.12 3.176.77.838 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.82 1.096.82 2.21 0 1.597-.015 2.887-.015 3.28 0 .32.215.694.825.576 4.765-1.587 8.2-6.085 8.2-11.387 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/cagataycaliskan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="#0A66C2"
                  style={{
                    marginTop: 20,
                    backgroundColor: "white",
                    borderRadius: 8,
                  }}
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19.5h-3v-10h3v10zm-1.5-11.29c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.29h-3v-5.554c0-1.32-.027-3.021-1.843-3.021-1.844 0-2.127 1.437-2.127 2.924v5.651h-3v-10h2.886v1.367h.041c.402-.763 1.381-1.565 2.844-1.565 3.044 0 3.609 2.004 3.609 4.612v5.586z" />
                </svg>
              </a>
            </div>
          </aside>

          <main className="flex-grow p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
