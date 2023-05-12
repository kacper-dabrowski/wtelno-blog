import { Metadata } from "next";
import "./globals.scss";
import { MainNavbar } from "@/navigation/navbar/main/mainNavbar";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Wtelno - Oficjalna strona wsi Wtelno",
  description:
    "Oficjalna strona wsi Wtelno oraz informacje i aktualności z nią związane",
};

const font = Montserrat({
  subsets: ["latin"],
  display: "block",
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
