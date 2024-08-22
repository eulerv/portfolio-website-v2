import "./globals.css";

export const metadata = {
  title: "Eulerv. Portfólio",
  description: "Protótipo de portfólio novo de Backend",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body> 
    </html>
  );
}
