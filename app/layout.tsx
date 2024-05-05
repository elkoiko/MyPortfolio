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
  keywords: ['C#', '.NET', 'dotnet', 'developer', 'thomas', 'couacault', 'koiko', 'backend'],
  authors: [{name: 'Thomas Couacault', url: 'https://thomaskoiko.com'}],
  creator: 'Thomas Couacault',
  publisher: 'Thomas Couacault',
  openGraph: {
    title: 'Thomas Koiko',
    description: 'Thomas Koiko\'s portfolio',
    url: 'https://thomaskoiko.com',
    siteName: 'Thomas Koiko',
    locale: 'en_US',
    type: 'website',
  },
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
