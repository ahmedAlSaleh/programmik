import type { Metadata } from "next";
import FloatingRobot from "@/components/floating-robot";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import { LanguageProvider } from "@/components/language-provider";
import MotionController from "@/components/motion-controller";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Programmik",
  description: "Programmik is a digital studio crafting premium websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased animated-ui">
        <div className="site-motion-bg" aria-hidden="true" />
        <LanguageProvider>
          <MotionController />
          <div className="relative z-10 site-open">
            <SiteHeader />
            <main id="page-content">{children}</main>
            <SiteFooter />
          </div>
          <FloatingRobot />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
