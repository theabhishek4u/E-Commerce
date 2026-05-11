import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Zylora – The Future of Online Shopping",
  description:
    "Shop smarter with Zylora. Premium electronics, fashion, home essentials and more. Free delivery on orders above ₹499. Discover more with Zylora.",
  keywords: [
    "Zylora",
    "online shopping",
    "premium",
    "electronics",
    "fashion",
    "deals",
    "INR",
    "India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
