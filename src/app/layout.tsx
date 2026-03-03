import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimsonText = Crimson_Text({ 
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: {
    default: "The Grey Wave | Canadian Seniors Housing Newsletter",
    template: "%s | The Grey Wave"
  },
  description: "Canada's premier newsletter on seniors housing and demographic trends. Weekly data-driven analysis by James Baxter, Calgary-based seniors housing expert.",
  keywords: ["seniors housing", "Canada demographics", "aging population", "real estate", "housing market", "CMHC", "Statistics Canada"],
  authors: [{ name: "James Baxter" }],
  creator: "James Baxter",
  publisher: "The Grey Wave",
  metadataBase: new URL("https://seniorshousingcanada.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://seniorshousingcanada.ca",
    siteName: "The Grey Wave",
    title: "The Grey Wave | Canadian Seniors Housing Newsletter",
    description: "Canada's premier newsletter on seniors housing and demographic trends. Weekly data-driven analysis by Calgary-based expert James Baxter.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Grey Wave - Canadian Seniors Housing Newsletter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grey Wave | Canadian Seniors Housing Newsletter",
    description: "Weekly data-driven analysis of Canada's seniors housing market and demographic trends.",
    creator: "@jamesbaxter_cre",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f1c2e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}