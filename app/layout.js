import { Funnel_Display, Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnal-display",
  subsets: ["latin"],
});

const MontserratDisplay = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata = {
  title: "Trizentic",
  description: "Business Solutions for everyone",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MontserratDisplay.variable} ${funnelDisplay.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
