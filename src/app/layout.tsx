import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper";
import GlobalStylesProvider from "./components/GlobalStyleProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dia dos Professores",
  description: "Confira nossas sugestões de brindes para o Dia dos Professores",
  // Favicon
  icons: '/favicon.png',

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Dia dos Professores",
    description: "Confira nossas sugestões de brindes para o Dia dos Professores",
    type: 'website',
    url: 'https://seusite.com.br/dia-dos-professores',
    images: [
      {
        url: 'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755523544/dia-dos-professores_irf8uq.jpg',
        width: 1200,
        height: 630,
        alt: 'Brindes personalizados para o Dia dos Professores',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Dia dos Professores",
    description: "Confira nossas sugestões de brindes para o Dia dos Professores",
    images: [
      'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1755523544/dia-dos-professores_irf8uq.jpg',
    ],
  },

  // Robôs de indexação (opcional)
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProviderWrapper>
          <GlobalStylesProvider />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
