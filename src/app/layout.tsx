import { Metadata } from "next";
import "./globals.scss";
import { MainNavbar } from "@/navigation/navbar/main/mainNavbar";

export const metadata: Metadata = {
  title: "Wtelno - Oficjalna strona wsi Wtelno",
  description:
    "Oficjalna strona wsi Wtelno oraz informacje i aktualności z nią związane",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
