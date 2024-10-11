import { Analytics } from "@vercel/analytics/react";
import "./globals.css";


export const metadata = {
  title: "Eulerv. Portfólio",
  description: "Protótipo de portfólio Backend",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
      <Analytics />
    </html>
  );
}
