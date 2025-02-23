import './globals.css';
import { Inter } from 'next/font/google';
import Background from './components/Background';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dandeib Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
