import { Bowlby_One_SC, Bricolage_Grotesque, Caveat, Varela_Round } from "next/font/google";
import "./globals.css";

const caveatSan = Varela_Round({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "400",
});

const bowlyOne = Bowlby_One_SC({
  variable: "--font-bowly",
  subsets: ["latin"],
  weight: "400"
})

export const metadata = {
  title: "Wears | Premium Wears with affordable price",
  description: "X wears is premium wears",
  icons: {
    icon: '/logo/logo-main-1.png',
  }
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${caveatSan.variable} ${bricolage.variable} ${bowlyOne.variable} h-full bg-black  antialiased selection:bg-pink-600 selection:text-white scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
