import type { Metadata } from "next";
import { Roboto as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ['latin']
  // weight: "300"
})

export const metadata: Metadata = {
  title: "LGPD: Seus direitos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
