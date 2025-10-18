import { Geist, Geist_Mono,Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import 'lenis/dist/lenis.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta', 
  display: 'swap',
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rocs",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.className} antialiased`}
      suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
