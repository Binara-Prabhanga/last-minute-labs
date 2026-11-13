import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// One family, used at two extremes: tight and heavy for display, open and calm for text.
const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  axes: ["opsz", "wdth"],
});

const description =
  "Whether you are stuck with an assignment, need a system built fast, or want to learn hands-on, we've got you covered.";

export const metadata: Metadata = {
  metadataBase: new URL("https://last-minute-labs.vercel.app"),
  title: "Last Minute Labs | IT project help for university students",
  description,
  openGraph: {
    title: "Last Minute Labs",
    description,
    type: "website",
    images: ["/last-minute-labs-02.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F2F7FB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
