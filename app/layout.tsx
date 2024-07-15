import type { Metadata } from "next";
import "@/styles/normalize.scss";
import "@/styles/globals.scss";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Educap",
  description: "Турнир Министерства высшего образования, науки и инноваций",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <link rel="icon" href="./innovation_logo.png"></link>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
