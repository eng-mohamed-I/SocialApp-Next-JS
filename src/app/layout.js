import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gaza",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="sidebar">
          <Sidebar />
        </div>
        <main className="main-layout">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
