import { metadata as meta } from "@/data/meta";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = meta;

const RootLayout: React.FC<Readonly<{
  children: React.ReactNode;
}>> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-lg mx-auto px-4`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
