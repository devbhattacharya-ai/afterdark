import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFTERDARK — GO DARK. | Premium dark chocolate concept",
  description:
    "Concept demo: a cinematic product story for premium 85% dark chocolate. Discover the bar, tasting notes, and the ritual.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
