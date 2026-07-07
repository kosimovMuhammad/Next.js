import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SettingsProvider } from "@/lib/settings-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const themeInitScript = `(function(){try{var s=JSON.parse(localStorage.getItem('lumen-settings')||'{}');var theme=s.theme||'dark';var resolved=theme==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):theme;var root=document.documentElement;root.setAttribute('data-theme',resolved);root.setAttribute('data-font',s.font||'sans');if(s.locale)root.setAttribute('lang',s.locale);if(s.accent)root.style.setProperty('--accent',s.accent);}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Lumen Studio — Product design that ships",
  description:
    "Lumen is a small product design studio helping teams design, build, and ship digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <SettingsProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
