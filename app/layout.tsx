import type { Metadata } from "next";
import "@/styles/normalize.scss";
import "@/styles/globals.scss";
import StoreProvider from "./StoreProvider";
import Head from "next/head";
import logo from "@/assets/logos/esports_logo.png";

export const metadata: Metadata = {
  title: "Educap Tournament",
  description: "Турнир Министерства высшего образования, науки и инноваций",
  metadataBase: new URL('https://educap-uz.netlify.app/'),
  openGraph: {
    title: "Educap Tournament",
    description: "Турнир Министерства высшего образования, науки и инноваций",
    url: 'https://educap-uz.netlify.app/',
    images: [
      {
        url: logo.src,
        alt: "Educap Tournament",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <link rel="icon" href="./innovation_logo.png"></link>
      <Head>
        <meta name="description" content={metadata.description as string} />
        <meta property="og:title" content={metadata.openGraph!.title as string} />
        <meta property="og:description" content={metadata.openGraph!.description as string} />
        <meta property="og:image" content={(metadata.openGraph!.images as Array<{ url: string }>)[0].url} />
        <link rel="icon" href="/innovation_logo.png" />
      </Head>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
