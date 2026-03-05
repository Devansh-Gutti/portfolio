import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Devansh Guttikonda | Software Engineer @ NVIDIA",
  description:
    "Portfolio of Devansh Guttikonda — Software Engineer at NVIDIA. Building safety-critical AI inference infrastructure for autonomous driving at the intersection of GPU computing and real-time systems.",
  keywords: [
    "Devansh Guttikonda",
    "NVIDIA",
    "Software Engineer",
    "CUDA",
    "TensorRT",
    "Autonomous Driving",
    "Portfolio",
    "AI",
    "GPU Computing",
  ],
  authors: [{ name: "Devansh Guttikonda" }],
  openGraph: {
    title: "Devansh Guttikonda | Software Engineer @ NVIDIA",
    description:
      "Building safety-critical AI inference infrastructure for autonomous driving at the intersection of GPU computing and real-time systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Guttikonda | Software Engineer @ NVIDIA",
    description:
      "Building safety-critical AI inference infrastructure for autonomous driving at the intersection of GPU computing and real-time systems.",
  },
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
