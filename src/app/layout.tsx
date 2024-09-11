import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ".//global.scss";

const poppins = Poppins({
   subsets: ["latin"],
  weight: ["300","400","600"],

 });

export const metadata: Metadata = {
  title: "Flexwork",
  description: "Conectando Proyectos con Talento Especializado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
