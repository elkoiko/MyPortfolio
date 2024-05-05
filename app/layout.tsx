import type { Metadata } from "next";
import { Fjalla_One } from "next/font/google";
import '@/app/ui/globals.css';

const inter = Fjalla_One({
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Thomas Koiko",
  description: "Thomas Koiko's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
