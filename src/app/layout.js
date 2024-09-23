import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { TheamProvider } from "../../context/TheamContext";
<<<<<<< HEAD
import AuthProvider from "../../components/AuthProvider/AuthProvider";
=======
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Connect",
  description: "Created by Latika Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheamProvider>
<<<<<<< HEAD
          <AuthProvider>


=======
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1

        <div className="container">
        <Navbar/>
        {/* <Try/> */}
          {children}
        <Footer/>
        
        </div>
<<<<<<< HEAD

          </AuthProvider>
=======
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
        </TheamProvider>
        </body>
    </html>

  );
}
