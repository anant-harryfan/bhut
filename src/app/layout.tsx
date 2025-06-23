import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from '@/providers/query-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amazon Clone - Online Shopping',
  description: 'Shop online for electronics, computers, clothing, shoes, toys, books, DVDs, sporting goods, beauty & more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"dd"}>
        <ClerkProvider>
          <Providers>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}