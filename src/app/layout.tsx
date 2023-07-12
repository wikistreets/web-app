import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: "500",
});

export const metadata = {
  title: "Wikistreets",
  description: "The Collaborative Map Maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dm_sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
