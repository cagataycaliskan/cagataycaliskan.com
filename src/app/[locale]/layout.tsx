import type { Metadata } from "next";
import "./globals.css";
import LocalSwitcher from "../../components/local-switcher";
import HeaderLi from "../../utils/HeaderLi";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ThemeProvider } from "../../components/providers/ThemeProvider";
import { ThemeToggle } from "../../components/ui/ThemeToggle";
import Footer from "../../components/layout/Footer";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: {
      default: 'Çağatay Çalışkan - Frontend Developer',
      template: '%s | Çağatay Çalışkan'
    },
    description: t('description'),
    keywords: ['software developer', 'full stack developer', 'react', 'typescript', 'next.js', 'node.js', 'portfolio'],
    authors: [{ name: 'Çağatay Çalışkan', url: 'https://cagataycaliskan.com' }],
    creator: 'Çağatay Çalışkan',
    publisher: 'Çağatay Çalışkan',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://cagataycaliskan.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'tr': '/tr',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://cagataycaliskan.com',
      siteName: 'Çağatay Çalışkan Portfolio',
      title: 'Çağatay Çalışkan - Frontend Developer',
      description: t('description'),
      images: [{
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Çağatay Çalışkan - Frontend Developer',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Çağatay Çalışkan - Frontend Developer',
      description: t('description'),
      images: ['/og-image.svg'],
      creator: '@cagataycaliskan',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // verification: {
    //   google: 'your-google-verification-code', // Google Search Console'dan alınacak
    //   yandex: 'your-yandex-verification-code', // Yandex Webmaster'dan alınacak
    //   yahoo: 'your-yahoo-verification-code',   // Yahoo'dan alınacak
    // },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  // Get messages for the client
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`../../../messages/en.json`)).default;
  }

  const t = await getTranslations();

  const translations = {
    homePage: t("homePage"),
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Çağatay Çalışkan",
              "jobTitle": "Frontend Developer",
              "description": "Frontend Developer with expertise in React, TypeScript, Next.js, and modern web technologies",
              "url": "https://cagataycaliskan.com",
              "sameAs": [
                "https://github.com/cagataycaliskan",
                "https://linkedin.com/in/cagataycaliskan",
                "https://twitter.com/cagataycaliskan"
              ],
              "knowsAbout": [
                "Software Development",
                "Full Stack Development",
                "Frontend Development",
                "Mobile Development",
                "Flutter",
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Web Development"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Your University"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Your Current Company"
              }
            })
          }} 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme() {
                  try {
                    const theme = localStorage.getItem('theme') || 'dark';
                    const resolvedTheme = theme === 'system' 
                      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                      : theme;
                    document.documentElement.classList.add(resolvedTheme);
                  } catch (e) {
                    document.documentElement.classList.add('dark');
                  }
                }
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', setTheme);
                } else {
                  setTheme();
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900 text-black dark:text-white`} suppressHydrationWarning>
        {/* Skip Links */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:z-50">
          Skip to main content
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-gradient-to-r from-slate-50/90 to-blue-50/90 dark:from-gray-900/90 dark:to-slate-900/90 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm" role="banner">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
              {/* Logo - Always Left */}
              <Link href={`/${locale}`} passHref legacyBehavior>
                <a className="group flex items-center space-x-3" aria-label="Go to homepage">
                  <div className="w-8 h-8 md:w-8 md:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm" aria-hidden="true">
                    CC
                  </div>
                  <span className="gradient-text font-display font-bold text-base md:text-xl group-hover:scale-105 transition-transform duration-200">
                    Çağatay Çalışkan
                  </span>
                </a>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
                <ul className="flex items-center space-x-6">
                  <li><ThemeToggle /></li>
                  <li><LocalSwitcher /></li>
                </ul>
              </nav>

              {/* Mobile Navigation */}
              <div className="block md:hidden">
                <Sidebar locale={locale} translations={translations} />
              </div>
            </div>
          </header>
          <div className="flex flex-1 w-full">
            <main id="main-content" className="flex-grow min-h-[calc(100vh-theme(spacing.20)-theme(spacing.16))]" role="main">{children}</main>
          </div>
            <Footer locale={locale} translations={translations} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
