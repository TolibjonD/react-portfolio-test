import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { MyProvider } from "@/components/MyProvider";


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saidkodirov Tolibjon",
  description: "Portfolio project of Tolibjon Saidkodirov",
  icons: ['/icon.ico']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <MyProvider>
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
