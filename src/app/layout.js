
import './globals.css'
import { Inter } from 'next/font/google'
import Sidenav from '../components/sideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import NextAuthProvider  from "./provider";
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ session,children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider >
    <div className='flex w-full '>
   
      <Sidenav/>
<div className='flex-1'>
<Nav/>
  {children}
  <Footer/>
  </div>
        </div>
        </NextAuthProvider>

        </body>
    </html>
  )
}
