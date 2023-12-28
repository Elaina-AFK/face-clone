import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
// import PostContextProvider from "./content";
import LeftAside from "./component/LeftAside";
import { Provider } from "jotai";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Face Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <aside className="fixed top-16 w-1/4 h-full min-h-screen flex flex-col items-center px-2 pl-2 max-lg:hidden">
            <LeftAside />
          </aside>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
