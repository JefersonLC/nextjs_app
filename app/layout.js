import { Roboto } from '@next/font/google';
import Link from 'next/link';
import NavContent from '../components/NavContent';
import '../styles/globals.css';
import '../styles/RootLayout.css';

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header className="nav">
          <nav className="nav-container">
            <Link href="/" className="nav-brand">
              STORE
            </Link>
            <NavContent />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
