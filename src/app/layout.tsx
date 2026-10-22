import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu SaaS",
  description: "SaaS multi-tenant com Next.js, Prisma e Stripe",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="site-header">
          <Link href="/" className="brand">
            Meu SaaS
          </Link>
          <nav className="nav">
            <Link href="/login" className="btn btn-secondary">
              Entrar
            </Link>
            <Link href="/register" className="btn">
              Começar
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
