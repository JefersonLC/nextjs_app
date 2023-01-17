import { Roboto } from '@next/font/google';
import Link from 'next/link';
import NavContent from '../components/NavContent';
import '../styles/globals.css';
import '../styles/RootLayout.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'optional',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <title>APP NEXT 13</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-container">
            <Link href="/" className='nav-brand'>STORE</Link>
            <NavContent />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
