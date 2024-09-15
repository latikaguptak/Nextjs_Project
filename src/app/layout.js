import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Connect",
  description: "Created by Latika Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        {/* <div>Amal</div> */}
        <Navbar/>
        {children}
        <Footer/>
        
        </div>
        </body>
    </html>

  );
}
