// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
{/* <body className={inter.className}>{children}</body> */}


import './globals.css'
export const metadata = {
  title: 'Todo app',
  description: 'Mahdizamanin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
