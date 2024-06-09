
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
    <Head>
      <title>User Management App</title>
    </Head>
    <Navbar />
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
    </main>
    </div>
    
  );
}
