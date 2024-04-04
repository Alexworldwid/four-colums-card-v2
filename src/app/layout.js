import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '500', '600', '800', '900'] });

export const metadata = {
  title: "four column card component",
  description: "practice Grid with four card component",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <footer className="flex flex-col justify-center my-5">
          <p class="text-center">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
           <br /> Coded by <a href="#">Alice</a>.
          </p>
        </footer>  
      </body>
    </html>
  );
}
