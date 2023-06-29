
import './globals.css'
import { Inter } from 'next/font/google'
import Sidenav from '../components/sideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
    <div className='flex w-full '>
   
      <Sidenav/>
<div className='flex-1'>
<Nav/>
  {children}
  <Footer/>
  </div>
        </div>
        

        </body>
    </html>
  )
}
