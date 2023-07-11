import "./globals.css";

export const metadata = {
  title: "Wikistreets",
  description: "The Collaborative Map Maker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
