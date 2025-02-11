import localFont from "next/font/local";
import "./globals.css";

const gesta = localFont({ src: "./gesta.otf" });

export const metadata = {
  title: "Talentship - Scale your Tech Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body
        className={`${gesta.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
